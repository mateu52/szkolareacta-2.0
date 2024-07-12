import { useRef, useState } from "react"
import { Button, Text, Header, HeaderCode} from "../../ui"
import { CodeDisplay } from "../CodeDisplay/CodeDisplay"

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
            <p className="font-bold">Wybierz komponent:</p>
            <select ref={select}>
                <option value="button">Button</option>
                <option value="text">Text</option>
                <option value="header">Header</option>
            </select>
            <button onClick={handleOption}>wybierz</button>
            <div>
                {(selectedOption.text === false) &&
                <div>
                    <input className="bg-gray-100 mr-1 w-24" ref={inputText}></input>
                    <button onClick={handleOption}>zmień tekst</button>
                    </div>
                }
            </div>
            <div className="border pt-4 pb-4">
                <Button label="Button component - click me" hidden={selectedOption.button} className="ml-2" />
                <Text hidden={selectedOption.text} >{selectedOption.text === false ? inputText.current?.value  ?? `Text Component...lorem ipsum`: null} </Text>
                <Header hidden={selectedOption.header} className="bg-red-300"/>
            </div>
            <div className="ml-2 mt-4 pt-3 bg-slate-900 text-white w-2/3 h-80 mr-20 clearfix">
                <p className="ml-4 pt-2 bg-gray-400 text-gray-800 w-32 h-10 ">kod komponentu:</p>
                {
                    selectedOption.button === false ? 
                    
                        <CodeDisplay element= 
                        {<Button 
                            label="Button component - click me" 
                            className="ml-2"
                            />}
                        />    
                    : null
                }
                {
                    selectedOption.text === false ? 
                        <CodeDisplay element={
                            <Text>
                                Loren Ipsum.... loren ipsum..
                            </Text>
                    }
                    />
                    : null
                }
                {
                    selectedOption.header === false ? 
                            <HeaderCode />
                    
                    : null
                }
                
                
            </div>
        </div>
    )
}