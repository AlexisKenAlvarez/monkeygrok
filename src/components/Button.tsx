import { FunctionComponent, ReactNode } from "react";
import { cn } from "../utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
  variant?: "black";
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 relative font-primary text-center text-sm rounded-sm transition-all ease-in-out duration-300 bg-slate-100",
        {
          "bg-black": variant === "black",
        },
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full absolute top-1 left-1 border-2 h-full border-slate-100",
          {
            "border-black": variant === "black",
          }
        )}
      ></div>
      <div className="uppercase font-semibold">{children}</div>
    </button>
  );
};

export default Button;
