import fs from "fs";
import matter from "gray-matter";
import path from "path";

// fetches all posts from /posts directory
export default async function getAllPosts() {
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
    });

  return {
    props: { posts },
  };
}
