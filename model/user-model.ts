// models/User.ts
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: false,
    default: "https://res.cloudinary.com/dtbvpvtft/image/upload/v1749130643/Untitled_design-removebg-preview_gjchhc.png",
  },
  password: {
    type: String,
    required: false, // Set to false to allow Google sign-in users without passwords
  },
});

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

export default User;