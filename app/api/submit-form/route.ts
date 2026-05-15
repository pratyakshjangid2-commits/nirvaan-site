import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...data } = body;

    // Log the data (in production, this would go to a database or email service like Resend/SendGrid)
    console.log(`[Form Submission - ${formType}]:`, data);

    // Simulate a brief delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      { message: "Form submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Failed to submit form. Please try again later." },
      { status: 500 }
    );
  }
}
