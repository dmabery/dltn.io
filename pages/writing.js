import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostListSimple from "../components/PostListSimple";
import { getPosts } from "../lib/getPosts";

export const getStaticProps = async () => {
  return getPosts();
};

const Writing = ({ posts }) => (
  <>
    <Meta
      title="Writing"
      description="A codex of my personal journey to understand the world."
    />
    <PageTitle title="Writing" />
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
  </>
);

export default Writing;
