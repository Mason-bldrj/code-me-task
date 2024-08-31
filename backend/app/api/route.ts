import RecordModel from "@/model/news.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await RecordModel.find({});
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const { title, description, img } = data;
  try {
    const res = await RecordModel.create({
      title,
      description,
      img,
    });
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
