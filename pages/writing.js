import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostCard from "../components/PostCard";
import { getAllByNotType } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllByNotType("Book Notes");

  console.log(data);
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

const Writing = ({ posts }) => (
  <>
    <Meta
      title="Writing"
      description="A codex of my personal journey to understand the world."
    />
    <PageTitle
      title="Writing"
      description="A codex of my personal journey to understand the world."
    />
    <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
      {posts.map((post, index) => (
        <PostCard
          title={post.title}
          description={post.description}
          date={post.date}
          type={post.type}
          slug={`/posts/${post.slug}`}
          key={post.id}
          image={post.image}
        />
      ))}
    </div>
  </>
);

export default Writing;
