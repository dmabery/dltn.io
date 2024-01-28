import ImageWithCaption from "../components/ImageWithCaption";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostListSimple from "../components/PostListSimple";
import { getPosts } from "../lib/getPosts";

export const getStaticProps = async () => {
  return getPosts();
};

const Writing = ({ posts }) => (
  <div className="border border-black bg-white p-5">
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
      {posts.map((post, index) => (
        <PostListSimple
          title={post.frontmatter.Title}
          date={post.frontmatter.Date}
          slug={`/posts/${post.slug}`}
          key={post.id}
        />
      ))}
    </div>
  </div>
);

export default Writing;
