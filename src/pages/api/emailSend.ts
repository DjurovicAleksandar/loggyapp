import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let lastRequestTime = 0;
// Define the rate limit window in milliseconds
const rateLimitWindow = 5000;

export default async function emailSend(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fullName, email, message, agreeTerms } = req.body;
      // Check the time difference since the last request
      const currentTime = Date.now();
      const timeDifference = currentTime - lastRequestTime;

      // Validation logic
      if (!fullName || !email || !message || !agreeTerms) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }
      //Email validation
      if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({ message: "Invalid email format" });

        return;
      }

      if (timeDifference < rateLimitWindow) {
        // Return a 429 (Too Many Requests) status if the rate limit is exceeded
        return res.status(429).json({
          message: "Too many requests, please try again later.",
        });
      }

      // Update last request time
      lastRequestTime = currentTime;

      //Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: `${email}`,
        to: process.env.EMAIL,
        subject: "New Contact Form Submission",
        text: `
          Full Name: ${fullName}
          Email: ${email}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error sending email", error: err });
      console.log(err);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
