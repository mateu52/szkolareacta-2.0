import { useRef, useState } from "react"
import { Button, Text } from "../../ui"
import { Header } from "../../ui/Header"

type Selected = {
    button: boolean,
    text: boolean,
    header: boolean
}

export const Generator = () => {
    const select = useRef<HTMLSelectElement>(null)
    const inputText = useRef<HTMLInputElement>(null)
    const [selectedOption, setSelectedOption ] = useState<Selected>({
        button: true,
        text: true,
        header: true
        }
    );
    console.log(inputText)
    const handleOption = () => {
        const id = select.current?.value as keyof Selected;
        if(id){
            setSelectedOption((prev) => {
                const newState = {
                    ...prev,
                    [id]: false
                };
                
                // Set all other options to true
                Object.keys(newState).forEach((key) => {
                    if (key !== id) {
                        newState[key as keyof Selected] = true;
                    }
                });

                return newState;
            });
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
                {(selectedOption.text === false) &&
                    <input ref={inputText}></input>
                }
            </div>
            <div>
                <Button label="Button component - click me" hidden={selectedOption.button} className="ml-2" />
                <Text hidden={selectedOption.text} >{selectedOption.text === false ? inputText.current?.value  ?? `Text Component...lorem ipsum`: null} </Text>
                <Header hidden={selectedOption.header} className="bg-red-300"/>
            </div>
        </div>
    )
}