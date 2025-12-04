import { NextResponse } from "next/server";
import { portfolioData } from "@/libs/portfolioData";

export async function GET() {
  return NextResponse.json(portfolioData);
}
