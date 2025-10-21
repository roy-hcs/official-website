import { FC, SVGProps, useId } from 'react';

export const PAMMIconOne: FC<SVGProps<SVGSVGElement>> = props => {
  const clipPathId = useId();
  const gradient0Id = useId();
  const gradient1Id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <path
        d="M4.36364 10.4091C4.36364 11.7182 3.49091 12.5909 2.18182 12.5909C0.872727 12.5909 6.39205e-08 11.7182 0 10.4091C0 6.70001 2.83636 3.86365 6.54545 3.86365H41.4545C45.1636 3.86365 48 6.70001 48 10.4091V36.5909C48 40.3 45.1636 43.1364 41.4545 43.1364H6.54545C2.83636 43.1364 0 40.3 0 36.5909V10.4091C0 9.10001 0.872727 10.7909 2.18182 10.7909C3.49091 10.7909 4.36364 7.94772 4.36364 9.25681V36.5909C4.36364 37.9 5.23636 38.7727 6.54545 38.7727H41.4545C42.7636 38.7727 43.6364 37.9 43.6364 36.5909V10.4091C43.6364 9.10001 42.7636 8.22728 41.4545 8.22728H6.54545C5.23636 8.22728 4.36364 9.31819 4.36364 10.4091Z"
        fill="#020F2C"
      />
      <foreignObject x="-5" y="-8" width="57" height="64">
        <div
          style={{
            backdropFilter: 'blur(10px)',
            clipPath: `url(#${clipPathId})`,
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="20">
        <path
          d="M29.875 20C31.15 20 32 19.2 32 18C32 16.8 31.15 16 29.875 16H19.25C16.9125 16 15 17.8 15 20V22C15 24.2 16.9125 26 19.25 26H27.75V28H17.125C15.85 28 15 28.8 15 30C15 31.2 15.85 32 17.125 32H27.75C30.0875 32 32 30.2 32 28V26C32 23.8 30.0875 22 27.75 22H19.25V20H29.875Z"
          fill={`url(#${gradient0Id})`}
        />
        <path
          d="M21.375 30C21.375 28.8 22.225 28 23.5 28C24.775 28 25.625 28.8 25.625 30V34C25.625 35.2 24.775 36 23.5 36C22.225 36 21.375 35.2 21.375 34V30ZM21.375 14C21.375 12.8 22.225 12 23.5 12C24.775 12 25.625 12.8 25.625 14V18C25.625 19.2 24.775 20 23.5 20C22.225 20 21.375 19.2 21.375 18V14Z"
          fill={`url(#${gradient1Id})`}
        />
      </g>
      <defs>
        <clipPath id={clipPathId} transform="translate(5 8)">
          <path d="M29.875 20C31.15 20 32 19.2 32 18C32 16.8 31.15 16 29.875 16H19.25C16.9125 16 15 17.8 15 20V22C15 24.2 16.9125 26 19.25 26H27.75V28H17.125C15.85 28 15 28.8 15 30C15 31.2 15.85 32 17.125 32H27.75C30.0875 32 32 30.2 32 28V26C32 23.8 30.0875 22 27.75 22H19.25V20H29.875Z" />
          <path d="M21.375 30C21.375 28.8 22.225 28 23.5 28C24.775 28 25.625 28.8 25.625 30V34C25.625 35.2 24.775 36 23.5 36C22.225 36 21.375 35.2 21.375 34V30ZM21.375 14C21.375 12.8 22.225 12 23.5 12C24.775 12 25.625 12.8 25.625 14V18C25.625 19.2 24.775 20 23.5 20C22.225 20 21.375 19.2 21.375 18V14Z" />
        </clipPath>
        <linearGradient
          id={gradient0Id}
          x1="12.3919"
          y1="27.4349"
          x2="34.0325"
          y2="19.1784"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4DEEFF" />
          <stop offset="0.65073" stop-color="#0154FC" />
          <stop offset="1" stop-color="#733BFF" />
        </linearGradient>
        <linearGradient
          id={gradient1Id}
          x1="12.3919"
          y1="27.4349"
          x2="34.0325"
          y2="19.1784"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4DEEFF" />
          <stop offset="0.65073" stop-color="#0154FC" />
          <stop offset="1" stop-color="#733BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
