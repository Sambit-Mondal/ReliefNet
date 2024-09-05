import { NextRequest, NextResponse } from 'next/server';
import { connectDB, UserModel } from '../../../../../database/database';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('image');
        const email = formData.get('email')?.toString();

        if (!file || !email) {
            console.error('Missing file or email in form data');
            return NextResponse.json({ message: 'Image and email are required' }, { status: 400 });
        }

        await connectDB();

        // Convert file to buffer
        const fileBuffer = await (file instanceof Blob ? file.arrayBuffer() : Promise.resolve(Buffer.from(file.toString())));
        const imagePath = path.join(process.cwd(), 'public/uploads', `${email}.jpg`);

        // Save the image file
        await fs.writeFile(imagePath, Buffer.from(fileBuffer));
        const imageUrl = `/uploads/${email}.jpg`;

        // Log the intended database update operation
        console.log(`Updating user with email ${email} to have image URL: ${imageUrl}`);

        // Update user profile with the image URL
        const user = await UserModel.findOneAndUpdate(
            { email },
            { image: imageUrl },
            { new: true }
        );

        // Check if user exists
        if (!user) {
            console.error('User not found for email:', email);
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Log the successful update
        console.log('User profile updated successfully:', user);

        return NextResponse.json({ message: 'Image uploaded successfully', image: imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json({ message: 'Error uploading image' }, { status: 500 });
    }
}