import bcryptjs from "bcrypt";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connect();
console.log("it workd");
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    // check if the user exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "user already exist", status: 400 });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    console.log(salt, "---salt", password);
    const hashedpassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedpassword,
    });
    console.log(newUser, "testing");
    const savedUser = await newUser.save();

    console.log(savedUser, "----> saved user");

    return NextResponse.json({
      message: "user created Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
