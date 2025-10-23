import { FC, SVGProps, useId } from 'react';

export const PAMMIconTwo: FC<SVGProps<SVGSVGElement>> = props => {
  const clipPathId = useId();
  const gradientId = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <foreignObject x="-20" y="-9.5" width="88" height="61.75">
        <div
          style={{
            backdropFilter: 'blur(10px)',
            clipPath: `url(#${clipPathId})`,
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="20"
        d="M0 19.2H4.36364V23.55C4.36364 25.29 13.3091 27.9 24 27.9C34.6909 27.9 43.6364 25.29 43.6364 23.55V10.5H48V23.55C48 28.9875 37.3091 32.25 24 32.25C10.6909 32.25 0 28.9875 0 23.55V19.2Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M0 10.4559C0 9.13235 0.872727 8.25 2.18182 8.25C3.49091 8.25 4.36364 9.13235 4.36364 10.4559V36.9265C4.36364 38.6912 13.3091 41.3382 24 41.3382C34.6909 41.3382 43.6364 38.6912 43.6364 36.9265V10.4559C43.6364 9.13235 44.5091 8.25 45.8182 8.25C47.1273 8.25 48 9.13235 48 10.4559V36.9265C48 42.4412 37.3091 45.75 24 45.75C10.6909 45.75 0 42.4412 0 36.9265V10.4559Z"
        fill="#020F2C"
      />
      <path
        d="M24 19.5C10.6909 19.5 0 16.125 0 10.5C0 4.875 10.6909 1.5 24 1.5C37.3091 1.5 48 4.875 48 10.5C48 16.35 37.3091 19.5 24 19.5ZM24 15C34.6909 15 43.6364 12.3 43.6364 10.5C43.6364 8.7 34.6909 6 24 6C13.3091 6 4.36364 8.7 4.36364 10.5C4.36364 12.3 13.3091 15 24 15Z"
        fill="#020F2C"
      />
      <defs>
        <clipPath id={clipPathId} transform="translate(20 9.5)">
          <path d="M0 19.2H4.36364V23.55C4.36364 25.29 13.3091 27.9 24 27.9C34.6909 27.9 43.6364 25.29 43.6364 23.55V10.5H48V23.55C48 28.9875 37.3091 32.25 24 32.25C10.6909 32.25 0 28.9875 0 23.55V19.2Z" />
        </clipPath>
        <linearGradient
          id={gradientId}
          x1="-7.36402"
          y1="24.4879"
          x2="21.644"
          y2="-9.9942"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DEEFF" />
          <stop offset="0.65073" stopColor="#0154FC" />
          <stop offset="1" stopColor="#733BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
