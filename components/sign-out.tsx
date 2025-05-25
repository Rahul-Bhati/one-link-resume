"use client";

import Provider from "@/app/provider";
import { signOut } from "next-auth/react"
 
export default function SignOut() {
  return <Provider><button className="w-full py-1" onClick={() => signOut()}>Logout</button></Provider>;
} 