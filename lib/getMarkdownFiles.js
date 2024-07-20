import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Standardize tags function
function standardizeTags(tags) {
  if (Array.isArray(tags)) {
    return tags.map(tag => ({ id: tag.toLowerCase(), name: tag.toLowerCase() }));
  } else if (typeof tags === 'string') {
    return tags.split(',').map(tag => ({ id: tag.trim().toLowerCase(), name: tag.trim().toLowerCase() }));
  }
  return [];
}

// Extract title and tags from plain markdown content
function extractFromPlainMarkdown(content) {
  const lines = content.split('\n');
  let title = '';
  let tags = [];
  let contentStartIndex = 0;

  // Extract title from the first H1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ')) {
      title = lines[i].replace('# ', '').trim();
      contentStartIndex = i + 1;
      break;
    }
  }

  // Extract tags from the lines starting with `#`
  const tagLines = lines.filter(line => line.startsWith('#') && !line.startsWith('# '));
  if (tagLines.length > 0) {
    const tagLine = tagLines.join(' ');
    tags = tagLine.match(/#\w+/g).map(tag => tag.replace('#', ''));
    contentStartIndex = Math.max(contentStartIndex, lines.indexOf(tagLines[tagLines.length - 1]) + 1);
  }

  const newContent = lines.slice(contentStartIndex).join('\n');

  return { title, tags: standardizeTags(tags), content: newContent };
}

// Extract date and slug from filename
function extractDateAndSlug(fileName) {
  const dateSlugRegex = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
  const match = fileName.match(dateSlugRegex);
  if (match) {
    const [_, date, slug] = match;
    return { date: new Date(date).toISOString(), slug };
  }
  return { date: new Date().toISOString(), slug: fileName.replace(".md", "") };
}

// Fetch all posts from /posts directory
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
      const { date, slug } = extractDateAndSlug(fileName);
      const readFile = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8"
      );
      const { data: frontmatter, content } = matter(readFile);

      let title = frontmatter.Title || '';
      let tags = [];
      let finalContent = content;
      if (frontmatter.Tags) {
        tags = standardizeTags(frontmatter.Tags);
      } else if (frontmatter.tags) {
        tags = standardizeTags(frontmatter.tags);
      } else if (!title) {
        // Handle plain markdown file without front matter
        const extracted = extractFromPlainMarkdown(content);
        title = extracted.title || 'Untitled Post';
        tags = extracted.tags;
        finalContent = extracted.content;
      }

      return {
        slug: slug,
        title: title || 'Untitled Post', // Provide a default title if undefined
        content: finalContent,
        date: frontmatter.Date ? new Date(frontmatter.Date).toISOString() : date,
        excerpt: frontmatter.Description || finalContent.slice(0, 150) + '...', // Create an excerpt if not provided
        featuredImage: frontmatter.Image || null,
        tags: tags,
        source: 'Markdown'
      };
    });

  const posts = rawPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return posts;
}

// Function to get all unique tags
export async function getTags() {
  const posts = await getAllPosts();

  // Extract all tags from each post
  const allTags = posts.flatMap(post => post.tags.map(tag => tag.name)).filter(tag => tag !== undefined);

  // Create a set of unique tag names
  const uniqueTagNames = [...new Set(allTags)];

  return uniqueTagNames;
}

// Function to get posts by tag
export async function getPostsByTags(tagToFilter) {
  const posts = await getAllPosts();

  const filteredPosts = posts.filter(post =>
    // Check if any tag's name matches tagToFilter
    post.tags.some(tag => tag.name === tagToFilter)
  );

  return filteredPosts;
}

// Fetch all quotes from /links directory
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
