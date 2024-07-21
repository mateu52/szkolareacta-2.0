import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui/Input";
import { Button } from "../../ui";

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
                <Button label="wstecz" className=" bg-red-200 mr-2 border-solid border-4 border-l-rose-600" onClick={prevStep} />
                <Button label="dalej" className="border-solid border-4 border-r-blue-600" />
            </form>
        </div>
    )
}