import { NextRequest, NextResponse } from 'next/server';
import { connectDB, UserModel } from '../../../../database/database';
import bcrypt from 'bcrypt';

// Handle POST requests
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { username, name, email, password, phone } = await req.json();
        await connectDB();

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            name,
            email,
            password: hashedPassword,
            phone
        });

        await newUser.save();

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Signup Error:', error);  // Log the error for debugging
        return NextResponse.json({ message: 'Internal Server Error', error: (error as any).message }, { status: 500 });
    }
}