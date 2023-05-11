import Meta from "../components/Meta";
import PostList from "../components/PostList";
import Subscribe from "../components/Subscribe";
import { getAllByTags } from "./api/notion";

export const getStaticProps = async ({ params }) => {
  const data = await getAllByTags("221b");
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

const Newsletter = ({ posts }) => (
  <>
    <Meta
      title="221b Newsletter"
      description="Because you don't need another newsletter about current events."
      image="https://res.cloudinary.com/dde1q4ekv/image/upload/v1676037429/og_image_danl2q.png"
    />
    <div className="grid max-w-screen-md grid-cols-1 gap-10 md:grid-cols-2">
      <div className="prose col-span-2">
        <h2 className="text-3xl text-[#0C2059]">The 221b Newsletter</h2>
        <p>
          Every Friday, I send an email with unique insights, interesting
          stories from history, and other cool stuff I find online.
        </p>
        <p>
          Subscribers have already learned about...
          <ul>
            <li>Thomas Edison&apos;s insane job applications</li>
            <li>Why Winston Churchill demanded brevity from his staff</li>
            <li>
              Why the first detectives were nicknamed "The Devil&apos;s
              Disciples"
            </li>
          </ul>
          And more. Subscribe below.
        </p>
        <Subscribe />
      </div>
      <div className="prose col-span-2 prose-a:text-blue-700">
        <h2>Previous editions:</h2>
        {posts.map((post, index) => (
          <PostList
            title={post.title}
            description={post.description}
            date={post.date}
            type={post.type}
            slug={`/posts/${post.slug}`}
            key={post.id}
          />
        ))}
      </div>
    </div>
  </>
);

export default Newsletter;
