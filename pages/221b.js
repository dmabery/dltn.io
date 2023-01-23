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
            <Meta title="221b Newsletter" description="Because you don't need another newsletter about current events." image="https://res.cloudinary.com/dde1q4ekv/image/upload/v1673009568/221b_OG_Image_n06pxn.png" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md">
                <div className="prose">
                    <h2>The 221b Newsletter</h2>
                    <p>Every Friday, I write an email that shares five interesting things I discovered that week. It&apos;s an anthology of ideas from history, science, philosophy, programming, writing, reading, and more.</p>
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
                <div className="prose prose-a:text-blue-700">
                    <h2>Previous editions:</h2>
                        {posts.map((post, index) => (
                            <PostList title={post.title} description={post.description} date={post.date} type={post.type} slug={`/posts/${post.slug}`} key={post.id}/>
                         ))}
                </div>
                <div className="prose">
                    <h2>What people are saying:</h2>
                    <p>&quot;Superb...completely loved it!&quot;</p>
                    <p>&quot;Love it all!&quot;</p>
                    
                </div>
            </div>
        </>
    )
}


export default Newsletter;
