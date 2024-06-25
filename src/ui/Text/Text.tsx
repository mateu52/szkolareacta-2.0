type Props = {
    children: string;
}

export const Text = ({children}: Props) => {
    return (
        <div className="font-serif ml-2 mt-2">
            <p>{children}</p>
        </div>
    )
}