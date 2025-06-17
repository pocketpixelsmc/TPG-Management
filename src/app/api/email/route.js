import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try{
    const {
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
      // Legacy fields for backward compatibility
      name,
      phoneNumber,
      propertyAddress,
      numberOfUnits,
      additionalPropertyInformation,
    } = await request.json();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_SMTP_EMAIL,
        pass: process.env.NEXT_SMTP_PASSWORD,
      },
    });

    // Use new fields if available, fallback to legacy fields
    const fullName = firstName && lastName ? `${firstName} ${lastName}` : name;
    const contactPhone = phone || phoneNumber;
    const fullAddress = address && city && state && zipCode 
      ? `${address}, ${city}, ${state} ${zipCode}` 
      : propertyAddress;

    const mailOption = {
      from: process.env.NEXT_SMTP_EMAIL,
      to: process.env.NEXT_RECEIVER_EMAIL,
      subject: `New Property Management Inquiry from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Property Management Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .section { margin-bottom: 25px; }
            .section-title { color: #1e3a8a; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .field-label { font-weight: bold; color: #374151; display: inline-block; width: 140px; }
            .field-value { color: #1f2937; }
            .highlight { background-color: #dbeafe; padding: 2px 6px; border-radius: 4px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 New Property Management Inquiry</h1>
              <p style="margin: 5px 0 0 0;">TPG Management Website Contact Form</p>
            </div>

            <div class="section">
              <div class="section-title">👤 Contact Information</div>
              ${ownerType ? `
                <div class="field">
                  <span class="field-label">Contact Type:</span>
                  <span class="field-value highlight">${ownerType === 'owner' ? 'Property Owner' : ownerType === 'renter' ? 'Renter' : 'Vendor'}</span>
                </div>
              ` : ''}
              <div class="field">
                <span class="field-label">Name:</span>
                <span class="field-value">${fullName}</span>
              </div>
              <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></span>
              </div>
              <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value"><a href="tel:${contactPhone}" style="color: #2563eb;">${contactPhone}</a></span>
              </div>
            </div>

            ${address || city || state || zipCode || propertyAddress ? `
            <div class="section">
              <div class="section-title">📍 Property Information</div>
              ${address ? `
                <div class="field">
                  <span class="field-label">Address:</span>
                  <span class="field-value">${address}</span>
                </div>
              ` : ''}
              ${city ? `
                <div class="field">
                  <span class="field-label">City:</span>
                  <span class="field-value">${city}</span>
                </div>
              ` : ''}
              ${state ? `
                <div class="field">
                  <span class="field-label">State:</span>
                  <span class="field-value">${state}</span>
                </div>
              ` : ''}
              ${zipCode ? `
                <div class="field">
                  <span class="field-label">Zip Code:</span>
                  <span class="field-value">${zipCode}</span>
                </div>
              ` : ''}
              ${fullAddress && !address ? `
                <div class="field">
                  <span class="field-label">Property Address:</span>
                  <span class="field-value">${fullAddress}</span>
                </div>
              ` : ''}
              ${numberOfUnits ? `
                <div class="field">
                  <span class="field-label">Number of Units:</span>
                  <span class="field-value">${numberOfUnits}</span>
                </div>
              ` : ''}
            </div>
            ` : ''}

            ${propertyGoals || additionalPropertyInformation ? `
            <div class="section">
              <div class="section-title">🎯 Management Goals & Information</div>
              ${propertyGoals ? `
                <div class="field">
                  <span class="field-label">Goals:</span>
                  <div class="field-value" style="margin-top: 8px; padding: 10px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #3b82f6;">
                    ${propertyGoals.replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}
              ${additionalPropertyInformation ? `
                <div class="field">
                  <span class="field-label">Additional Info:</span>
                  <div class="field-value" style="margin-top: 8px; padding: 10px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #3b82f6;">
                    ${additionalPropertyInformation.replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}
            </div>
            ` : ''}

            ${howDidYouHear ? `
            <div class="section">
              <div class="section-title">📢 Lead Source</div>
              <div class="field">
                <span class="field-label">How they heard about us:</span>
                <span class="field-value highlight">${howDidYouHear}</span>
              </div>
            </div>
            ` : ''}

            <div class="footer">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} TPG Management. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transport.sendMail(mailOption);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}