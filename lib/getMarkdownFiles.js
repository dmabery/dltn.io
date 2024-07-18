import fs from "fs";
import matter from "gray-matter";
import path from "path";

// fetches all posts from /posts directory
export async function getAllPosts() {
  const files = fs.readdirSync("words/posts");
  const postsDirectory = "words/posts";

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
        slug: slug,
        title: frontmatter.Title || 'Untitled Post', // Provide a default title if undefined
        content: content,
        date: new Date(frontmatter.Date).toISOString(),
        excerpt: frontmatter.Description || content.slice(0, 150) + '...', // Create an excerpt if not provided
        featuredImage: frontmatter.Image || null,
        tags: frontmatter.Tags ? frontmatter.Tags.map(tag => ({ id: tag, name: tag })) : [],
        source: 'Markdown'
      };
    });

    const posts = rawPosts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

  return posts;
}

export async function getTags() {
  const posts = await getAllPosts();

  // Extract all tags from each post
  const allTags = posts.flatMap(post => post.tags.map(tag => tag.name)).filter(tag => tag !== undefined);

  // Create a set of unique tag names
  const uniqueTagNames = [...new Set(allTags)];

  return uniqueTagNames;
}


export async function getLatestPost() {
  const posts = await getAllPosts();
  const latestPost = posts.slice(0, 1);
  return { props: { post: latestPost } };
}

export async function getPostsByTags(tagToFilter) {
  const posts = await getAllPosts();

  const filteredPosts = posts.filter(post =>
    // Check if any tag's name matches tagToFilter
    post.tags.some(tag => tag.name === tagToFilter)
  );

  return filteredPosts;
}


export async function getAllQuotes() {
  const files = fs.readdirSync("words/links");
  const postsDirectory = "words/links";

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
        title: frontmatter.Title || 'Untitled Post', // Provide a default title if undefined
        content: content,
        date: new Date(frontmatter.Date).toISOString(),
        source: 'Markdown',
        link: frontmatter.Link || null
      };
    });

    const posts = rawPosts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

  return posts;
}