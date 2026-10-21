import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]",
  secondary:
    "border border-white/15 bg-white/5 text-foreground hover:bg-white/10 backdrop-blur-md",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function buttonClassName({
  className,
  variant = "primary",
  size = "md",
}: Pick<CommonProps, "className" | "variant" | "size">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ className, variant, size })}
      {...props}
    />
  );
}

interface ButtonLinkProps extends CommonProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

export function ButtonLink({
  href,
  external,
  download,
  className,
  variant,
  size,
  children,
}: ButtonLinkProps) {
  const classes = buttonClassName({ className, variant, size });

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (download || href.endsWith(".pdf")) {
    return (
      <a href={href} className={classes} download={download}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
