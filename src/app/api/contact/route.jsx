import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const p_no = formData.get("p_no");
  const address = formData.get("address");
  const no_units = formData.get("no_units");
  const more_info = formData.get("more_info");

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone No : ${p_no} </p>
            <p>Address: ${address} </p>
            <p>No of Units: ${no_units} </p>
            <p>More Info: ${more_info} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
