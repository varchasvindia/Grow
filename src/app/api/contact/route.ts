import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(3000)
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    }
    // TODO: Send this enquiry to your business email/CRM using a provider such as Resend.
    // Do not rely on console logs as permanent lead storage.
    console.info("New varchasv website enquiry:", {
      ...parsed.data,
      receivedAt: new Date().toISOString()
    });
    return NextResponse.json({ success: true, message: "Enquiry received." });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}