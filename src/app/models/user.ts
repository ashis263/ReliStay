import mongoose, { Schema } from "mongoose";

interface IUserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "homeowner" | "customer";
  //   gender: { type: "male" | "female" | "others"; required: true };
  //   age: { type: number; required: true };
  //   phone: { type: number; required: true };
  //   NID: { type: number; required: true };

  //   photo: { type: string; required: true };
  //   verified: { type: boolean; required: true };
  //   bio: { type: string; required: true };
  //   address: {
  //     type: { address: string; city: string; country: string };
  //     required: true;
  //   };
  //   lastLogin: { type: Date; required: true };
  //   createdAt: { type: Date; required: true };
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  //   gender: { type: String, required: true },
  //   age: { type: Number, required: true },
  //   phone: { type: Number, required: true },
  //   NID: { type: Number, required: true },
  //   photo: { type: String, required: true },
  //   verified: { type: Boolean, required: true },
  //   bio: { type: String, required: true },
  //   address: {
  //     type: { address: String, city: String, country: String },
  //     required: true,
  //   },
  //   lastLogin: { type: Date, required: true },
  //   createdAt: { type: Date, required: true },
});

const User =
  mongoose.models.User || mongoose.model<IUserDocument>("User", userSchema);

export default User;
