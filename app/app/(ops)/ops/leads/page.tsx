// Leads Page — displays all ORION-discovered leads in a searchable, filterable table.
// Each lead shows company name, industry, score, status, and action buttons.
// "Generate Proposal" fires NAMI. "Update Status" moves the lead through the pipeline.
// This is a Client Component because it needs interactivity (search, filters, buttons).

"use client";

import React, { useState, useEffect } from "react";
import { 
  ExternalLink, 
  Loader2, 
  Search,
  RefreshCw,
  FileText,
  ChevronUp,
  ChevronDown,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Lead type matching our PostgreSQL schema
type Lead = {
  id: number;
  company_name: string;
  website: string;
  industry: string;
  score: number;
  status: string;
  reason: string;
  notes: string;
  proposal: string;
  created_at: string;
};

// Score badge color — green for high, yellow for medium, red for low
function ScoreBadge({ score }: { score: number }) {
  const color = score >= 9 
    ? "bg-green-500/10 text-green-600 border-green-500/20"
    : score >= 7 
    ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
    : "bg-red-500/10 text-red-600 border-red-500/20";
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${color}`}>
      {score}/10
    </span>
  );
}

// Status badge — color coded by pipeline stage
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    contacted: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    proposal_sent: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    won: "bg-green-500/10 text-green-600 border-green-500/20",
    lost: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  const labels: Record<string, string> = {
    new: "New",
    contacted: "Contacted",
    proposal_sent: "Proposal Sent",
    won: "Won",
    lost: "Lost",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${styles[status] || styles.new}`}>
      {labels[status] || status}
    </span>
  );
}

// Renders markdown-like proposal text with basic formatting
function ProposalRenderer({ text }: { text: string }) {
  const lines = text.split('\n');

  const renderInline = (line: string, key: number) => {
    // Split on **bold** patterns
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={key} className="text-muted-foreground leading-relaxed">
        {parts.map((part, i) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
            : <span key={i}>{part}</span>
        )}
      </p>
    );
  };

  return (
    <div className="space-y-1.5 text-sm">
      {lines.map((line, i) => {
        if (line.startsWith('# ')) {
          return <h2 key={i} className="font-display text-base font-bold mt-4 first:mt-0 text-foreground">{line.replace('# ', '')}</h2>;
        }
        if (line.startsWith('## ')) {
          return <h3 key={i} className="font-semibold text-sm mt-3 text-foreground border-b border-border pb-1">{line.replace('## ', '')}</h3>;
        }
        if (line.startsWith('- ')) {
          // Bullet points — also handle inline bold
          const content = line.replace('- ', '');
          const parts = content.split(/(\*\*.*?\*\*)/g);
          return (
            <div key={i} className="flex gap-2 text-muted-foreground">
              <span className="text-primary mt-0.5 flex-shrink-0">•</span>
              <p className="leading-relaxed">
                {parts.map((part, j) =>
                  part.startsWith('**') && part.endsWith('**')
                    ? <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
                    : <span key={j}>{part}</span>
                )}
              </p>
            </div>
          );
        }
        if (line.trim() === '') {
          return <div key={i} className="h-2" />;
        }
        return renderInline(line, i);
      })}
    </div>
  );
}

