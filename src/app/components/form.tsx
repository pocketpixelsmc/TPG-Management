"use client";

import { useState } from "react";

export default function EmailForm() {
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<number | "">("");
    const [email, setEmail] = useState<string>("");
    const [propertyAddress, setPropertyAddress] = useState<string>("");
    const [numberOfUnits, setNumberOfUnits] = useState<number>(1);
    const [additionalPropertyInformation, setAdditionalPropertyInformation] =
        useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-4 mt-4 p-4 sm:p-16 bg-slate-300 min-w-[320px] sm:min-w-[600px] lg:min-w-[1000px] rounded-xl"
        >
            <label htmlFor="Name" className="text-lg text-blue-900">
                First and Last Name
            </label>
            <input
                type="text"
                id="Name"
                name="Name"
                className="p-2 w-full rounded-lg"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="phoneNumber" className="text-lg text-blue-900">
                Phone Number
            </label>
            <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="p-2 w-full rounded-lg"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(parseInt(e.target.value))}
            />
            <label htmlFor="email" className="text-lg text-blue-900">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="p-2 w-full rounded-lg"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="propertyAddress" className="text-lg text-blue-900">
                Property Address
            </label>
            <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                className="p-2 w-full rounded-lg"
                required
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
            />
            <label htmlFor="numberOfUnits" className="text-lg text-blue-900">
                Number of Units
            </label>
            <input
                type="number"
                id="numberOfUnits"
                name="numberOfUnits"
                className="p-2 w-full rounded-lg"
                required
                value={numberOfUnits}
                onChange={(e) => setNumberOfUnits(parseInt(e.target.value))}
                min={1}
            />
            <label
                htmlFor="additionalPropertyInformation"
                className="text-lg text-blue-900"
            >
                Additional Property Information
            </label>
            <textarea
                id="additionalPropertyInformation"
                name="additionalPropertyInformation"
                className="p-2 w-full rounded-lg"
                required
                value={additionalPropertyInformation}
                onChange={(e) =>
                    setAdditionalPropertyInformation(e.target.value)
                }
            />
            <button
                className="bg-blue-900 text-white p-4 px-8 rounded-lg transition-all hover:bg-blue-700"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}