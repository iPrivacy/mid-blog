import Image from "next/image";
import urlFor from "@/lib/urlFor";
import category from "@/schemas/category";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

// "--mid-whitesmoke": "#f5f5f5",
// "--mid-black": "#000000",
// "--mid-yellow": "#f6c324",
// "--mid-purple": "#4d0679",
// "--mid-white": "#fcfcfc",
function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#4d0679] mb-16 animate-pulse duration-1000 ease-in-out" />
      <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className=" flex flex-col group shadow-md rounded-b shadow-[#4d067938] p-5 font-mono">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  // helper function urlFor converts image url to a more representable one
                  //
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                {/* <div className="absolute bottom-0 w-full  bg-[#4d0679] drop-shadow-sm text-white p-5 flex justify-between">
                  <p className="font-bold">{post.title}</p>
                  {/* <p>
                    {new Date(post._createdAt).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p> 
                </div> */}
                <div className=" flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className=" bg-[#4d0679] text-center text-[#f5f5f5] px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-[#4d0679] text-lg font-bold font-mono uppercase">
                  {post.title}
                </p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              <div className="flex flex-row justify-between mt-5 items-center">
                <p className=" font-bold flex items-center text-[#4d0679]">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
                <p className="text-[#4d0679] font-mono uppercase">
                  {new Date(post._createdAt).toLocaleDateString("en-ZA", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
