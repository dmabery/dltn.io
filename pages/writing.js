import ImageWithCaption from "../components/ImageWithCaption";
import Meta from "../components/Meta";
import PostList from "../components/PostList";
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
    <ImageWithCaption
      src="https://res.cloudinary.com/dde1q4ekv/image/upload/v1694125376/Gustave-Caillebotte-Portrait-of-a-Man-Writing-in-His-Study_kakq4v.jpg"
      caption="Portrait of a Man Writing in His Study. Gustave Caillebotte - Oil On Canvas - 1885."
    />
    <div className="mt-7 flex flex-col gap-6">
      {posts.map((post, index) => (
        <PostList
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
