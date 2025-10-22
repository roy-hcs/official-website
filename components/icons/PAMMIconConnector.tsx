import { FC, SVGProps, useId } from 'react';

export const PAMMIconConnector: FC<SVGProps<SVGSVGElement>> = props => {
  const clipPathId = useId();
  const gradient0Id = useId();
  const gradient1Id = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="20"
      viewBox="0 0 32 20"
      fill="none"
      {...props}
    >
      <foreignObject x="-20" y="-20" width="72" height="60">
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
          d="M0 6.151H21V13.849H0V6.151Z"
          fill={`url(#${gradient0Id})`}
          fillOpacity="0.39"
        />
        <path
          d="M32 10L21 20V0L32 10Z"
          fill={`url(#${gradient1Id})`}
          fillOpacity="0.39"
        />
      </g>
      <defs>
        <clipPath id={clipPathId} transform="translate(20 20)">
          <path d="M0 6.151H21V13.849H0V6.151Z" />
          <path d="M32 10L21 20V0L32 10Z" />
        </clipPath>
        <linearGradient
          id={gradient0Id}
          x1="31.9067"
          y1="13.1583"
          x2="-3.2653"
          y2="16.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0154FC" />
          <stop offset="0.75" stopColor="#733BFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id={gradient1Id}
          x1="31.9067"
          y1="13.1583"
          x2="-3.2653"
          y2="16.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0154FC" />
          <stop offset="0.75" stopColor="#733BFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
