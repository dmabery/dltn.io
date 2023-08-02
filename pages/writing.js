import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostListSimple from "../components/PostListSimple";
import { getAllByNotType } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllByNotType("Book Notes");
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
    <div className="mt-7 flex flex-col gap-1">
      {posts.map((post, index) => (
        <PostListSimple
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
