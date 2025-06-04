"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignOut from "@/components/sign-out";

const Header = async () => {
  const session = await getServerSession();

  if(!session) {
    redirect("/api/auth/signin")
  }
  return (
    <nav className='p-4 shadow-md'>
      <ul className='flex gap-6 justify-end items-center'>
        <li>{session && <Button><Link href={"/dashboard"}>Dashboard</Link></Button>}</li>
        <li>{session && (
            <div className="cursor-pointer" >
                <Image src={session.user?.image as string} alt={session.user?.name as string} width={40} height={40} className="rounded-full" />
                {/* Logout Button (Hidden by Default) */}
                <div className="absolute left-0 w-full text-center bg-white border rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <SignOut />
                </div>
            </div>
          )}</li>
      </ul>
    </nav>
  )
}

export default Header