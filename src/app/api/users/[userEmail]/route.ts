import User from "@/app/models/user";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const GET = async (
  req: Request,
  { params }: { params: Promise<{ userEmail: string }> }
) => {
  const { userEmail } = await params;

  await dbConnect();
  const user = await User.findOne({ email: userEmail });

  return NextResponse.json(user);
};

export { GET };
