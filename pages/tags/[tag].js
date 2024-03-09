import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getPostsByTags, getTags } from "../../lib/getMarkdownFiles";

export const getStaticProps = async ({ params }) => {
  const posts = await getPostsByTags(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
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
        {posts.map((post) => (
          <PostListSimple
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  </>
);
export default TagPage;
