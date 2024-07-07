import { ComponentProps } from "react"

type Props = {
    children?: string;
} & ComponentProps<"div">

export const Header = ({...rest}: Props) => {
    return(
        <div {...rest}>
            <p>header</p>
        </div>
    )
}