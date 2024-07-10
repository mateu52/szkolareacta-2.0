import { ComponentProps } from "react";

type Props = {
    children: React.ReactNode;
} & ComponentProps<"p">

export const Text = ({children, ...rest}: Props) => {
    return (
        <div className="font-serif ml-2 mt-2"
            {...rest}
        >
            <p>{children}</p>
        </div>
    )
}