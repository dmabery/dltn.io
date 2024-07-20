import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getPostsByTags, getTags } from "../../lib/getMarkdownFiles";

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
  <div>
    <Meta
      title={tag}
      description="A codex of my personal journey to understand the world."
    />
    <PageTitle title={tag} description={`All posts tagged with ${tag}`} />
    <div className="mt-7 flex flex-row">
      <div>
        {posts.map((post) => (
          <PostListSimple
            title={post.title}
            slug={`posts/${post.slug}`}
            date={post.date.slice(0,10)}
          />
        ))}
      </div>
    </div>
  </div>
);
export default TagPage;
