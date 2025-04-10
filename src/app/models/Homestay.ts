import mongoose, { Schema } from "mongoose";

interface IHomestayDocument extends mongoose.Document {
  title: string;
  description: string;
  homestaysType: "apartment" | "house" | "cottage" | "cabin";
  // homeowner: Types.ObjectId;
  location: {
    address: string;
    city: string;
    country: string;
  };
  pricePerNight: number;
  bedrooms: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  availability: boolean;
  bookingCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const HomestaySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    homestaysType: {
      type: String,
      enum: ["apartment", "house", "cottage", "cabin"],
      required: true,
    },
    // homeowner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    pricePerNight: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    maxGuests: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], required: true },
    availability: { type: Boolean, default: true },
    bookingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const HomestayModel =
  (mongoose.models.Homestay as mongoose.Model<IHomestayDocument>) ||
  mongoose.model<IHomestayDocument>("Homestay", HomestaySchema);

export default HomestayModel;
