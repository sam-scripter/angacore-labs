// Communications Page — displays CRUST activity log.
// Shows all emails and contact form submissions CRUST has processed,
// with the AI-generated draft reply for each one.
// Expandable rows reveal the full draft for easy copy-paste.

"use client";

import { useState, useEffect } from "react";
import { 
  Loader2, RefreshCw, ChevronDown, ChevronUp, Copy, Check,
  Mail, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Communication = {
  id: number;
  email_id: string;
  sender_name: string;
  sender_email: string;
  subject: string;
  category: string;
  urgency: string;
  summary: string;
  draft_reply: string;
  source: string;
  created_at: string;
};

// Urgency badge colors
function UrgencyBadge({ urgency }: { urgency: string }) {
  const styles: Record<string, string> = {
    high: "bg-red-500/10 text-red-600 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    low: "bg-green-500/10 text-green-600 border-green-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${styles[urgency] || styles.low}`}>
      {urgency}
    </span>
  );
}

// Category badge
function CategoryBadge({ category }: { category: string }) {
  const styles: Record<string, string> = {
    client_inquiry: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    proposal_followup: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    partnership_request: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    invoice_related: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    spam: "bg-gray-500/10 text-gray-600 border-gray-500/20",
    other: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  };
  const labels: Record<string, string> = {
    client_inquiry: "Client Inquiry",
    proposal_followup: "Proposal Follow-up",
    partnership_request: "Partnership",
    invoice_related: "Invoice",
    spam: "Spam",
    other: "Other",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${styles[category] || styles.other}`}>
      {labels[category] || category}
    </span>
  );
}

// Copy to clipboard button with feedback
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={copy} className="text-xs h-7">
      {copied ? (
        <><Check className="w-3 h-3 mr-1 text-green-500" />Copied</>
      ) : (
        <><Copy className="w-3 h-3 mr-1" />Copy Draft</>
      )}
    </Button>
  );
}

export default function CommunicationsPage() {
  const [comms, setComms] = useState<Communication[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const fetchComms = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (categoryFilter) params.set('category', categoryFilter);

      const res = await fetch(`/api/ops/communications?${params}`);
      const data = await res.json();
      setComms(data.communications || []);
    } catch (error) {
      console.error('Failed to fetch communications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchComms(); }, [categoryFilter]);

  // Client-side search filter
  const filtered = comms.filter(c =>
    c.sender_name?.toLowerCase().includes(search.toLowerCase()) ||
    c.sender_email?.toLowerCase().includes(search.toLowerCase()) ||
    c.subject?.toLowerCase().includes(search.toLowerCase()) ||
    c.summary?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold">Communications</h1>
          <p className="text-muted-foreground mt-1">
            {filtered.length} messages · monitored by CRUST
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={fetchComms} disabled={loading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Input
            placeholder="Search sender, subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-4"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">All Categories</option>
          <option value="client_inquiry">Client Inquiry</option>
          <option value="proposal_followup">Proposal Follow-up</option>
          <option value="partnership_request">Partnership</option>
          <option value="invoice_related">Invoice</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Communications list */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          No communications yet.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((comm) => (
            <div key={comm.id} className="border border-border rounded-xl overflow-hidden bg-card">
              {/* Main row */}
              <div
                className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-secondary/30 transition-colors"
                onClick={() => setExpandedId(expandedId === comm.id ? null : comm.id)}
              >
                {/* Source icon */}
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  {comm.source === 'website_contact_form' 
                    ? <Globe className="w-4 h-4 text-muted-foreground" />
                    : <Mail className="w-4 h-4 text-muted-foreground" />
                  }
                </div>

                {/* Sender and subject */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm truncate">
                      {comm.sender_name || comm.sender_email}
                    </p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {comm.sender_email}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {comm.subject}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <CategoryBadge category={comm.category} />
                  <UrgencyBadge urgency={comm.urgency} />
                  <span className="text-xs text-muted-foreground">
                    {new Date(comm.created_at).toLocaleDateString('en-KE', {
                      day: 'numeric', month: 'short'
                    })}
                  </span>
                  {expandedId === comm.id
                    ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  }
                </div>
              </div>

              {/* Expanded panel */}
              {expandedId === comm.id && (
                <div className="border-t border-border px-4 py-4 bg-secondary/20 space-y-4">
                  {/* Summary */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Summary
                    </p>
                    <p className="text-sm">{comm.summary}</p>
                  </div>

                  {/* Draft reply */}
                  {comm.draft_reply && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Draft Reply
                        </p>
                        <CopyButton text={comm.draft_reply} />
                      </div>
                      <div className="bg-background border border-border rounded-lg p-3">
                        <p className="text-sm whitespace-pre-wrap">{comm.draft_reply}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}