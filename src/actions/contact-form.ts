"use server"

import { contactSchema } from "@/schema/contact";
import { validateFormData } from "@/lib/utils";
import { z } from "zod";
import nodemailer from "nodemailer";

export type ContactFormResponse = {
    success: boolean;
    message: string;
};

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use your preferred email service
    auth: {
        user: process.env.EMAIL_USER || 'ezzeldin.ui@gmail.com',
        // You should set this in .env file for security
        pass: process.env.EMAIL_PASS  
    }
});

export async function handleSubmitContactForm(
    values: z.infer<typeof contactSchema>
): Promise<ContactFormResponse> {
    try {
        const validationResult = await validateFormData(contactSchema, values);

        if (!validationResult.success) {
            return {
                success: false,
                message: "Invalid form data",
            };
        }

        // Create email options
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'ezzeldin.ui@gmail.com'}>`,
            to: 'ezzeldin.ui@gmail.com',
            replyTo: values.email,
            subject: `Portfolio Contact: Message from ${values.username}`,
            text: `
Name: ${values.username}
Email: ${values.email}
Message: ${values.message}
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> ${values.username}</p>
<p><strong>Email:</strong> ${values.email}</p>
<h3>Message:</h3>
<p>${values.message.replace(/\n/g, '<br>')}</p>
            `
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);
            
            console.log("Email sent successfully to ezzeldin.ui@gmail.com");
            
            return {
                success: true,
                message: "Thank you for your message. I'll get back to you within 1-2 business days.",
            };
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            return {
                success: false,
                message: "Failed to send email. Please try again later or contact me directly.",
            };
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again later.",
        };
    }
}
