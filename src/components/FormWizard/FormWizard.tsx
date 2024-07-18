import { useRef, useState } from "react"
import { Form1, Form2, FormResume } from './index'

export const FormWizard = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        birthday: '',
        hobby: ''
    });

    const [site, setSite] = useState<number>(0);

    const handleChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value
        }));
    };

    const nextStep = () => {
        setSite(site+1);
    }
    const prevStep = () => {
        setSite(site-1);
    }
    const submitData = () => {
        console.log('Wyslane dane:', formData)
    }

    return(
        <div>
            {site === 0 ? <Form1 formData={formData} handleChange={handleChange} nextStep={nextStep} /> : null}
            {site === 1 ? <Form2   formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} /> : null}
            {site === 2 ? <FormResume formData={formData} submitData={submitData} prevStep={prevStep} /> : null }
            <div>
                
            </div>
        </div>
    )
}