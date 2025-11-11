import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";
import { RiMailCheckFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 min-h-screen  border border-black px-2 sm:px-0">
      <div className="px-2 py-2 ">
        <h1 className="font-bold text-2xl">Blogger</h1>
      </div>
      <div className="w-40 sm:w-70 relative py-10 flex flex-col gap-4 ">
        <div className="w-[100%] sm:w-[70%] absolute right-0">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 font-medium my-3 px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]"
          >
            <IoAddCircleSharp className="text-2xl" />
            <p className="font-semibold">Add Blogs</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="flex items-center border border-black gap-3 font-medium my-3 px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]"
          >
            <IoMdListBox className="text-2xl" />
            <p className="font-semibold">Blog List</p>
          </Link>

          <Link
            href="/admin/subscription"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white my-3 shadow-[-5px_5px_0px_#000]"
          >
            <RiMailCheckFill className="text-2xl" />
            <p className="font-semibold">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
