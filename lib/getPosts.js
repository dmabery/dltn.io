import fs from "fs";
import matter from "gray-matter";
import path from "path";

// fetches all posts from /posts directory
export async function getAllPosts() {
  const files = fs.readdirSync("posts");
  const postsDirectory = "posts";

  const posts = files
    .filter((fileName) => {
      // Check if the item is a file and not a directory
      const filePath = path.join(postsDirectory, fileName);
      return fs.statSync(filePath).isFile();
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
    })
    .sort(
      (a, b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date)
    );

  return posts;
}

export async function getTags() {
  const posts = await getAllPosts();
  const allTags = posts.map(({ frontmatter: { Tags } }) => Tags).flat();
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
