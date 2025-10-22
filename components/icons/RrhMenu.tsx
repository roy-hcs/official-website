import { FC, SVGProps } from 'react';

export const RrhMenu: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      className="cursor-pointer inline-block"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}
    >
      <path
        d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
        fill="#000"
      />
    </svg>
  );
};
