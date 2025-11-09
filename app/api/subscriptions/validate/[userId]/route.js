import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
