import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_name, user_lastname, user_email, service, message } = body;

    const crustWebhookUrl = process.env.CRUST_WEBHOOK_URL;

    if (!crustWebhookUrl) {
      console.error('CRUST_WEBHOOK_URL not set');
      return NextResponse.json({ success: false }, { status: 500 });
    }

    await fetch(crustWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'website_contact_form',
        sender_name: `${user_name} ${user_lastname}`.trim(),
        sender_email: user_email,
        subject: `Website Inquiry: ${service || 'General'}`,
        message: message,
        service_interest: service,
        received_at: new Date().toISOString()
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}