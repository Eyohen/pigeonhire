import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
