import { z } from "zod";

export const contactSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }).max(20, { message: `Username must be less than 20 characters long` }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters long" }),
});