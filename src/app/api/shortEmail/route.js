import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try{
    const {
      name,
      phoneNumber,
      email,
      propertyAddress,
    } = await request.json();

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
      subject: "Short Form Email from website",
      html: `
      <p>Name : ${name}</p> 
      <p>Phone Number : ${phoneNumber}</p>
      <p>Email : ${email}</p>
      <p>Property Address : ${propertyAddress}</p>
        `,
    };

    await transport.sendMail(mailOption);
    return NextResponse.json({ message: "Email Sent Successfully" , messageSent: true }, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" , messageSent: false }, { status: 500 })
  }
} 