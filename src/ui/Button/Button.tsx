import { MouseEventHandler } from "react";

type Props = {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button = ({ label, onClick, className, ...rest}: Props) => {
    return ( 
        <button className={`${className}`}
            onClick={onClick}
            {...rest}
            >
            {label}
        </button>
    )
}