import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rrh-cn.oss-cn-shenzhen.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
          },
        },
      ],
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

// Sentry configuration
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true, // Suppresses all logs

  // Source map upload configuration
  sourcemaps: {
    assets: ['.next/static/**/*'],
    ignore: ['node_modules/**/*'],
    uploadSourceMaps: process.env.NODE_ENV === 'production',
  },

  // Release configuration
  release: {
    name: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'dev',
    create: true,
    finalize: true,
    deploy: {
      env: process.env.NODE_ENV || 'development',
    },
  },

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.

  // Upload source maps in production
  hideSourceMaps: true,

  // Disable source map upload in development
  disableServerWebpackPlugin: process.env.NODE_ENV === 'development',
  disableClientWebpackPlugin: process.env.NODE_ENV === 'development',

  // Enable source map generation
  widenClientFileUpload: true,

  // Additional upload options
  errorHandler: (err: Error) => {
    console.warn('Sentry source map upload failed:', err);
  },
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
