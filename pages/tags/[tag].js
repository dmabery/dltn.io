import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getAllTags, getPostsByTag } from "../../lib/service";

export async function getStaticProps({ params }) {
  const posts = await getPostsByTag(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
    revalidate: 3600,
  };
}

export const getStaticPaths = async () => {
  const tags = await getAllTags(100);
  const paths = tags.map((tag) => ({ params: { tag: tag } }));
  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};

const TagPage = ({ posts, tag }) => (
  <div className="border border-black bg-white p-5">
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
            date={post.date}
            slug={`posts/${post.slug}`}
          />
        ))}
      </div>
    </div>
  </div>
);
export default TagPage;
