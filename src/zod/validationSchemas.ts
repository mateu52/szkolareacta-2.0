import { z } from 'zod';

export const nameSchema = z.object({
    name: z.string().min(3,"imie jest wymagane")
})
export type FormData = z.infer<typeof nameSchema>;