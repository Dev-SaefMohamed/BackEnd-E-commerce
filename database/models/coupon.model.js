import mongoose from "mongoose";

let couponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    discount: {
        type:Number,
        required: true,
        min: 0,
    },
  },
  { timestamps: true }
);
export const couponModel = mongoose.model("coupon",couponSchema)