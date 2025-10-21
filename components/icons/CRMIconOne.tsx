import { FC, SVGProps, useId } from 'react';

export const CRMIconOne: FC<SVGProps<SVGSVGElement>> = props => {
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
      <path
        d="M27.75 12C27.75 9.92893 26.0711 8.25 24 8.25C21.9289 8.25 20.25 9.92893 20.25 12C20.25 14.0711 21.9289 15.75 24 15.75C26.0711 15.75 27.75 14.0711 27.75 12ZM32.25 12C32.25 16.5563 28.5563 20.25 24 20.25C19.4437 20.25 15.75 16.5563 15.75 12C15.75 7.44365 19.4437 3.75 24 3.75C28.5563 3.75 32.25 7.44365 32.25 12Z"
        fill="#0A0A0A"
      />
      <path
        d="M13.5 36C13.5 33.9289 11.8211 32.25 9.75 32.25C7.67893 32.25 6 33.9289 6 36C6 38.0711 7.67893 39.75 9.75 39.75C11.8211 39.75 13.5 38.0711 13.5 36ZM18 36C18 40.5563 14.3063 44.25 9.75 44.25C5.19365 44.25 1.5 40.5563 1.5 36C1.5 31.4437 5.19365 27.75 9.75 27.75C14.3063 27.75 18 31.4437 18 36Z"
        fill="#0A0A0A"
      />
      <path
        d="M42 36C42 33.9289 40.3211 32.25 38.25 32.25C36.1789 32.25 34.5 33.9289 34.5 36C34.5 38.0711 36.1789 39.75 38.25 39.75C40.3211 39.75 42 38.0711 42 36ZM46.5 36C46.5 40.5563 42.8063 44.25 38.25 44.25C33.6937 44.25 30 40.5563 30 36C30 31.4437 33.6937 27.75 38.25 27.75C42.8063 27.75 46.5 31.4437 46.5 36Z"
        fill="#0A0A0A"
      />
      <rect x="21.75" y="16.5" width="4.5" height="8.25" fill="#0A0A0A" />
      <rect
        x="19.446"
        y="28.5"
        width="4.5"
        height="6"
        transform="rotate(60 19.446 28.5)"
        fill="#0A0A0A"
      />
      <rect
        width="4.5"
        height="6"
        transform="matrix(-0.5 0.866025 0.866025 0.5 28.5 28.5)"
        fill="#0A0A0A"
      />
      <foreignObject x="-1.8457" y="1.75" width="51.6914" height="53.5">
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
        d="M24 21.75L29.8457 25.125V31.875L24 35.25L18.1543 31.875V25.125L24 21.75Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <clipPath id={clipPathId} transform="translate(1.8457 -1.75)">
          <path d="M24 21.75L29.8457 25.125V31.875L24 35.25L18.1543 31.875V25.125L24 21.75Z" />
        </clipPath>
        <linearGradient
          id={gradientId}
          x1="15.1789"
          y1="30.4322"
          x2="30.4384"
          y2="22.2129"
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
