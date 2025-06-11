// actions/userActions.ts
"use server";

import User from "@/model/user-model";
import bcrypt from "bcrypt";

export async function createUser(formData: {name: string, email: string, password: string, confirmPassword: string}) {
  const name = formData.name;
  const email = formData.email;
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    return {error: "All fields are required"}
  }

  if (password !== confirmPassword) {
    return {error: "Passwords do not match"}
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return {error: "User with this email already exists"}
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // Create new user
  const user= await User.create({ name, email, password: hashedPassword });

  // Redirect to dashboard with success message
  return {success: "Account created successfully"}
}

export async function loginUser(formData: {email: string, password: string}) {
  const email = formData.email;
  const password = formData.password;

  // Validate input
  if (!email || !password) {
    return {error: "All fields are required"}
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return {error: "User not found"}
  }

  // password is bcrypted 

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return {error: "Invalid password"}
  }

  // Redirect to dashboard with success message
  return {success: "Logged in successfully"}
}