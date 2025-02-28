import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phoneNumber, email, lFullName, lPhoneNumber, lEmail, lInfo } = await request.json();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_SMTP_EMAIL,
        pass: process.env.NEXT_SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.NEXT_SMTP_EMAIL,
      to: process.env.NEXT_RECEIVER_EMAIL,
      subject: "Referral Email from website",
      html: `
      <p>Name : ${name}</p> 
      <p>Phone Number : ${phoneNumber}</p>
      <p>Email : ${email}</p>
      <p>Lead Full Name : ${lFullName}</p>
        <p>Lead Phone Number : ${lPhoneNumber}</p>
        <p>Lead Email : ${lEmail}</p>
        <p>Lead's Property Info : ${lInfo}</p>
        `,
    };

    await transport.sendMail(mailOption);
    return NextResponse.json({ message: "Email Sent Successfully", messageSent: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email", messageSent: false }, { status: 500 });
  }
}
