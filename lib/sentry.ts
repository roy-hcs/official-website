import * as Sentry from '@sentry/nextjs';

/**
 * Captures an exception with additional context
 */
export function captureException(
  error: Error,
  context?: Record<string, unknown>,
  tags?: Record<string, string>
) {
  return Sentry.withScope(scope => {
    if (context) {
      scope.setContext('additional_context', context);
    }
    if (tags) {
      scope.setTags(tags);
    }
    return Sentry.captureException(error);
  });
}

/**
 * Captures a message with additional context
 */
export function captureMessage(
  message: string,
  level: 'debug' | 'info' | 'warning' | 'error' | 'fatal' = 'info',
  context?: Record<string, unknown>
) {
  return Sentry.withScope(scope => {
    if (context) {
      scope.setContext('additional_context', context);
    }
    return Sentry.captureMessage(message, level);
  });
}

/**
 * Sets user context for Sentry
 */
export function setUserContext(user: {
  id?: string;
  email?: string;
  username?: string;
  [key: string]: unknown;
}) {
  Sentry.setUser(user);
}

/**
 * Adds breadcrumb to Sentry
 */
export function addBreadcrumb(breadcrumb: {
  message: string;
  category?: string;
  level?: 'debug' | 'info' | 'warning' | 'error' | 'fatal';
  data?: Record<string, unknown>;
}) {
  Sentry.addBreadcrumb(breadcrumb);
}

/**
 * Wrapper for async functions to automatically capture exceptions
 */
export function withSentryWrapper<
  T extends (...args: unknown[]) => Promise<unknown>,
>(fn: T, context?: Record<string, unknown>): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error instanceof Error) {
        captureException(error, context);
      }
      throw error;
    }
  }) as T;
}

/**
 * Performance monitoring wrapper
 */
export function withSentryPerformance<
  T extends (...args: unknown[]) => unknown,
>(fn: T, operationName: string, description?: string): T {
  return ((...args: Parameters<T>) => {
    return Sentry.startSpan(
      {
        op: operationName,
        name: description || operationName,
      },
      () => fn(...args)
    );
  }) as T;
}

/**
 * Custom hook for React components to capture component errors
 */
export function useSentryErrorHandler() {
  return (error: Error, errorInfo?: Record<string, unknown>) => {
    captureException(error, errorInfo ? { errorInfo } : undefined);
  };
}

/**
 * Utility to capture API errors
 */
export function captureApiError(
  error: Error,
  request: {
    url: string;
    method: string;
    status?: number;
    body?: unknown;
  }
) {
  return captureException(
    error,
    {
      api_request: request,
    },
    {
      error_type: 'api_error',
    }
  );
}

/**
 * Utility to capture database errors
 */
export function captureDatabaseError(
  error: Error,
  query?: string,
  params?: unknown
) {
  return captureException(
    error,
    {
      database_query: query,
      database_params: params,
    },
    {
      error_type: 'database_error',
    }
  );
}

/**
 * Utility to capture validation errors
 */
export function captureValidationError(
  error: Error,
  formData?: Record<string, unknown>
) {
  return captureException(
    error,
    {
      form_data: formData,
    },
    {
      error_type: 'validation_error',
    }
  );
}
