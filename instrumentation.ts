import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side initialization
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime initialization (moved from sentry.edge.config.ts)
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      
      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1,
      
      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
      
      // Environment
      environment: process.env.NODE_ENV,
      
      // Release tracking
      release: `${process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'dev'}`,
      
      // Additional tags
      initialScope: {
        tags: {
          component: "edge"
        }
      }
    });
  }
}
