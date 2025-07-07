import { NextResponse, NextRequest } from 'next/server';
import * as Sentry from '@sentry/nextjs';

export function middleware(request: NextRequest) {  
  try {
    // Process the request and continue
    return NextResponse.next();
  } catch (error) {
    // Log the error to Sentry but don't rethrow
    Sentry.captureException(error);
    // Return a valid response even after an error
    return NextResponse.next();
  }
}

// More specific matcher to reduce scope and potential errors
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|webp)).*)',
  ],
};
