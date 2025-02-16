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
