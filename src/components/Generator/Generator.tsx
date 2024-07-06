import { useRef, useState } from "react"

export const Generator = () => {
    const select = useRef<HTMLSelectElement>(null)
    const [selectedOption, setSelectedOption ] = useState("");
    const handleOption = () => {
        if(select.current){
            setSelectedOption(select.current.value);
            console.log(select.current.value)
        }
    }
    
    return (
        <div>
            <p>Wybierz komponent:</p>
            <select ref={select}>
                <option value="button">Button</option>
                <option value="text">Text</option>
                <option value="header">Header</option>
            </select>
            <button onClick={handleOption}>wybierz</button>
            <div>
                {}
            </div>
        </div>
    )
}