import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getAllTags, getPostsByTag } from "../../lib/service";

const unslugify = (slug) =>
  slug
    .replace(/\-/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );
export async function getStaticProps({ params }) {
  const posts = await getPostsByTag(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
    revalidate: 60,
  };
}

export const getStaticPaths = async () => {
  const tags = await getAllTags(100);
  const paths = tags.map((tag) => ({ params: { tag: tag } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default function TagPage({ posts, tag }) {
  const tagg = unslugify(tag);
  return (
    <div className="border bg-white border-black p-5">
      <Meta
        title={tagg}
        description="A codex of my personal journey to understand the world."
      />
      <PageTitle description={`All posts tagged with ${tagg}`} />
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
}
