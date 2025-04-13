import User from "@/app/models/user";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const GET = async () => {
  await dbConnect();
  const data = await User.find({}, "_id name email role");

  return Response.json({ data });
};

const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: "customer",
  });

  const saveUser = await newUser.save();
  return Response.json({ saveUser });
};

export { GET, POST };
