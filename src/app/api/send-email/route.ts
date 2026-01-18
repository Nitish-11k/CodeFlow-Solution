import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ✅ FIX: Interface banaya taaki TypeScript khush rahe
interface EmailRequestBody {
  email: string;
  name: string;
  message: string;
  type: string;
}

export async function POST(req: Request) {
  try {
    // ✅ FIX: "as EmailRequestBody" lagaya
    const { email, name, message, type } = await req.json() as EmailRequestBody;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // --- CONFIGURATION ---
    const logoUrl = "https://iili.io/fUpIYTx.jpg"; 
    const linkedinUrl = "https://www.linkedin.com/company/codeflow-solution/";
    const linkedinIcon = "https://cdn-icons-png.flaticon.com/512/174/174857.png";

    // --- HTML TEMPLATE GENERATOR ---
    const createEmailTemplate = (content: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
        
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0;">
          <img src="${logoUrl}" alt="CodeFlow Solution" style="width: auto; height: 40px; object-fit: contain;" />
        </div>

        <div style="padding: 30px 0; color: #333333; line-height: 1.6;">
          ${content}
        </div>

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #f0f0f0;">
          <p style="margin-bottom: 10px; color: #666; font-size: 14px;">Connect with us</p>
          <a href="${linkedinUrl}" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="${linkedinIcon}" alt="LinkedIn" style="width: 32px; height: 32px;" />
          </a>
          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            © ${new Date().getFullYear()} CodeFlow Solution. All rights reserved.
          </p>
        </div>

      </div>
    `;

    // 1. Admin Email Content
    const adminContent = `
      <h3 style="color: #1B365D;">New Submission Received</h3>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 10px;">
        <strong>Message:</strong><br/>
        ${message}
      </div>
    `;

    // 2. User Acknowledgement Content
    let userContent = "";
    let userSubject = "";

    if (type === "Waitlist Join") {
      userSubject = "You're on the list! 🚀";
      userContent = `
        <h2 style="color: #1B365D; margin-top: 0;">Welcome to the Inner Circle.</h2>
        <p>Hi ${name || 'Founder'},</p>
        <p>You've successfully secured your spot on the <strong>CodeFlow Founder Kits</strong> waitlist.</p>
        <p>We are preparing something special for the first 20 founders. Keep an eye on your inbox for your exclusive access code.</p>
        <br/>
        <a href="${linkedinUrl}" style="background-color: #1B365D; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Follow our Updates</a>
      `;
    } else {
      userSubject = "We received your message! 📨";
      userContent = `
        <h2 style="color: #1B365D; margin-top: 0;">Thanks for reaching out!</h2>
        <p>Hi ${name || 'there'},</p>
        <p>We have received your query regarding:</p>
        <p style="font-style: italic; color: #555;">"${message.substring(0, 100)}..."</p>
        <p>Our engineering team is reviewing it and will get back to you shortly.</p>
      `;
    }

    await Promise.all([
      transporter.sendMail({
        from: `"CodeFlow Admin" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Lead: ${type} - ${name || 'User'}`,
        html: createEmailTemplate(adminContent),
      }),
      transporter.sendMail({
        from: `"CodeFlow Solution" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: userSubject,
        html: createEmailTemplate(userContent),
      })
    ]);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}