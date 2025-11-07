"use client";
import BlogItem from "@/Components/BlogItem";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        <Header />
        <BlogList />
        {/* <BlogItem /> */}
        <Footer />
      </h1>
    </>
  );
}
