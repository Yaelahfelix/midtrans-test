import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const url = req.url;
  console.log("hit");
  console.log(url);
  return NextResponse.json({
    message: "success",
    url,
  });
}

export async function POST(req: NextRequest) {
  const url = req.url;
  const body = req.body;
  console.log(body);
  console.log("hit");
  console.log(url);
  return NextResponse.json({
    message: "success",
    url,
    body,
  });
}
