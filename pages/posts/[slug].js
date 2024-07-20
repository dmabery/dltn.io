import Meta from "../../components/Meta";
import PostDisplay from "../../components/PostDisplay";
import { getAllPosts } from "../../lib/getMarkdownFiles";

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Ensure tags are an array of strings
  const tags = post.tags.map(tag => tag.name);

  return {
    props: {
      frontmatter: {
        ...post,
        tags: tags, // Ensure tags are an array of strings
        date: post.date, // Ensure date is serialized as string
      },
      content: post.content,
    },
  };
}

const BlogPost = ({ frontmatter, content }) => {
  if (!frontmatter) return <h1>No posts</h1>;
  return (
    <>
      <section>
        <Meta
          title={frontmatter.title}
          description={frontmatter.excerpt}
          image={frontmatter.featuredImage}
        />
        <PostDisplay
          date={frontmatter.date.slice(0,10)}
          title={frontmatter.title}
          tags={frontmatter.tags} // Now an array of strings
          description={frontmatter.excerpt}
          content={content}
          image={frontmatter.featuredImage}
        />
      </section>
    </>
  );
};

export default BlogPost;
