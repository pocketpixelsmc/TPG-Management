"use client";
import React, { FormEvent, useState } from "react";

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
    } else {
      setError(true);
      setSuccess(false);
    }
    setPending(false);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center gap-4 p-2 sm:p-16 bg-slate-300 lg:max-w-[1600px] rounded-xl h-fit"
    >
      <h2 className="text-2xl font-bold text-blue-950 underline">Your Info</h2>

      <label htmlFor="Name" className="text-lg text-blue-900">
        First and Last Name
      </label>
      <input type="text" id="Name" name="name" className="p-2 w-full rounded-lg" required value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="phoneNumber" className="text-lg text-blue-900">
        Phone Number
      </label>
      <input
        type="number"
        id="phoneNumber"
        name="p_no"
        className="p-2 w-full rounded-lg"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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

      <h2 className="text-2xl font-bold text-blue-950 underline">Lead Info</h2>

      <label htmlFor="lFullName" className="text-lg text-blue-900">
        Lead's Full Name
      </label>
      <input
        type="text"
        id="lFullName"
        name="lFullName"
        className="p-2 w-full rounded-lg"
        required
        value={lFullName}
        onChange={(e) => setLFullName(e.target.value)}
      />
      <label htmlFor="lEmail" className="text-lg text-blue-900">
        Lead's Email Address
      </label>
      <input
        type="email"
        id="lEmail"
        name="lEmail"
        className="p-2 w-full rounded-lg"
        required
        value={lEmail}
        onChange={(e) => setLEmail(e.target.value)}
        min={1}
      />
      <label htmlFor="lPhone" className="text-lg text-blue-900">
        Lead's Phone No.
      </label>
      <input
        type="number"
        id="lPhone"
        name="lPhone"
        className="p-2 w-full rounded-lg"
        required
        value={lPhone}
        onChange={(e) => setLPhone(e.target.value)}
        min={1}
      />
      <label htmlFor="lInfo" className="text-lg text-blue-900">
        Property Info
      </label>
      <textarea
        id="lInfo"
        name="Info"
        className="p-2 w-full rounded-lg"
        required
        value={lInfo}
        onChange={(e) => setLInfo(e.target.value)}
      />
      <button className="bg-blue-900 text-white p-4 px-8 rounded-lg transition-all hover:bg-blue-700" type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
      {error && <p className="text-red-500 text-lg">There was an error submitting the form. Please try again.</p>}
      {success && <p className="text-green-500 text-lg">Your form has been submitted successfully.</p>}
    </form>
  );
}
