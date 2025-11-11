"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    author: "Tommy Eagen",
    authorImage: "/profile_pic.jpeg",
  });

  const onDataChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onDataSubmitHandeler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImage", data.authorImage);
    formData.append("image", image);

    const respons = await axios.post("/api/blog", formData);

    if (respons.data.success) {
      toast.success(respons.data.msg);
      setImage(false);

      setData({
        title: "",
        description: "",
        category: "",
        author: "Tommy Eagen",
        authorImage: "/profile_pic.jpeg",
      });
    } else {
      toast.error("Error");
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
                src={URL.createObjectURL(image)}
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
          name="title"
          onChange={onDataChangeHandeler}
          value={data.title}
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
          name="description"
          value={data.description}
          onChange={onDataChangeHandeler}
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
          value={data.category}
          onChange={onDataChangeHandeler}
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
          onClick={onDataSubmitHandeler}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Page;
