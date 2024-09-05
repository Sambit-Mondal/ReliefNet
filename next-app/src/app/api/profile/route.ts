import { NextRequest, NextResponse } from 'next/server';
import { connectDB, UserModel } from '../../../../database/database';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        await connectDB();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({
            username: user.username,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        });
    } catch (error) {
        console.error('Profile Fetch Error:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: (error as any).message }, { status: 500 });
    }
}