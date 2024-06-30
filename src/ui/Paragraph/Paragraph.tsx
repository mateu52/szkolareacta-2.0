import { type ComponentProps } from "react";

type Props = {
    children: string;
} & ComponentProps<"p">;

export const Paragraph = ({ children, className, ...rest }: Props) => {
    return ( 
        <p
            className={className}
            {...rest}
            >
            {children}
        </p>
    )
}