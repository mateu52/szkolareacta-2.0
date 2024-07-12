import { ComponentProps } from "react"

type Props = {
    children?: string;
} & ComponentProps<"div">

export const Header = ({...rest}: Props) => {
    return(
        <div {...rest}>
            <ul className="flex mt-2 mb-2 pt-2 pb-2">
                <li className="ml-2 mr-1">Głowna</li>
                <li className="ml-2 mr-1">Sklep</li>
                <li className="ml-2 mr-1">O mnie</li>
            </ul>
        </div>
    )
}

export const HeaderCode = () => {
    const code = `
    <div {...rest}>
            <ul className="flex mt-2 mb-2 pt-2 pb-2">
                <li className="ml-2 mr-1">Głowna</li>
                <li className="ml-2 mr-1">Sklep</li>
                <li className="ml-2 mr-1">O mnie</li>
            </ul>
        </div>
    `
    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    )
}