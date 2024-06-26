import Meta from "../../components/Meta";
import PostDisplay from "../../components/PostDisplay";
import { getPostBySlug, getPosts } from "../../lib/service";

export const getStaticPaths = async () => {
  const posts = await getPosts(1000); // retrieve first 100 posts

  return {
    paths: posts.map((post) => `/posts/${post.slug}`),
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
    revalidate: 60,
  };
}

const BlogPost = ({ post }) => {
  return (
    <>
      <section>
        <Meta
          title={post.title}
          description={post.excerpt}
          image={post.featuredImage?.node.sourceUrl}
        />
        <PostDisplay
          date={post.date}
          tags={post.tags.edges.map((edge) => edge.node.name)}
          category={post.categories.edges.map((edge) => edge.node.name)}
          title={post.title}
          description={post.excerpt}
          content={post.content}
          image={post.featuredImage?.node.sourceUrl}
        />
      </section>
    </>
  );
};

export default BlogPost;
