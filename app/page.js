"use client";
import BlogItem from "@/Components/BlogItem";
import Header from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        <Header />
        <BlogItem />
      </h1>
    </>
  );
}
