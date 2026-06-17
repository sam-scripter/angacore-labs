// Logout route — clears the ops_session cookie and redirects to login.
// Called when the user clicks "Sign Out" in the sidebar.

import { NextResponse } from 'next/server';

export async function GET() {
  // Create redirect response to login page
  const response = NextResponse.redirect(
    new URL('/ops-login', process.env.NEXT_PUBLIC_SITE_URL || 'https://angacorelabs.com')
  );
  
  // Clear the session cookie by setting maxAge to 0
  response.cookies.set('ops_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0
  });
  
  return response;
}