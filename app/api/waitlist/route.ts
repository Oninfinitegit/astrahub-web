import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    const info = await transporter.sendMail({
      from: "info@astrahub.io", // sender address
      to: "m.sinasafari@gmail.com,ali.khaniyan@gmail.com", // list of receivers
      subject: "🚀 Someone subscribed!", // Subject line
      text: `${body.email} subscribed to astrahub waitlist`, // plain text body
      //   html: "<b>Hello world?</b>", // html body
    });
    return NextResponse.json({
      success: true,
      message: "Done! Thank you for joining our wait list!",
      info: info,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
};
