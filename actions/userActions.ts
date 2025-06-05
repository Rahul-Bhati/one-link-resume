// actions/userActions.ts
"use server";

import connectToDB from "@/lib/db";
import User from "@/model/user-model";
import { redirect } from "next/navigation";

export async function signUpAction(formData: FormData) {
  try {
    await connectToDB();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    // Validate input
    if (!name || !email || !password || !confirmPassword) {
      return {
        error: "All fields are required",
      };
    }

    if (password !== confirmPassword) {
      return {
        error: "Passwords do not match",
      };
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        error: "User with this email already exists",
      };
    }

    // Create new user
    await User.create({
      name,
      email,
      password,
    });

    // Redirect to dashboard on success
    redirect("/dashboard?success=Account created successfully");
  } catch (error) {
    console.error("Sign-up error:", error);
    return {
      error: "An error occurred during sign-up. Please try again.",
    };
  }
}