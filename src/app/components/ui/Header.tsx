import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headerVariants> {
  children: React.ReactNode;
  className?: string;
}


const headerVariants = cva("text-blue-900 font-bold leading-tight py-4 px-8 mb-4 w-screen text-center", {
  variants: {
    variant: {
      blue: "bg-blue-900 text-white text-xl sm:text-2xl lg:text-4xl",
      orange: "bg-[#ffbd59] text-white text-xl sm:text-2xl lg:text-4xl",
      green: "bg-[#008000] text-white text-xl sm:text-2xl lg:text-4xl",
      noBg: "text-xl sm:text-2xl lg:text-4xl",
      subHeader: "text-lg sm:text-xl lg:text-3xl",
      extraBig: "text-4xl sm:text-5xl lg:text-7xl",
    },
  },
  defaultVariants: {
    variant: "noBg",
  },
});

export default function Header({ children, className, variant, ...props }: HeaderProps) {
  return (
    <h1 className={headerVariants({ variant, className })} {...props}>
      {children}
    </h1>
  );
}
