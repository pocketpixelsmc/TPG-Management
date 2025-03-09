"use client";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "../ui/Button";

export default function EmailForm() {
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [propertyAddress, setPropertyAddress] = useState<string>("");
    const [numberOfUnits, setNumberOfUnits] = useState<string>("1");
    const [additionalPropertyInformation, setAdditionalPropertyInformation] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);
    const { push } = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPending(true);
        const response = await fetch("api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                phoneNumber,
                email,
                propertyAddress,
                numberOfUnits,
                additionalPropertyInformation,
            }),
        })
        const data = await response.json();
        if (data.messageSent) {
            setSuccess(true);
            setError(false);
            push("/thanks")
        }
        else {
            setError(true);
            setSuccess(false);
        }
        setPending(false);
    };
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

            <div className="w-full space-y-3">
                <label htmlFor="propertyAddress" className="text-lg font-medium text-blue-900">
                    Property Address
                </label>
                <input
                    type="text"
                    id="propertyAddress"
                    name="address"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    placeholder="123 Main St, City, State"
                />
            </div>

            <div className="w-full space-y-3">
                <label htmlFor="numberOfUnits" className="text-lg font-medium text-blue-900">
                    Number of Units
                </label>
                <input
                    type="number"
                    id="numberOfUnits"
                    name="no_units"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={numberOfUnits}
                    onChange={(e) => setNumberOfUnits(e.target.value)}
                    min={1}
                />
            </div>

            <div className="w-full space-y-3">
                <label htmlFor="additionalPropertyInformation" className="text-lg font-medium text-blue-900">
                    Additional Property Information
                </label>
                <textarea
                    id="additionalPropertyInformation"
                    name="more_info"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm min-h-[120px]"
                    required
                    value={additionalPropertyInformation}
                    onChange={(e) => setAdditionalPropertyInformation(e.target.value)}
                    placeholder="Please provide any additional details about your property..."
                />
            </div>

            <Button
                type="submit"
                disabled={pending}
                variant="fullWidth"
            >
                {pending ? "Submitting..." : "Submit"}
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
