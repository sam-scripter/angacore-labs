// proxy.ts — replaces middleware.ts (Next.js 16 convention)
// Protects all /ops routes by checking for a valid session cookie.
// Unauthenticated requests are redirected to /ops-login.

import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/ops')) {
    const session = request.cookies.get('ops_session');
    
    if (!session || session.value !== process.env.OPS_SESSION_TOKEN) {
      return NextResponse.redirect(new URL('/ops-login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/ops/:path*']
};