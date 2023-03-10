import { previewData } from "next/headers"
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from '../../components/PreviewSuspense'
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export default async function HomePage() {
  if (previewData()){
    return (
      <PreviewSuspense 
      fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#4d0679]">Loading Preview Data...</p>
        </div>
      }>
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);
  console.log("The posts:" + posts);
  

  return (
    <BlogList posts={posts}/>
  );
}


