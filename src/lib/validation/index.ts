import * as z from "zod";

export const SignupValdidation = z.object({
    name: z.string().min(2, { message: 'Too short'}),
    username: z.string().min(2, { message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Too short'}),
  });