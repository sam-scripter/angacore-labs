// Stats API — returns summary numbers for the OPS dashboard home page.
// Single query using PostgreSQL aggregates for efficiency.

import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'angacore_db',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'angacore',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        COUNT(*)::int                                          AS total_leads,
        ROUND(AVG(score)::numeric, 1)                         AS avg_score,
        COUNT(*) FILTER (WHERE status = 'new')::int           AS new_leads,
        COUNT(*) FILTER (WHERE status = 'contacted')::int     AS contacted,
        COUNT(*) FILTER (WHERE status = 'proposal_sent')::int AS proposals_sent,
        COUNT(*) FILTER (WHERE status = 'won')::int           AS won,
        COUNT(*) FILTER (WHERE status = 'lost')::int          AS lost,
        COUNT(*) FILTER (WHERE score >= 9)::int               AS high_score_leads,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::int AS new_this_week
      FROM leads
    `);

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}