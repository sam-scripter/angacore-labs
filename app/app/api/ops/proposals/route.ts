// Proposals API — triggers NAMI to generate a proposal for a given lead.
// POST /api/ops/proposals — sends lead_id to NAMI webhook

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { lead_id } = await request.json();

    if (!lead_id) {
      return NextResponse.json({ error: 'lead_id required' }, { status: 400 });
    }

    const namiWebhookUrl = process.env.NAMI_WEBHOOK_URL;
    if (!namiWebhookUrl) {
      return NextResponse.json({ error: 'NAMI not configured' }, { status: 500 });
    }

    // Fire NAMI webhook — non-blocking, we don't wait for the proposal to generate
    // NAMI will send a Telegram notification when done
    await fetch(namiWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id })
    });

    return NextResponse.json({ success: true, message: 'Proposal generation started' });
  } catch (error) {
    console.error('Proposals API error:', error);
    return NextResponse.json({ error: 'Failed to trigger proposal' }, { status: 500 });
  }
}