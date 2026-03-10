import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();


    const userId = await getDataFromToken(request) // geting user id
    const user = await User.findOne({_id: userId})// geting user using userid from the database

    // check is password valid
    const isPasswordValid = await bcrypt.compare(body.currentPassword, user.password)
    if(!isPasswordValid){
        console.log("Invalid password");
        return NextResponse.json({error: "Invalid passworrd"},{status: 400})
    }
    // change password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    const response = NextResponse.json({
      message: "password changed successfully",
      success: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error while changing password",
      },
      { status: 500 },
    );
  }
}
