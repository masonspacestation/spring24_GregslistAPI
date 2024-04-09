import { Schema } from "mongoose";




export const JobSchema = new Schema(
  {
    company: { type: String, minlength: 0, maxlength: 100, required: true },
    jobTitle: { type: String, minlength: 0, maxlength: 100, required: true },
    hours: { type: Number, min: 1, max: 168, required: true },
    rate: { type: Number, min: 1, max: 100000000, required: true },
    imgUrl: { type: String, minlength: 0, maxlength: 500, required: true },
    description: { type: String, minlength: 0, maxlength: 500 },
    cretorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
  }, { timestamps: true }
)