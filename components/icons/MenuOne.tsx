import Icon from '@/public/assets/icons/menu-one.svg';
import { SVGProps } from 'react';

interface MenuOneProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function MenuOne({ className, ...props }: MenuOneProps) {
  return <Icon className={className} {...props} />;
}
