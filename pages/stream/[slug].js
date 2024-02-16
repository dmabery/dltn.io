import Meta from "../../components/Meta";
import StreamPostDisplay from "../../components/StreamPostDisplay";
import { getStreams, getStreamsBySlug } from "../../lib/getWordPressFiles";

export const getStaticPaths = async () => {
  const posts = await getStreams(1000); // retrieve first 100 posts

  return {
    paths: posts.map((post) => `/stream/${post.slug}`),
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const post = await getStreamsBySlug(params.slug);

  return {
    props: { post },
    revalidate: 60,
  };
}

const Stream = ({ post }) => {
  return (
    <>
      <section>
        <Meta
          title={post.title}
          description={post.excerpt}
          image={post.featuredImage?.node.sourceUrl}
        />
        <StreamPostDisplay
          date={post.date}
          tags={post.tags}
          title={post.title}
          description={post.excerpt}
          content={post.content}
          image={post.featuredImage?.node.sourceUrl}
        />
      </section>
    </>
  );
};

export default Stream;
