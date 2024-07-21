import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { nameSchema } from "../../zod/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

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
        defaultValues: formData,
        resolver: zodResolver(nameSchema),
        mode: 'onBlur'
    });
    
    const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Walidacja pola z użyciem .safeParse
        const result = nameSchema.safeParse({ [name]: value });
        if (!result.success) {
            // Obsłuż błędy walidacji
            console.error(result.error.format());
        } else {
            // Walidacja przeszła pomyślnie
            handleChange(name, value);
        }
    };

    const onSubmit:SubmitHandler<FormData> = data => {
        handleChange('name', data.name);
        handleChange('surname', data.surname);
        nextStep();
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Imie: " {...register('name', {required: true})}  onBlur={handleBlur} />
                <Input label="Nazwisko: " {...register('surname', {required: true})} />
                <Button label="dalej" className="border-solid border-4 border-r-blue-600" />
            </form>        
        </div>
    )
}