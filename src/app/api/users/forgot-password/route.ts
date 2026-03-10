import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await User.findOne({ email: body.email });

    // check if user exist with the entered email
    if (!user) {
      return NextResponse.json(
        { error: "user not exist with this email" },
        { status: 400 },
      );
    }

    //send verification email
    await sendEmail({
      email: user.email,
      emailType: "RESET",
      userId: user._id,
    });


    return NextResponse.json({
      message: "Password reset mail sent",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error while sending password reset mail" },
      { status: 500 },
    );
  }
}
