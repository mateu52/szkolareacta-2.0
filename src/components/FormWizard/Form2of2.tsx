import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui/Input";

type FormData = {
    date: string;
    hobby: string;
}

export const Form2 = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit:SubmitHandler<FormData> = data => {
        
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="data:" 
                    {...register('date')}
                />
                <label>Podaj hobby:</label>
                <input {...register("hobby", {required: true})} />
                <input type="submit" />
            </form>
        </div>
    )
}