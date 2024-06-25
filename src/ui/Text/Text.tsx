type Props = {
    children: string;
}

export const Text = ({children}: Props) => {
    return (
        <div>
            <p>{children}</p>
        </div>
    )
}