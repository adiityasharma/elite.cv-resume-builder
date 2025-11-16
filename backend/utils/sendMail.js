import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";

const expireIn = 10

const transport = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})


export const sendMail = async ({ sendTo, subject, code }) => {

  if (!sendTo || !subject || !code) {
    return "email or subject or code is missing."
  }

  const options = {
    from: "adityasharma626367@gmail.com",
    to: sendTo,
    subject,
    html: emailTemplate({ name: sendTo, code, expireIn, companyName: "EliteCV" }),
  }

  try {
    return await transport.sendMail(options)
  } catch (error) {
    return `Error sending email: ${error.message}`
  }
} 
