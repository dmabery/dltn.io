import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getAllPosts, getTags } from "../../lib/getMarkdownFiles";

export const getStaticProps = async ({ params }) => {
  const posts = await getAllPosts();

  console.log(posts[0])

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

function checkSource(source, slug) {
  if (source === "WordPress") {
    return `stream/${slug}`;
  } else {
    return `posts/${slug}`;
  }
}
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
            slug={checkSource(post.source, post.slug)}
          />
        ))}
      </div>
    </div>
  </>
);
export default TagPage;
