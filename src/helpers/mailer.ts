import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { useId } from "react";
import { Html } from "next/document";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "36049d7de58db1",
        pass: "9ae16ec0a90bb8",
      },
    });

    const mailOptions = {
      from: "nitesh-dummy-mail@gamil.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333; max-width:600px; margin:auto; padding:20px;">
  
  <h2 style="color:#2c3e50; text-align:center;">
    ${emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"}
  </h2>

  <p>
    Hello,
  </p>

  <p>
    Please click the button below to 
    <strong>${emailType === "VERIFY" ? "verify your email address" : "reset your password"}</strong>.
  </p>

  <div style="text-align:center; margin:30px 0;">
    <a href="${process.env.DOMAIN}/verify-email?token=${hashedToken}"
       style="
         background-color:#4CAF50;
         color:white;
         padding:12px 24px;
         text-decoration:none;
         border-radius:6px;
         font-size:16px;
         display:inline-block;
       ">
       ${emailType === "VERIFY" ? "Verify Email" : "Reset Password"}
    </a>
  </div>

  <p>
    If the button above doesn't work, copy and paste this link into your browser:
  </p>

  <p style="word-break:break-all; color:#3498db;">
    ${process.env.DOMAIN}/verify-email?token=${hashedToken}
  </p>

  <p style="margin-top:30px;">
    If you didn’t request this, you can safely ignore this email.
  </p>

  <hr style="margin:30px 0;">

  <p style="font-size:12px; color:#777; text-align:center;">
    © ${new Date().getFullYear()} Your Company
  </p>

</div>
`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
