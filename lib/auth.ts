import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { createUser, getUser } from "./usercontroller";
import bcrypt from "bcrypt";
import User from "@/model/user-model";

export const authOptions = {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }),
            
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: { label: "Email", type: "email" },
                    password: { label: "Password", type: "password" },
                },
                async authorize(credentials: any) {
                    try {
                        console.log("credentials => ",credentials);
                        const user = await User.findOne({email: credentials?.email});
                        if(!user) return null;

                        const isPasswordValid = await bcrypt.compare(credentials?.password, user.password as string);
                        if(!isPasswordValid) return null;

                        console.log("user => ",user);
                        return user;
                    } catch (error) {
                        console.log("error => ",error);
                        return null;
                    }
                },
            })
        ],

        callbacks: {
            async signIn({ user }: { user: any }) {
                console.log("user callbacks => ",user);
                
                // save the user in db
                const createdUser = await User.create({email: user.email, image: user.image, name: user.name});
                if(!createdUser) return false;

                console.log("createdUser => ",createdUser);
                return true;
            },
            async redirect() {
                return "/"
              },
        },

        secret: process.env.NEXTAUTH_SECRET,
        // pages: {
        //     signIn: "/auth/signin",
        // }
}
