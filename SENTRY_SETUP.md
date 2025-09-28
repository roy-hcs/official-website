# Sentry Configuration

This project uses Sentry for error monitoring and performance tracking. Follow these steps to set up Sentry properly.

## ✅ What's Already Configured

The following Sentry integration has been completed:

- **Sentry SDK**: Installed and configured for Next.js 15.3.5
- **Instrumentation**: Modern Next.js 15 instrumentation setup
- **Error Handling**: Global error boundaries and API error handling
- **Performance Monitoring**: Traces and profiling enabled
- **Session Replay**: Error replay functionality
- **Source Maps**: Automatic upload configuration

## Files Added/Modified

### Configuration Files

- `instrumentation.ts`: Main instrumentation file for server/edge runtime
- `instrumentation-client.ts`: Client-side instrumentation
- `sentry.server.config.ts`: Server-side Sentry configuration
- `sentry.edge.config.ts`: Edge runtime Sentry configuration
- `next.config.ts`: Updated with Sentry webpack plugin

### Error Handling

- `app/error.tsx`: Route-level error boundary
- `app/global-error.tsx`: Application-level error boundary
- `components/common/ErrorBoundary.tsx`: Reusable error boundary component

### Utilities

- `lib/sentry.ts`: Sentry helper functions and utilities
- `middleware.ts`: Middleware with automatic error capture

### Documentation

- `.env.local.example`: Environment variables template
- `SENTRY_SETUP.md`: This setup guide

## Setup Steps

### 1. Create a Sentry Account

1. Go to [sentry.io](https://sentry.io) and create an account
2. Create a new project for your Next.js application
3. Select "Next.js" as the platform

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Sentry configuration:

```bash
cp .env.local.example .env.local
```

Update the following variables:

- `NEXT_PUBLIC_SENTRY_DSN`: Your project's DSN from Sentry dashboard
- `SENTRY_ORG`: Your Sentry organization slug
- `SENTRY_PROJECT`: Your Sentry project name
- `SENTRY_AUTH_TOKEN`: Auth token for source maps upload (create at [Sentry API tokens page](https://sentry.io/settings/account/api/auth-tokens/))
- `NEXT_PUBLIC_SENTRY_RELEASE`: Optional release version for tracking deployments

### 3. Usage Examples

#### In React Components

```typescript
import { captureException } from '@/lib/sentry';

function MyComponent() {
  const handleError = () => {
    try {
      // Some risky operation
      throw new Error('Something went wrong');
    } catch (error) {
      captureException(error, { component: 'MyComponent' });
    }
  };

  return <button onClick={handleError}>Test Error</button>;
}
```

#### In API Routes

```typescript
import { captureApiError } from '@/lib/sentry';

export async function GET(request: NextRequest) {
  try {
    // Your API logic
    return NextResponse.json({ success: true });
  } catch (error) {
    captureApiError(error, {
      url: request.url,
      method: 'GET',
      status: 500,
    });
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

#### Setting User Context

```typescript
import { setUserContext } from '@/lib/sentry';

// When user logs in
setUserContext({
  id: '123',
  email: 'user@example.com',
  username: 'john_doe',
});
```

### 4. Production Considerations

#### Sample Rates

For production, consider adjusting sample rates in your Sentry configuration:

```typescript
// In production, reduce sample rates
tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,
profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,
replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.01 : 0.1,
```

#### Source Maps

Source maps are automatically uploaded to Sentry when you build your application. Make sure your `SENTRY_AUTH_TOKEN` is set for this to work.

#### Filtering Errors

The server configuration includes filtering for common non-critical errors like `ECONNRESET` and `EPIPE`. You can customize this in `sentry.server.config.ts`.

### 5. Deployment

When deploying to production:

1. Set all environment variables in your deployment platform
2. Source maps will be uploaded automatically during build
3. Monitor the Sentry dashboard for errors and performance issues

### 6. Debugging

To debug Sentry configuration:

1. Set `debug: true` in your Sentry configuration files
2. Check the browser console and server logs for Sentry-related messages
3. Use the Sentry CLI to test configuration: `npx @sentry/cli info`

### 7. Testing Error Reporting

You can test error reporting by:

1. Adding a test button that throws an error in your components
2. Checking API routes with invalid data
3. Forcing a server error

The error should appear in your Sentry dashboard within a few minutes.

## Additional Resources

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Performance Monitoring](https://docs.sentry.io/platforms/javascript/guides/nextjs/performance/)
- [Sentry Session Replay](https://docs.sentry.io/platforms/javascript/guides/nextjs/session-replay/)

## Build Status

✅ **Ready to use!** The Sentry integration is fully configured and tested.
