import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const buttonVariants = cva("bg-[#ffbd59] text-blue-950 py-3 px-6 rounded-lg transition-all hover:bg-[#ffa500] text-xl font-bold", {
  variants: {
    variant: {
      default: "",
      blue: "bg-blue-900 text-white",
      orange: "bg-[#ffbd59] text-white",
      green: "bg-[#008000] text-white",
      fullWidth: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Button({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      {children}
    </button>
  );
}
