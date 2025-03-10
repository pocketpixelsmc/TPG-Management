"use client";
import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

interface ContactFormProps {
    onSubmit?: (formData: {
        name: string;
        phoneNumber: string;
        email: string;
    }) => Promise<void>;
    submitButtonText?: string;
}

export default function ContactForm({ onSubmit, submitButtonText = "Submit" }: ContactFormProps) {
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);
    const { push } = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPending(true);

        try {
            if (onSubmit) {
                await onSubmit({ name, phoneNumber, email });
                setSuccess(true);
                setError(false);
                push("/thanks");
            } else {
                const response = await fetch("api/email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phoneNumber,
                        email,
                    }),
                });
                const data = await response.json();
                if (data.messageSent) {
                    setSuccess(true);
                    setError(false);
                    push("/thanks");
                } else {
                    setError(true);
                    setSuccess(false);
                }
            }
        } catch (err) {
            setError(true);
            setSuccess(false);
        } finally {
            setPending(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-6 p-8 bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-xl h-fit max-w-[1200px] w-full shadow-lg border border-blue-100"
        >
            <div className="w-full space-y-3">
                <label htmlFor="Name" className="text-lg font-medium text-blue-900">
                    First and Last Name
                </label>
                <input
                    type="text"
                    id="Name"
                    name="name"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                />
            </div>

            <div className="w-full space-y-3">
                <label htmlFor="phoneNumber" className="text-lg font-medium text-blue-900">
                    Phone Number
                </label>
                <input
                    type="number"
                    id="phoneNumber"
                    name="p_no"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="1234567890"
                />
            </div>

            <div className="w-full space-y-3">
                <label htmlFor="email" className="text-lg font-medium text-blue-900">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                />
            </div>

            <Button
                type="submit"
                disabled={pending}
                variant="fullWidth"
            >
                {pending ? "Submitting..." : submitButtonText}
            </Button>

            {error && (
                <p className="text-red-600 text-lg font-medium w-full text-center">
                    There was an error submitting the form. Please try again.
                </p>
            )}
            {success && (
                <p className="text-green-600 text-lg font-medium w-full text-center">
                    Your form has been submitted successfully.
                </p>
            )}
        </form>
    );
} 