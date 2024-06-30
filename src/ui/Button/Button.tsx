import { type ComponentProps } from "react";

type Props = {
    label: string;
    //onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
} & ComponentProps<"button">;

export const Button = ({ label, className, ...rest}: Props) => {
    return ( 
        <button 
            className={`${className}`}
            {...rest}
            >
            {label}
        </button>
    )
}