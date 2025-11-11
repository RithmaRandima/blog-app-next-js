import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/adminComponents/Sidebar";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h1>Admin Pannel</h1>
            <Image
              src={assets.profile_icon}
              alt="image"
              className="w-[50px] h-[50px] rounded-full "
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
