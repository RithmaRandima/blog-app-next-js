import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // fixed import

const BlogItem = ({ item }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000]">
      <Link href={`/blogs/${item.id}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white">
        {item.category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg tracking-tight font-medium text-gray-900">
          {item.title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {item.description}
        </p>
        <Link href={`/blogs/${item.id}`}>
          <div className="inline-flex items-center py-2 font-semibold text-center">
            read more <FaArrowRight className="pt-1 ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
