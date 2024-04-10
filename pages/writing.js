import ImageWithCaption from "../components/ImageWithCaption";
import Meta from "../components/Meta";
import PostListSimple from "../components/PostListSimple";
import { getPosts } from "../lib/service";

export const getStaticProps = async () => {
  const posts = await getPosts(1000); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

const Writing = ({ posts }) => (
  <div>
    <Meta
      title="Writing"
      description="A codex of my personal journey to understand the world."
    />
    <ImageWithCaption
      src="https://res.cloudinary.com/dde1q4ekv/image/upload/v1694125376/Gustave-Caillebotte-Portrait-of-a-Man-Writing-in-His-Study_kakq4v.jpg"
      caption="Portrait of a Man Writing in His Study. Gustave Caillebotte - Oil On Canvas - 1885."
    />
    <div className="mt-5">
      {posts.map((post, index) => (
        <PostListSimple
          title={post.title}
          date={post.date}
          slug={`posts/${post.slug}`}
          key={post.id}
        />
      ))}
    </div>
  </div>
);

export default Writing;
