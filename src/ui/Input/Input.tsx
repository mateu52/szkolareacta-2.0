import { ComponentPropsWithRef, forwardRef, useId } from "react";

type Props = {
    label: string;
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
    const id = useId();
    return (
        <div className="bg-green-100">
            <label htmlFor={id} className="ml-2">
                {label}
            </label>
            <input id={id} ref={ref} {...rest} className="m-2"/>
        </div>
    );
});