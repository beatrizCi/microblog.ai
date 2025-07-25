import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";
import "dotenv/config";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    title: z.string().describe("The blog post title"),
    content: z.string().describe("The blog post content"),
  })
);

const model = new ChatOpenAI({
  temperature: 0.7,
  modelName: "gpt-4o", // ✅ Use GPT-4o
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ success: false, error: "Missing API key" }, { status: 500 });
    }

    if (!topic || topic.length < 3) {
      return NextResponse.json({ success: false, error: "Invalid topic" }, { status: 400 });
    }

    const prompt = `Write a short blog post about "${topic}".\n\n${parser.getFormatInstructions()}`;

    const result = await model.invoke(prompt);
    const parsed = await parser.parse(result.content as string);

    return NextResponse.json({ success: true, data: parsed });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
