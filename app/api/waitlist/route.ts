import { NextResponse } from "next/server";
import { redirect } from 'next/navigation';


export const POST = async (req: Request) => {
    const body = await req.json()
    console.log({body});
    return NextResponse.json({success: true, message: "Done! Thank you for joining our wait list!"})
}