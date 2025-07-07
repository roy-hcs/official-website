import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
  replaysOnErrorSampleRate: 1.0,
  
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  
  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  // Configure the scope used by this client
  beforeSend(event) {
    // Check if it is an exception, if so, show the report dialog
    if (event.exception && typeof window !== 'undefined') {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
  
  // Performance Monitoring
  profilesSampleRate: 1.0,
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Release tracking
  release: `${process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'dev'}`,
  
  // Additional tags
  initialScope: {
    tags: {
      component: "client"
    }
  }
});
