import { getAllPosts } from "./getMarkdownFiles";
import { getStreams } from "./getWordPressFiles";

export async function getCombinedPosts() {
  // Fetch posts from WordPress
  const wordpressPosts = await getStreams();

  // Fetch posts from the filesystem (markdown)
  const markdownPosts = await getAllPosts();

  // Combine the posts from both sources
  const combinedPosts = [...wordpressPosts, ...markdownPosts];

  // Sort the combined posts by date, newest first
  combinedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return combinedPosts;
}

export async function getPostsByTags(tagToFilter, combinedPosts) {
  // Filter combinedPosts by tag
  const filteredPosts = combinedPosts.filter(post =>
    post.tags.some(tag => tag.name === tagToFilter)
  );

  return filteredPosts;
}

