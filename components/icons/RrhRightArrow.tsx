import { FC, SVGProps } from 'react';

export const RrhRightArrow: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33325 7.99992H12.6666M12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L7.99992 12.6666"
        stroke="#FAFAFA"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
