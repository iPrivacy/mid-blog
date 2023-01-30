import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

// Making app faster using nextjs features
// we will be having the pages loaded as static pages then we will 
// include a revalidate line of code to update our app on production environment
// every minute

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{slug}`

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug)=>slug.slug.current)

  return slugRoutes.map((slug)=>({
    slug, // short hand for slug: slug
  }))
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
    }`;

  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="px-10 pb-28 text-gray-600">
      <section className="space-y-2 text-[#4d0679]">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          {/* <div className=" absolute top-0 w-full h-full opacity-5 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div> */}

          <section className="p-5 bg-[#ffffff] shadow-md shadow-[#4d067938] rounded-b-lg mb-16 w-full">
            <div>
              <div className="uppercase">
                <h1 className="text-3xl font-extrabold font-mono tracking-wide">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-ZA", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center mt-3 space-x-2  text-[#4d0679] rounded-lg">
                <Image
                  className=" rounded-md bg-[#f6c324]"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={60}
                  width={60}
                />
                <div className="w-64">
                  <h3 className=" text-lg font-mono font-bold">
                    {post.author.name}
                  </h3>
                  <div>{/* Author Bio */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="static text-gray-400 font-semibold capitalize pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-[#4d0679] text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
