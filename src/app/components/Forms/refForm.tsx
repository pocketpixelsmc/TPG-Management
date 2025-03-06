"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "../ui/Button";

export default function RefEmailForm() {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lFullName, setLFullName] = useState<string>("");
  const [lEmail, setLEmail] = useState<string>("");
  const [lPhone, setLPhone] = useState<string>("");
  const [lInfo, setLInfo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const { push } = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const response = await fetch("api/refEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        email,
        lFullName,
        lEmail,
        lPhone,
        lInfo,
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
    setPending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center gap-6 p-8 bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-xl h-fit max-w-[1200px] w-full shadow-lg border border-blue-100"
    >
      <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2 w-full">Your Information</h2>

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
          placeholder="Your full name"
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
          placeholder="Your phone number"
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
          placeholder="Your email address"
        />
      </div>

      <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2 w-full mt-4">Lead Information</h2>

      <div className="w-full space-y-3">
        <label htmlFor="lFullName" className="text-lg font-medium text-blue-900">
          Lead's Full Name
        </label>
        <input
          type="text"
          id="lFullName"
          name="lFullName"
          className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
          required
          value={lFullName}
          onChange={(e) => setLFullName(e.target.value)}
          placeholder="Lead's full name"
        />
      </div>

      <div className="w-full space-y-3">
        <label htmlFor="lEmail" className="text-lg font-medium text-blue-900">
          Lead's Email Address
        </label>
        <input
          type="email"
          id="lEmail"
          name="lEmail"
          className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
          required
          value={lEmail}
          onChange={(e) => setLEmail(e.target.value)}
          placeholder="Lead's email address"
        />
      </div>

      <div className="w-full space-y-3">
        <label htmlFor="lPhone" className="text-lg font-medium text-blue-900">
          Lead's Phone No.
        </label>
        <input
          type="number"
          id="lPhone"
          name="lPhone"
          className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm"
          required
          value={lPhone}
          onChange={(e) => setLPhone(e.target.value)}
          placeholder="Lead's phone number"
        />
      </div>

      <div className="w-full space-y-3">
        <label htmlFor="lInfo" className="text-lg font-medium text-blue-900">
          Property Info
        </label>
        <textarea
          id="lInfo"
          name="Info"
          className="p-3 w-full rounded-lg bg-white text-blue-950 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-sm min-h-[120px]"
          required
          value={lInfo}
          onChange={(e) => setLInfo(e.target.value)}
          placeholder="Additional property information..."
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
