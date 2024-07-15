import { SubmitHandler, useForm } from "react-hook-form";

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
                <label>Podaj date urodzenia:</label>
                <input {...register("date", {required: true})} />
                <label>Podaj hobby:</label>
                <input {...register("hobby", {required: true})} />
                <input type="submit" />
            </form>
        </div>
    )
}