// Base API configuration and utility functions
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Generic fetch wrapper with error handling
 */
const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
};

/**
 * Submit lead information to the system
 */
export const submitInfo = async (params: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  productInterest?: string;
}) => {
  return fetchAPI('/system/lead/add', {
    method: 'POST',
    headers: {
      'Time-Zone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    body: JSON.stringify(params),
  });
};
