import { NextResponse } from "next/server";

const GET = async () => {
  return NextResponse.json({ message: "Server Health is ok 👌" });
};

export { GET };
