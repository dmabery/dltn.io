import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostList from "../../components/PostList";
import { getPostsByTags, getTags } from "../../lib/getPosts";

export const getStaticProps = async ({ params }) => {
  const data = await getPostsByTags(params.tag);
  return {
    props: {
      posts: data,
      tag: params.tag,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const tags = await getTags();
  const paths = tags.map((tags) => ({ params: { tag: tags } }));
  return {
    paths,
    fallback: "blocking",
  };
};

const TagPage = ({ posts, tag }) => (
  <>
    <Meta
      title={tag}
      description="A codex of my personal journey to understand the world."
    />
    <PageTitle title={tag} description={`All posts tagged with ${tag}`} />
    <div className="mt-7 flex flex-row gap-6">
      <div>
        {posts.map((post, index) => (
          <PostList
            title={post.frontmatter.Title}
            description={post.frontmatter.Description}
            date={post.frontmatter.Date}
            slug={`/posts/${post.frontmatter.Slug}`}
            key={post.frontmatter.Title}
          />
        ))}
      </div>
    </div>
  </>
);
export default TagPage;
