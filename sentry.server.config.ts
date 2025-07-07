import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
  // Performance Monitoring
  profilesSampleRate: 1.0,
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Release tracking
  release: `${process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'dev'}`,
  
  // Additional tags
  initialScope: {
    tags: {
      component: "server"
    }
  },
  
  // Server-specific configuration
  beforeSend(event) {
    // Filter out noisy errors in production
    if (process.env.NODE_ENV === 'production') {
      // Filter out common non-critical errors
      if (event.exception?.values?.[0]?.value?.includes('ECONNRESET')) {
        return null;
      }
      if (event.exception?.values?.[0]?.value?.includes('EPIPE')) {
        return null;
      }
    }
    return event;
  }
});
