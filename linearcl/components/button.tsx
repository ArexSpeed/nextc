import React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
        "[&_.highlight]:ml-2",
      ],
      secondary: [
        "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <span className="icon-wrapper">{children}</span>;
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;

export const Button = ({
  children,
  href,
  className,
  variant,
  size,
}: ButtonProps) => {
  return (
    <Link
      className={classNames(buttonClasses({ variant, size }), className)}
      href={href}
    >
      {children}
    </Link>
  );
};
