import { type ComponentProps } from "react";
import { Cn } from "../utils/cn";

export type Props = {
    children: string;
} & ComponentProps<"p">;

export const Paragraph = ({ children, className, ...rest }: Props) => {
    return ( 
        <p
            className={Cn('ml-4',className)}
            {...rest}
            >
            {children}
        </p>
    )
}