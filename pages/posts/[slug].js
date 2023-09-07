import HomePagePostDisplay from "../../components/HomePagePostDisplay";
import Meta from "../../components/Meta";

import fs from "fs";
import matter from "gray-matter";

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync("posts");

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}
const BlogPost = ({ frontmatter, content }) => {
  if (!frontmatter) return <h1>No posts</h1>;
  return (
    <section>
      <Meta
        title={frontmatter.Title}
        description={frontmatter.Description}
        image={frontmatter.Image}
      />
      <HomePagePostDisplay
        date={frontmatter.Date}
        title={frontmatter.Title}
        tags={frontmatter.Tags}
        description={frontmatter.Description}
        content={content}
        image={frontmatter.Image}
      />
    </section>
  );
};

export default BlogPost;
