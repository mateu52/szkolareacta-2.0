import { useState } from "react"
import { Form1, Form2, FormResume } from './index'

export const FormWizard = () => {
    const [ name, setName ] = useState<string>('');
    const [ surname, setSurname ] = useState<string>('');
    const [ birthday, setBirthday ] = useState<string>('');
    const [ hobby, setHobby ] = useState<string>('');

    const [ site, setSite ] = useState<number>(0)

    return(
        <div>
            {site === 0 ? <Form1 setName={setName} setSurname={setSurname} /> : null}
            {site === 1 ? <Form2 /> : null}
            {site === 2 ? <FormResume /> : null }
            <div>
                <p>Imię: {name}</p>
                <p>Nazwisko: {surname}</p>
            </div>
        </div>
    )
}