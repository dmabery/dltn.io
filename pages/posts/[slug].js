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
  const postIndex = posts.findIndex((post) => post.slug === slug);

  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const post = posts[postIndex];
  // posts are sorted newest first, so the "next" post chronologically is the previous array entry
  const newerPost = posts[postIndex - 1] || null;
  const olderPost = posts[postIndex + 1] || null;

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
      prevPost: olderPost ? { slug: olderPost.slug, title: olderPost.title } : null,
      nextPost: newerPost ? { slug: newerPost.slug, title: newerPost.title } : null,
    },
  };
}

const BlogPost = ({ frontmatter, content, prevPost, nextPost }) => {
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
          prevPost={prevPost}
          nextPost={nextPost}
        />
      </section>
    </>
  );
};

export default BlogPost;
