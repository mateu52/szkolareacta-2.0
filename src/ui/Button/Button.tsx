import { type ComponentProps } from "react";

type Props = {
    label: string;
    //onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
} & ComponentProps<"button">;


export const Button = ({ label, className, ...rest}: Props) => {
    return ( 
        <button 
            className={`bg-gray-100 p-2 ${className}`}
            {...rest}
            >
            {label}
        </button>
    )
}

export const ButtonCode = () => {
    const code = `
        <button 
            className={\`\${className}\`}
            {...rest}
            >
            {label}
        </button>
    `
    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    )
}