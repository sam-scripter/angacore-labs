// Communications API — fetches CRUST activity log from PostgreSQL.
// GET /api/ops/communications — returns all communications ordered by newest first
// Supports optional category and source filters via query params.

import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'angacore_db',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'angacore',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const source = searchParams.get('source');

    let query = `
      SELECT 
        id, email_id, sender_name, sender_email, subject,
        category, urgency, summary, draft_reply, source, created_at
      FROM communications
    `;
    const params: string[] = [];
    const conditions: string[] = [];

    if (category) {
      conditions.push(`category = $${params.length + 1}`);
      params.push(category);
    }

    if (source) {
      conditions.push(`source = $${params.length + 1}`);
      params.push(source);
    }

    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    query += ` ORDER BY created_at DESC LIMIT 50`;

    const result = await pool.query(query, params);

    return NextResponse.json({
      communications: result.rows,
      total: result.rowCount
    });
  } catch (error) {
    console.error('Communications API error:', error);
    return NextResponse.json({ error: 'Failed to fetch communications' }, { status: 500 });
  }
}