import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  generateEmailTemplateForClient,
  generateEmailTemplateForUser,
} from "@/utils/EmailTemplate";
import fs from "fs";
import path from "path";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { name, email, message, title, pdf, phoneNo } = await req.json();
  const titleArray = Array.isArray(title) ? title[1] : [title][0];
  const capitalized = titleArray.charAt(0).toUpperCase() + titleArray.slice(1);

  const messageForClient = `
  <p style="font-size: 16px; color: #555;"><strong>Valuable customer insights derived from ${capitalized}:</strong></p>
            <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${email}</p>
            ${
              title !== "contact"
                ? `
              <p style="font-size: 16px; color: #555;">
                <strong>Phone Number:</strong> ${"No Phone Number"}
              </p>
              `
                : `<p style="font-size: 16px; color: #555;">
                  <strong>Phone Number:</strong> ${phoneNo}
                </p>`
            }
            ${
              title === "contact"
                ? `
              <p style="font-size: 16px; color: #555;">
                <strong>Message:</strong> ${message}
              </p>
                `
                : `<p style="font-size: 16px; color: #555;">
                <strong>Message:</strong> ${"No Message"}
              </p>`
            }
  `;

  const messageForUser = `
  <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
  `;

  // Function to fetch the PDF file from the public/files directory and convert it to Base64
  const getPdfAttachment = async () => {
    const pdfArray = Array.isArray(pdf) ? pdf : [pdf];
    const titleArray = Array.isArray(title) ? title : [title];

    if (
      !pdfArray.length ||
      (titleArray.length && titleArray[0] === "contact")
    ) {
      return [];
    }

    try {
      const attachments = await Promise.all(
        pdfArray.map(async (pdf, index) => {
          if (!pdf) return null;

          const titleArr =
            titleArray[index] || `Aspire Tech Brochure_${index + 1}`;
          const cleanPdfPath = pdf.replace(/^\/?files\//, "");
          const pdfPath = path.join(
            process.cwd(),
            "public",
            "files",
            cleanPdfPath
          );

          const pdfBuffer = await fs.promises.readFile(pdfPath);
          const pdfBase64 = pdfBuffer.toString("base64");

          return {
            filename: `${titleArr}.pdf`,
            content: pdfBase64,
            encoding: "base64",
            contentType: "application/pdf",
          };
        })
      );

      // Filter out any null entries (if a PDF was skipped)
      return attachments.filter(Boolean);
    } catch (error) {
      console.error("Error reading PDF file(s):", error);
      return [];
    }
  };
  // const getPdfAttachment = async () => {
  //   if (pdf && title !== "contact") {
  //     try {
  //       // Clean the pdf path
  //       const cleanPdfPath = pdf.replace(/^\/?files\//, "");

  //       // Construct absolute path to the file
  //       const pdfPath = path.join(
  //         process.cwd(),
  //         "public",
  //         "files",
  //         cleanPdfPath
  //       );

  //       // Read the file directly
  //       const pdfBuffer = await fs.promises.readFile(pdfPath);
  //       const pdfBase64 = pdfBuffer.toString("base64");

  //       const fileName = `${title}.pdf`;
  //       return [
  //         {
  //           filename: fileName,
  //           content: pdfBase64,
  //           encoding: "base64",
  //           contentType: "application/pdf",
  //         },
  //       ];
  //     } catch (error) {
  //       console.error("Error reading PDF file:", error);
  //       return [];
  //     }
  //   }
  //   return [];
  // };

  // !clientEmail
  if (!email && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  const clientMailOptions = {
    from: `"${email}" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: generateEmailTemplateForClient(messageForClient),
    // bcc: [""],
  };

  const userMailOptions = {
    from: `Aspire Tech Academy - "${process.env.EMAIL_ID}" <support@webibee.com>`,
    to: email,
    subject: "Acknowledgment: We received your Submission",
    html: generateEmailTemplateForUser(messageForUser, title),
    attachments: await getPdfAttachment(),
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
