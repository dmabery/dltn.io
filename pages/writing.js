import ImageWithCaption from "../components/ImageWithCaption";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostListSimple from "../components/PostListSimple";
import { getAllPosts } from "../lib/getMarkdownFiles";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts},
  }};

const Writing = ({ posts }) => (
  <>
    <Meta
      title="Writing"
      description="A codex of my personal journey to understand the world."
    />
    <PageTitle title="Writing" />
    <ImageWithCaption
      src="https://res.cloudinary.com/dde1q4ekv/image/upload/v1694125376/Gustave-Caillebotte-Portrait-of-a-Man-Writing-in-His-Study_kakq4v.jpg"
      caption="Portrait of a Man Writing in His Study. Gustave Caillebotte - Oil On Canvas - 1885."
    />
    <div className="mt-5">
      {posts.map((post) => (
        <PostListSimple
          title={post.title}
          date={post.date}
          slug={`posts/${post.slug}`}
          key={post.slug}
        />
      ))}
    </div>
  </>
);

export default Writing;
