import { useState } from "react"
import { Form1 } from "./Form1of2";

export const FormWizard = () => {
    const [ name, setName ] = useState<string>('');
    const [ surname, setSurname ] = useState<string>('');
    const [ birthday, setBirthday ] = useState<string>('');
    const [ hobby, setHobby ] = useState<string>('');

    const [ site, setSite ] = useState<number>(0)

    return(
        <div>
            {site === 0 ? <Form1 /> : null}
        </div>
    )
}