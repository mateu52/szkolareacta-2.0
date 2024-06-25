import { MouseEventHandler } from "react";

type Props = {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ label, onClick}: Props) => {
    return <button onClick={onClick}>{label}</button>
}