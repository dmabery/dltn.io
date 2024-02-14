import fs from "fs";
import matter from "gray-matter";
import path from "path";

// fetches all posts from /posts directory
export async function getAllPosts() {
  const files = fs.readdirSync("posts");
  const postsDirectory = "posts";

  const rawPosts = files
    .filter((fileName) => {
      // Ignore the .DS_Store file
      return (
        fileName !== ".DS_Store" &&
        // Check if the item is a file and not a directory
        fs.statSync(path.join(postsDirectory, fileName)).isFile()
      );
    })
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8"
      );
      const { data: frontmatter, content } = matter(readFile);

      return {
        slug,
        frontmatter,
        content,
      };
    });

    const posts = rawPosts.sort(
      (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
    );

  return posts;
}

export async function getTags() {
  const posts = await getAllPosts();

  // Extract all tags from posts and filter out undefined values
  const allTags = posts
    .map(({ frontmatter: { Tags } }) => Tags)
    .flat()
    .filter((tag) => tag !== undefined);

  // Create a set of unique tags
  const tagSet = Array.from(new Set(allTags));

  return tagSet;
}

export async function getLatestPost() {
  const posts = await getAllPosts();
  const latestPost = posts.slice(0, 1);
  return { props: { post: latestPost } };
}

export async function getPostsByTags(tagToFilter) {
  const posts = await getAllPosts();
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.Tags.includes(tagToFilter)
  );
  return filteredPosts;
}

export async function getPosts() {
  const posts = await getAllPosts();
  return { props: { posts } };
}
