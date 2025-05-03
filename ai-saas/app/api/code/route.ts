import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 401 });
    }

    if (!ai) {
      return new NextResponse("Gemini API Keys Not Configured", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", {
        status: 500,
      });
    }
    const instruction =
      "you are a code generation, you must answer only in markdown code snippets and explain in comments\n";

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: instruction + messages,
    });
    console.log("code post: ", response.text);
    return new NextResponse(response.text, { status: 200 });
  } catch (e) {
    console.log(`[CODE_ERROR] ${e}`);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
