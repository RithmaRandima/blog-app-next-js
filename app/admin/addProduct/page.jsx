"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Page = () => {
  const [image, setImage] = useState(null); // Start as null, not false

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // create preview URL
    }
  };

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16 pb-10">
        <p className="text-[18px]sm:text-xl mb-3 font-semibold">
          Upload Thumbnail
        </p>
        <div className="inline-block w-[120px]">
          <label htmlFor="image" className="cursor-pointer block w-[120px]">
            {image ? (
              <Image
                className="w-[120px] h-[60px] object-cover border border-gray-200"
                src={image}
                alt="thumbnail"
                width={120}
                height={60}
              />
            ) : (
              <div className="w-[120px] h-[60px] bg-gray-100 flex flex-col justify-center items-center border rounded-[7px] border-gray-200">
                <FaCloudUploadAlt className="text-gray-300 text-[30px]" />
                <p className="text-gray-300 text-[10px] font-semibold mt-[-5px]">
                  upload
                </p>
              </div>
            )}
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <p className="text-[18px]sm:text-xl  mt-4 mb-3 font-semibold">
          Blog Title
        </p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] px-5 py-3 rounded-full bg-gray-100  border border-gray-200"
        />

        <p className="text-[18px]sm:text-xl  mt-4 mb-3 font-semibold">
          Blog Description
        </p>
        <textarea
          type="text"
          placeholder="Write Content here"
          required
          rows={6}
          className="w-full sm:w-[500px] px-5 py-3 rounded-[7px] bg-gray-100  border border-gray-200"
        />

        <p className="text-[18px]sm:text-xl  mt-4 mb-3 font-semibold">
          Blog Category
        </p>
        <select
          name="category"
          id=""
          className="w-[170px] bg-gray-200 py-2 rounded-[7px] px-3 font-semibold"
        >
          <option value="" className="font-semibold">
            --- Select Here ---
          </option>
          <option value="Statup" className="font-semibold">
            Statup
          </option>
          <option value="Technology" className="font-semibold">
            Technology
          </option>
          <option value="Lifestyle" className="font-semibold">
            Lifestyle
          </option>
        </select>

        <button
          type="submit"
          className="mt-8 w-full sm:w-60 h-12 block bg-black text-white font-bold tracking-[2px] "
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Page;
