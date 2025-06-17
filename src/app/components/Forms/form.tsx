"use client";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "../ui/Button";

export default function EmailForm() {
    const [ownerType, setOwnerType] = useState<string>("owner");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [propertyGoals, setPropertyGoals] = useState<string>("");
    const [howDidYouHear, setHowDidYouHear] = useState<string>("");
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
                ownerType,
                firstName,
                lastName,
                email,
                phone,
                address,
                city,
                state,
                zipCode,
                propertyGoals,
                howDidYouHear,
            }),
        })
        const data = await response.json();
        if (response.status === 200) {
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
            className="flex flex-col items-start m-4 justify-center gap-4 p-6 bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-xl h-fit w-[90%] xl:w-[45%] shadow-lg border border-blue-100"
        >
            {/* Owner Type Selection */}
            <div className="w-full space-y-3">
                <label className="text-lg font-medium text-blue-900">
                    Owner or Renter? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 flex-wrap">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="ownerType"
                            value="owner"
                            checked={ownerType === "owner"}
                            onChange={(e) => setOwnerType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                        />
                        <span className="text-blue-900 font-medium">I&apos;m an Owner</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="ownerType"
                            value="renter"
                            checked={ownerType === "renter"}
                            onChange={(e) => setOwnerType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                        />
                        <span className="text-blue-900 font-medium">I&apos;m a Renter</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="ownerType"
                            value="vendor"
                            checked={ownerType === "vendor"}
                            onChange={(e) => setOwnerType(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                        />
                        <span className="text-blue-900 font-medium">I&apos;m a Vendor</span>
                    </label>
                </div>
            </div>

            {/* Name Fields - Side by Side */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <label htmlFor="firstName" className="text-lg font-medium text-blue-900">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                    />
                </div>
                <div className="space-y-3">
                    <label htmlFor="lastName" className="text-lg font-medium text-blue-900">
                        Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                    />
                </div>
            </div>

            {/* Email and Phone - Side by Side */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <label htmlFor="email" className="text-lg font-medium text-blue-900">
                        Email <span className="text-red-500">*</span>
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
                <div className="space-y-3">
                    <label htmlFor="phone" className="text-lg font-medium text-blue-900">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>

            {/* Address and City - Side by Side */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <label htmlFor="address" className="text-lg font-medium text-blue-900">
                        Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="123 Main Street"
                    />
                </div>
                <div className="space-y-3">
                    <label htmlFor="city" className="text-lg font-medium text-blue-900">
                        City <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Newark"
                    />
                </div>
            </div>

            {/* Zip Code */}
            <div className="w-full space-y-3">
                <label htmlFor="zipCode" className="text-lg font-medium text-blue-900">
                    Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="07102"
                />
            </div>

            {/* Property Goals */}
            <div className="w-full space-y-3">
                <label htmlFor="propertyGoals" className="text-lg font-medium text-blue-900">
                    Describe your property management goals
                </label>
                <textarea
                    id="propertyGoals"
                    name="propertyGoals"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm min-h-[120px]"
                    value={propertyGoals}
                    onChange={(e) => setPropertyGoals(e.target.value)}
                    placeholder="Please describe your property management goals and any specific needs..."
                />
            </div>

            {/* How Did You Hear About Us */}
            <div className="w-full space-y-3">
                <label htmlFor="howDidYouHear" className="text-lg font-medium text-blue-900">
                    How Did You Hear About Us? <span className="text-red-500">*</span>
                </label>
                <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
                    required
                    value={howDidYouHear}
                    onChange={(e) => setHowDidYouHear(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral from Friend/Family</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="website">Company Website</option>
                    <option value="other">Other</option>
                </select>
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