// Copy proposal to clipboard with feedback
function CopyProposalButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      {copied ? (
        <><Check className="w-3 h-3 text-green-500" />Copied</>
      ) : (
        <><Copy className="w-3 h-3" />Copy Proposal</>
      )}
    </button>
  );
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [generatingProposal, setGeneratingProposal] = useState<number | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<number | null>(null);
  const [expandedLead, setExpandedLead] = useState<number | null>(null);

  // Fetch leads from our API route on mount
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.set('status', statusFilter);
      
      const res = await fetch(`/api/ops/leads?${params}`);
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, [statusFilter]);

  // Filter leads by search term (client-side filtering)
  const filteredLeads = leads.filter(lead =>
    lead.company_name.toLowerCase().includes(search.toLowerCase()) ||
    lead.industry.toLowerCase().includes(search.toLowerCase()) ||
    lead.website.toLowerCase().includes(search.toLowerCase())
  );

  // Trigger NAMI to generate a proposal for a lead
  const generateProposal = async (leadId: number) => {
    setGeneratingProposal(leadId);
    try {
      await fetch('/api/ops/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: leadId })
      });
      alert('Proposal generation started. Check Telegram for the result.');
    } catch (error) {
      alert('Failed to trigger proposal generation.');
    } finally {
      setGeneratingProposal(null);
    }
  };

  // Update lead status
  const updateStatus = async (leadId: number, newStatus: string) => {
    setUpdatingStatus(leadId);
    try {
      await fetch('/api/ops/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus })
      });
      // Refresh leads after update
      await fetchLeads();
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setUpdatingStatus(null);
    }
  };

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold">Leads</h1>
          <p className="text-muted-foreground mt-1">
            {filteredLeads.length} leads · discovered by ORION
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchLeads}
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Filters row */}
      <div className="flex gap-4 mb-6">
        {/* Search input */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search company, industry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="proposal_sent">Proposal Sent</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      {/* Leads table */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          No leads found.
        </div>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Company</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Industry</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Score</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredLeads.map((lead) => (
                <React.Fragment key={lead.id}>
                  {/* Main row */}
                  <tr
                    key={lead.id}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* Expand button */}
                        <button
                          onClick={() => setExpandedLead(
                            expandedLead === lead.id ? null : lead.id
                          )}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {expandedLead === lead.id 
                            ? <ChevronUp className="w-4 h-4" />
                            : <ChevronDown className="w-4 h-4" />
                          }
                        </button>
                        <div>
                          <p className="font-medium">{lead.company_name}</p>
                          <a
                            href={lead.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                          >
                            {lead.website.replace('https://', '').replace('http://', '')}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {lead.industry}
                    </td>
                    <td className="px-4 py-3">
                      <ScoreBadge score={lead.score} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={lead.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* Generate proposal button */}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => generateProposal(lead.id)}
                          disabled={generatingProposal === lead.id}
                          className="text-xs h-7"
                        >
                          {generatingProposal === lead.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <><FileText className="w-3 h-3 mr-1" />Propose</>
                          )}
                        </Button>

                        {/* Status update dropdown */}
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          disabled={updatingStatus === lead.id}
                          className="text-xs h-7 rounded-md border border-input bg-background px-2 focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="proposal_sent">Proposal Sent</option>
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                        </select>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded row — shows reason, notes, and proposal if available */}
                  {expandedLead === lead.id && (
                    <tr key={`${lead.id}-expanded`} className="bg-secondary/20">
                      <td colSpan={5} className="px-4 py-4">
                        <div className="space-y-4">

                          {/* Why they need us */}
                          {lead.reason && (
                            <div>
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                                Why they need us
                              </p>
                              <p className="text-sm">{lead.reason}</p>
                            </div>
                          )}

                          {/* Proposal — detected by looking for proposal field */}
                          {lead.proposal ? (
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                  NAMI Proposal
                                </p>
                                <CopyProposalButton text={lead.proposal} />
                              </div>
                              <div className="bg-background border border-border rounded-lg p-4 max-h-96 overflow-y-auto">
                                <ProposalRenderer text={lead.proposal} />
                              </div>
                            </div>
                          ) : lead.notes ? (
                            <div>
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                                Notes
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {lead.notes.substring(0, 300)}
                                {lead.notes.length > 300 ? '...' : ''}
                              </p>
                            </div>
                          ) : null}

                          <p className="text-xs text-muted-foreground">
                            Added {new Date(lead.created_at).toLocaleDateString('en-KE', {
                              day: 'numeric', month: 'short', year: 'numeric'
                            })}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}