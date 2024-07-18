import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui/Input";

type FormData = {
    birthday: string;
    hobby: string;
}
type FormProps = {
    formData: {
        birthday: string;
        hobby: string;
    };
    handleChange: (key: string, value: string) => void;
    nextStep: () => void;
    prevStep: () => void;
};
export const Form2: React.FC<FormProps> = ({ formData, handleChange, nextStep, prevStep }) => {
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: formData
    });

    const onSubmit:SubmitHandler<FormData> = data => {
        handleChange('birthday', data.birthday);
        handleChange('hobby', data.hobby);
        nextStep();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="data urodzenia:" 
                    {...register('birthday')}
                />
                <Input label="podaj hobby:" 
                    {...register('hobby')}
                />
                <button type="button" onClick={prevStep}>Wstecz</button>
                <input type="submit" value="Dalej" />
            </form>
        </div>
    )
}