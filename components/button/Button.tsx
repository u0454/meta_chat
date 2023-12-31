import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  [
    "rounded-lg",
    "font-bold",
    "hover:scale-105",
    "active:scale-100",
    "transition",
    "duration-200",
    "ease-in-out",
    "tracking-wider",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-violet-500",
          "text-white",
          "border-transparent",
          "hover:bg-violet-600",
        ],
        secondary: [
          "bg-white",
          "text-black",
          "border-gray-400",
          "hover:bg-gray-100",
          "border-solid",
          "border-2",
          "border-gray-800",
        ],
        black: ["bg-slate-800", "text-white"],
        text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-md", "py-1", "px-2"],
        medium: ["text-base", "px-6", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
      },
      width: {
        full: ["w-full"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
}

const Button = ({
  children,
  intent,
  size,
  width,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonClasses({ intent, size, width, className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
