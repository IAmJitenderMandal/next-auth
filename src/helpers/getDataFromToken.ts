import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.SECRATE_TOKEN!);
    return decodedToken.id;
  } catch (error) {
    console.log(error);
  }
};