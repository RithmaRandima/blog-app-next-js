import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { title } from "process";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  console.log("blog get hit");
  return NextResponse.json({ msg: "Api working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timeStamps = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buttfer = Buffer.from(imageByteData);
  const path = `./public/${timeStamps}_${image.name}`;

  const imageUrl = `/${timeStamps}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImage: `${formData.get("authorImage")}`,
  };

  await BlogModel.create(blogData);
  console.log("BLog saved");
  return NextResponse.json({ success: true, msg: "BLog Add" });
}
