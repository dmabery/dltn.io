import Image from "next/image";
import Meta from "../components/Meta";
import PostList from "../components/PostList";
import Subscribe from "../components/Subscribe";
import { getAllByTags } from "./api/notion";


export const getStaticProps = async ({ params }) => {
    const data = await getAllByTags('221b')
    return {
      props: {
        posts: data,
      },
      revalidate: 60
    };
  };

const Newsletter = ({ posts }) => {
    console.log(posts)
    return (
        <>
            <Meta title="221b Newsletter" description="Learn 5 new things every Friday." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-slate-100 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
                <div>
                    <h2>The 221b Newsletter</h2>
                    <p>Every Friday, I write an email that teaches you five new things. It&apos;s an anthology of ideas from history, science, philosophy, programming, writing, reading, and more.</p>
                    <p>You can subscribe below:</p>
                    <Subscribe />
                </div>
                <div className="hidden md:flex">
                    <Image 
                        src="/st.jerome.jpeg"
                        alt="St. Jerome in His Study"
                        width={930}
                        height={1200}
                     />
                </div>
                <div>
                    <h2>Previous editions:</h2>
                        {posts.map((post, index) => (
                            <PostList title={post.title} description={post.description} date={post.date} type={post.type} slug={`/posts/${post.slug}`} key={post.id}/>
                         ))}
                </div>
                <div>
                    <h2>What people are saying:</h2>
                    <p>&quot;Superb...completely loved it!&quot;</p>
                    <p>&quot;Love it all!&quot;</p>
                    
                </div>
            </div>
        </>
    )
}


export default Newsletter;
