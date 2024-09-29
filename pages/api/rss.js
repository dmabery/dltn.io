import { Feed } from "feed";
import { getAllPosts } from "../../lib/getMarkdownFiles"; // Adjust the import path as needed

const generateRssFeed = (posts) => {
  const feed = new Feed({
    title: "dltn.io",
    description: "A personal blog about books, history, and the law.",
    id: "http://dltn.io",
    link: "http://dltn.io",
    language: "en",
    image: "http://dltn.io/favicon3.png",  // Absolute URL to the image
    favicon: "http://dltn.io/favicon.png",
    author: {
      name: "Dalton Mabery",
      email: "maberydalton@gmail.com",
      link: "http://dltn.io/about",
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `http://dltn.io/posts/${post.slug}`, // Ensure absolute link
      description: post.description,
      content: post.content,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

export default async function handler(req, res) {
  try {
    const posts = await getAllPosts();

    const rss = generateRssFeed(posts);

    // Set the response headers to serve an XML file
    res.setHeader("Content-Type", "application/rss+xml");
    res.status(200).send(rss);
  } catch (error) {
    console.error("Failed to generate RSS feed:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
