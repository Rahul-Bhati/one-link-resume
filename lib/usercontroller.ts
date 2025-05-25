import User from "@/model/user-model";
import { User  as Usertype } from "@/types/type";
import bcrypt from "bcrypt";

export const validateUser = async (email: string, password: string) => {
    try {
        const user : {user?: Usertype, status: number, error?: any} = await getUser(email);
        if (!user || user.status !== 200) {
            throw new Error("No user found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.user?.password as string);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        return {user: user.user as Usertype, status: 200};    
    } catch (error) {
        console.log(error);
        return {error: "Internal server error", status: 500};
    }
}

export const getUser = async (email: string) => {
    try {
        const user = await User.findOne({email: email});

        if(!email) return {error: "Email is required", status: 400};

        if(!user) return {error: "No user found", status: 404};

        return {user: user as Usertype, status: 200};
    } catch (error) {
        console.log(error);
        return {error: "Internal server error", status: 500};
    }
}

export const createUser = async (email: string, password: string) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        if(!email || !password) return {error: "Email and password are required", status: 400};

        const user = await getUser(email);
        if(user) return {error: "User already exists", status: 400};

        const newUser = await User.create({email, password: hashedPassword});

        if(!newUser) return {error: "User not created", status: 400};

        return {user: newUser as Usertype, status: 201};
    } catch (error) {
        console.log(error);
        return {error: "Internal server error", status: 500};
    }
}

