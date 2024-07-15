import { SubmitHandler, useForm } from "react-hook-form"

type FormData = {
    name: string;
    surname: string;
}
type FormProps = {
    setName: (name: string)=> void;
    setSurname: (surname: string)=> void;
}
export const Form1: React.FC<FormProps> = ({setName, setSurname}) => {
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit:SubmitHandler<FormData> = data => {
        setName(data.name)
        setSurname(data.surname)
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Podaj imię:</label>
                <input {...register("name", {required: true})} />
                <label>Podaj nazwisko:</label>
                <input {...register("surname", {required: true})} />
                <input type="submit" />
            </form>        
        </div>
    )
}