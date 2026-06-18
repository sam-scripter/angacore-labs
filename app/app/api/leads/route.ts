// Leads API — handles fetching and updating leads from PostgreSQL.
// GET /api/ops/leads — returns all leads ordered by score descending
// PATCH /api/ops/leads — updates a lead's status (e.g. new → contacted)

import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Create a connection pool — reused across requests for efficiency.
// Reads connection details from environment variables set in docker-compose.
const pool = new Pool({
  host: process.env.DB_HOST || 'angacore_db',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'angacore',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

// GET — fetch all leads, newest and highest scored first
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // optional filter by status
    const industry = searchParams.get('industry'); // optional filter by industry

    // Build query dynamically based on filters
    let query = `
      SELECT 
        id, company_name, website, industry, score, 
        status, source, reason, notes, created_at, updated_at
      FROM leads
    `;
    const params: string[] = [];
    const conditions: string[] = [];

    if (status) {
      conditions.push(`status = $${params.length + 1}`);
      params.push(status);
    }

    if (industry) {
      conditions.push(`industry ILIKE $${params.length + 1}`);
      params.push(`%${industry}%`);
    }

    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    query += ` ORDER BY score DESC, created_at DESC`;

    const result = await pool.query(query, params);
    
    return NextResponse.json({ 
      leads: result.rows,
      total: result.rowCount 
    });
  } catch (error) {
    console.error('Leads API error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// PATCH — update a lead's status
export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();

    // Validate status is one of our allowed values
    const allowedStatuses = ['new', 'contacted', 'proposal_sent', 'won', 'lost'];
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const result = await pool.query(
      `UPDATE leads SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [status, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ lead: result.rows[0] });
  } catch (error) {
    console.error('Update lead error:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}