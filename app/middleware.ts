import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect /ops routes
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