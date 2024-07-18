import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui/Input";
import { RefObject } from "react";

type FormData = {
    name: string;
    surname: string;
}
type FormProps = {
    formData: {
        name: string;
        surname: string;
    };
    handleChange: (key: string, value: string) => void;
    nextStep: () => void;
}
export const Form1: React.FC<FormProps> = ({formData, handleChange, nextStep}) => {
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: formData
    });
    
    const onSubmit:SubmitHandler<FormData> = data => {
        handleChange('name', data.name);
        handleChange('surname', data.surname);
        nextStep();
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Imie: " {...register('name')} />
                <Input label="Nazwisko: " {...register('surname')} />
                <input type="submit" value='Dalej' />
            </form>        
        </div>
    )
}