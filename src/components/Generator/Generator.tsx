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
    const [selectedOption, setSelectedOption ] = useState<Selected>({
        button: true,
        text: true,
        header: true
        }
    );
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
                <Button label="Button component - click me" hidden={selectedOption.button} />
                <Text hidden={selectedOption.text} >Text Component...lorem ipsum</Text>
                <Header hidden={selectedOption.header} />
            </div>
        </div>
    )
}