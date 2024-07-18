import React from "react";
import { Button } from "../../ui";

type FormResumeProps = {
    formData: {
        name: string;
        surname: string;
        birthday: string;
        hobby: string;
    };
    submitData: () => void;
    prevStep: () => void;
};

export const FormResume: React.FC<FormResumeProps> = ({ formData, submitData, prevStep }) => {
    const handleSubmit = () => {
        submitData();
        console.log(formData)
    };

    return (
        <div>
            <div className="bg-green-50 w-1/3 ml-2 mt-2 pl-2 border-l-solid border-l-2 border-green-400">
                <h2>Podsumowanie</h2>
                <p>Imię: {formData.name}</p>
                <p>Nazwisko: {formData.surname}</p>
                <p className="flex">Data urodzenia: {formData.birthday? formData.birthday: <p className="pl-1"> ----</p>}</p>
                <p className="flex">Hobby: {formData.hobby? formData.hobby: <p className="pl-1"> ----</p>}</p>
            </div>
            <Button label="wstecz" className=" bg-red-200 border-solid border-4 border-l-red-600" onClick={prevStep} />
            <Button label="Zatwierdz"  className="m-2 font-bold bg-blue-400 border-solid border-4 border-blue-600" onClick={handleSubmit} />
        </div>
    );
};