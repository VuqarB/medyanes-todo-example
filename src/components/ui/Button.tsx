import Link from "next/link";
import { SvgIconComponent } from '@mui/icons-material';

type ButtonProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  padding?: string;
  onClick?: () => void;
  icon?: SvgIconComponent;
};

export default function Button({
  className,
  href,
  onClick,
  children,
  bgColor,
  padding,
  icon: Icon
}: ButtonProps) {
  const classes = `flex-between gap-1 transition-all duration-300 ease-linear ${bgColor} text-white font-bold rounded text-sm md:text-base
    ${padding || "p-2"}
    ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </button>
  );

  const renderLink = () => (
    <Link href={href || ""} className={classes} onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </Link>
  );

  return href ? renderLink() : renderButton();
}
