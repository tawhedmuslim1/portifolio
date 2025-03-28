"use client"

import { handleSubmitContactForm, type ContactFormResponse } from "actions/contact-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "schema/contact";
import { Button } from "ui/button";
import { Input } from "ui/input";
import { Textarea } from "ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "ui/form";
import { Alert, AlertDescription } from "ui/alert";
import { BadgeCheck, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactForm() {
    const [formResponse, setFormResponse] = useState<ContactFormResponse | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [charCount, setCharCount] = useState<{ [key: string]: number }>({});
    const [isMounted, setIsMounted] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        try {
            setIsSubmitting(true);
            const response = await handleSubmitContactForm(values);
            if (response.success) {
                setFormResponse(response);
                form.reset();
                setCharCount({});
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleMessageChange = (value: string) => {
        setCharCount(prev => ({ ...prev, message: value.length }));
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                {form.formState.errors.username ? (
                                    <FormMessage />
                                ) : (
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                {form.formState.errors.email ? (
                                    <FormMessage />
                                ) : (
                                    <FormDescription>
                                        This is your email address.
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea 
                                    {...field} 
                                    className="resize-none"
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleMessageChange(e.target.value);
                                    }}
                                />
                            </FormControl>
                            {form.formState.errors.message ? (
                                <div className="flex justify-between gap-2">
                                    <FormMessage />
                                    {isMounted && (
                                        <FormDescription>
                                            {charCount.message || 0} characters ({1000 - (charCount.message || 0)} characters left)
                                        </FormDescription>
                                    )}
                                </div>
                            ) : (
                                <FormDescription>
                                    This is your message.
                                    {isMounted && (
                                        <span> {charCount.message || 0} characters ({1000 - (charCount.message || 0)} characters left)</span>
                                    )}
                                </FormDescription>
                            )}
                        </FormItem>
                    )}
                />
                {formResponse?.success && (
                    <Alert className="bg-emerald-500/10 border-emerald-500 ">
                        <AlertDescription className="flex items-center gap-2 text-emerald-500">
                            <BadgeCheck className="size-4" />
                            {formResponse.message}
                        </AlertDescription>
                    </Alert>
                )}
                <Button disabled={isSubmitting} type="submit" className="w-full">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </form>
        </Form>
    );
}
