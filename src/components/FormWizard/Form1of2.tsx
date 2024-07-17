import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui/Input";

type FormData = {
    name: string;
    surname: string;
}
type FormProps = {
    setName: (name: string)=> void;
    setSurname: (surname: string)=> void;
}
export const Form1: React.FC<FormProps> = () => {
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit:SubmitHandler<FormData> = data => {
        // setName(data.name)
        // setSurname(data.surname)
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Imie: " {...register('name')} />
                <label>Podaj nazwisko:</label>
                <input {...register("surname", {required: true})} />
                <input type="submit" />
            </form>        
        </div>
    )
}