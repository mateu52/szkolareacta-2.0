import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { useState } from "react";

type FormData = {
    name: string;
    surname: string;
    hobby?: string;
}

export const DynamicForm = () => {
    const [ addInput, setAddInput ] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<FormData>();

    const handleAdd = () => {
        setAddInput(true)
    }
    const handleRemove = () => {
        setAddInput(false)
    }

    const onSubmit:SubmitHandler<FormData> = data => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Imie: " {...register('name', {required: true})} />
            <Input label="Nazwisko: " {...register('surname', {required: true})} />
            <Button label="add" className="ml-2 border border-2 border-b-green-900" onClick={handleAdd} />
            <Button label="remove" className="ml-2 border border-2 border-t-green-900" onClick={handleRemove} /><br></br>
            {addInput  && <Input label="Hobby: " {...register('hobby', {required: true})} />  } 
            <Button label="dalej" className="border-solid border-4 border-black m-1 w-1/2" />
            </form>
        </div>
    )
}