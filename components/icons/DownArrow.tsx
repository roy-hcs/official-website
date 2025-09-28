import Icon from '@/public/assets/icons/down-arrow.svg';
import { SVGProps } from 'react';

interface MenuOneProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function DownArrow({ className, ...props }: MenuOneProps) {
  return <Icon className={className} {...props} />;
}
