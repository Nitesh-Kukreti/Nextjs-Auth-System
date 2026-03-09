import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

export async function DELETE(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);

    await User.findByIdAndDelete(userId);

    // create a response to send to frontend 
    const response = NextResponse.json({
      message: "User deleted successfully",
      success: true,
    });

    // clear the cookies
    response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)})

    // response returned to frontend
    return response;
    
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error while deleting user" },
      { status: 500 },
    );
  }
}
