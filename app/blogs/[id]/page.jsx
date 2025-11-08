"use client";
import { blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa6";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const { id } = use(params);

  const fetchBlogData = () => {
    const blog = blog_data.find((blog) => Number(id) === blog.id);
    setData(blog);
    // console.log(blog);
    console.log(data);
  };

  useEffect(() => {
    if (id) fetchBlogData();
  }, [id]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1>blogger</h1>
          </Link>
          <button className="flex items-center justify-center gap-1 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px]">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt={data.author}
            width={60}
            height={60}
            className="rounded-full mx-auto mt-6 border border-white"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-auto w-[100%] mt-[-100px]  mb-10 px-5">
        <Image
          className="border border-white w-[90%] mx-auto max-w-[1280px] max-h-[600px] object-cover"
          src={data.image}
          alt={data.image}
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.descrption}</p>
        {/* step 01 */}
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting{" "}
        </h3>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>
        {/* step 2 */}
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting{" "}
        </h3>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>
        {/* step 3 */}
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting{" "}
        </h3>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>

        {/* conclusion */}
        <h3 className="my-5 text-[20px] font-bold">Conclusion </h3>
        <p className="my-3">
          Beforer you can manage your lifestyle, you must have aclear
          undefineding of what you want to achive. Start by reflecting on your
          values, and aspirations, and long-term goals.
        </p>

        <div className="my-24">
          <p className="text-black font-bold my-4">
            Share this article on social media{" "}
          </p>
          <div className="flex text-white gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full  bg-black cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full  bg-black cursor-pointer">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full  bg-black cursor-pointer">
              <FaGooglePlusG />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1>error</h1>
  );
};

export default Page;
