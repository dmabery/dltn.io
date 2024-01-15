import FullPostDisplay from "../../components/FullPostDisplay";
import Meta from "../../components/Meta";
import { getAllPublished, getSingleBlogPostBySlug } from "../api/notion";

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

const BlogPost = ({ post }) => {
  if (!post) return <h1>No posts</h1>;
  return (
    <section>
      <Meta
        title={post.metadata.title}
        description={post.metadata.description}
        image={post.metadata.image}
      />
      <FullPostDisplay
        title={post.metadata.title}
        tags={post.metadata.tags}
        description={post.metadata.description}
        date={post.metadata.date}
        content={post.markdown}
        image={post.metadata.image}
      />
    </section>
  );
};

export default BlogPost;
