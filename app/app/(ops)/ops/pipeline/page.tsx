// Pipeline Page — kanban board showing leads grouped by pipeline stage.
// Drag is not implemented yet — status changes via the leads page dropdown.
// Each card shows company name, score, industry and a link to the website.

"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Loader2 } from "lucide-react";

type Lead = {
  id: number;
  company_name: string;
  website: string;
  industry: string;
  score: number;
  status: string;
  reason: string;
};

// Pipeline columns in order
const COLUMNS = [
  { key: 'new', label: 'New', color: 'border-blue-500/30 bg-blue-500/5' },
  { key: 'contacted', label: 'Contacted', color: 'border-purple-500/30 bg-purple-500/5' },
  { key: 'proposal_sent', label: 'Proposal Sent', color: 'border-orange-500/30 bg-orange-500/5' },
  { key: 'won', label: 'Won', color: 'border-green-500/30 bg-green-500/5' },
  { key: 'lost', label: 'Lost', color: 'border-red-500/30 bg-red-500/5' },
];

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 9
    ? "bg-green-500/10 text-green-600"
    : score >= 7
    ? "bg-yellow-500/10 text-yellow-600"
    : "bg-red-500/10 text-red-600";
  return (
    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${color}`}>
      {score}/10
    </span>
  );
}

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ops/leads')
      .then(res => res.json())
      .then(data => { setLeads(data.leads || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Group leads by status
  const grouped = COLUMNS.reduce((acc, col) => {
    acc[col.key] = leads.filter(l => l.status === col.key);
    return acc;
  }, {} as Record<string, Lead[]>);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold">Pipeline</h1>
        <p className="text-muted-foreground mt-1">
          {leads.length} leads across {COLUMNS.length} stages
        </p>
      </div>

      {/* Kanban columns — horizontal scroll on small screens */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {COLUMNS.map(col => (
          <div key={col.key} className="flex-shrink-0 w-72">
            {/* Column header */}
            <div className={`rounded-t-xl border border-b-0 px-4 py-3 ${col.color}`}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{col.label}</span>
                <span className="text-xs text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full">
                  {grouped[col.key]?.length || 0}
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className={`rounded-b-xl border min-h-32 p-2 space-y-2 ${col.color}`}>
              {grouped[col.key]?.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-6">
                  No leads here
                </p>
              ) : (
                grouped[col.key].map(lead => (
                  <div
                    key={lead.id}
                    className="bg-card border border-border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-medium text-sm leading-tight">
                        {lead.company_name}
                      </p>
                      <ScoreBadge score={lead.score} />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {lead.industry}
                    </p>
                    {lead.reason && (
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {lead.reason}
                      </p>
                    )}
                    <a
                      href={lead.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      Visit site <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}