import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <h1>Blogger</h1>
        <button className="flex items-center justify-center gap-1 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px]">
          Get Started <FaArrowRight />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs     sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sequi!
          Iste inventore natus optio!
        </p>
        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10
          border border-black shadow-[-7px_7px_0px]"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 flex-1 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-black active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
