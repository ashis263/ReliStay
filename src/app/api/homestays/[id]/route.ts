import HomestayModel from "@/app/models/Homestay";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  await dbConnect();
  const result = await HomestayModel.findById(id);

  return NextResponse.json(result);
};

export { GET };
