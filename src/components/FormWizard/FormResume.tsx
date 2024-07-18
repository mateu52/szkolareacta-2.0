import React from "react";

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
    };

    return (
        <div>
            <h2>Podsumowanie</h2>
            <p>Imię: {formData.name}</p>
            <p>Nazwisko: {formData.surname}</p>
            <p>Data urodzenia: {formData.birthday}</p>
            <p>Hobby: {formData.hobby}</p>
            <button onClick={prevStep}>Wstecz</button>
            <button onClick={handleSubmit}>Zatwierdź</button>
        </div>
    );
};