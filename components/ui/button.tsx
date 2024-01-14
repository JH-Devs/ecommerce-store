import { forwardRef} from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
}, ref) => {
    return (
        <button 
        className={cn(
            `
            w-auto
            rounded-full
            border-transparent
            px-5
            py-3
            disabled:cursor-not-allowed
            text-white
            font-semibold
            transition
            `,
            className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "button";

export default Button;