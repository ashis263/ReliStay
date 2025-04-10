import mongoose, { Schema, Types } from "mongoose";

interface IBookingDocument extends mongoose.Document {
  // Core References
  property: Types.ObjectId;
  guest: Types.ObjectId;
  homeowner: Types.ObjectId;
  //  Dates
  checkin: Date;
  checkout: Date;
  nights: number; // Auto Calculated
  // pricing
  totalPrice: number; // Total Cost of the property
  homeownerPayout: number; // Money homeowner will receive
  serviceFee: number; // Platform charge (eg. 10%)

  // // payment
  // payment: {
  //   method: string;
  //   transactionID: string;
  //   amount: string;
  //   status: "pending" | "confirmed" | "cancelled" | "completed";
  //   date: Date;
  // };
}

const BookingSchema: Schema = new Schema<IBookingDocument>(
  {
    property: { type: Schema.Types.ObjectId, ref: "Property", required: true },
    guest: { type: Schema.Types.ObjectId, ref: "User", required: true },
    homeowner: { type: Schema.Types.ObjectId, ref: "User", required: true },

    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    nights: { type: Number },

    totalPrice: { type: Number, required: true },
    homeownerPayout: { type: Number, required: true },
    serviceFee: { type: Number, required: true },

    // payment: {
    //   method: { type: String, required: true },
    //   transactionID: { type: Number, required: true },
    //   amount: { type: Number, required: true },
    //   status: {
    //     type: String,
    //     enum: ["pending", "confirmed", "cancelled", "completed"],
    //   },
    //   date: { type: Date, required: true },
    // },
  },
  { timestamps: true }
);

// Auto-calculate nights before saving
BookingSchema.pre("save", function (this: IBookingDocument, next) {
  if (this.isModified("checkIn") || this.isModified("checkOut")) {
    const diffTime = Math.abs(this.checkout.getTime() - this.checkin.getTime());
    this.nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  next();
});

export default mongoose.model<IBookingDocument>("Booking", BookingSchema);
