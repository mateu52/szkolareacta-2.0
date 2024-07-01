import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const Cn = (...inputs: ClassValue[]) => {
    return (
        twMerge(clsx(...inputs))
    )
}