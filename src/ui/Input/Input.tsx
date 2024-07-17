import { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";

type Props = {
    label: string;
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} ref={ref} {...rest} />
        </div>
    );
});