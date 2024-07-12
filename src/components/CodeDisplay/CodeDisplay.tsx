import { ReactElement } from "react";
import reactElementToJSXString from "react-element-to-jsx-string"

export const CodeDisplay = ({ element } : {element: ReactElement}) => {
    const codeString = reactElementToJSXString(element);

    return (
        <pre>
            <code>{codeString}</code>
        </pre>
    )
}