import fs from "fs";
import { marked } from "marked"; // Import marked to convert Markdown to HTML
import RSS from "rss";

export default async function generateRssFeed(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://dltn.io"
      : "http://localhost:3000";

  const feedOptions = {
    title: "dltn.io feed",
    author: "maberydalton@gmail.com | Dalton Mabery",
    description: "A personal blog about books, history, and the law.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: "favicon 3.png",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Loop through posts data and add to RSS feed
  allPosts.forEach((post) => {
    // Convert Markdown content to HTML
    const htmlContent = marked(post.content);

    feed.item({
      title: post.title,
      description: post.excerpt, // RSS uses description for post summary or excerpt
      url: `${site_url}/posts/${post.slug}`,
      date: post.date,
      custom_elements: [
        {
          "content:encoded": htmlContent, // Full HTML content
        },
      ],
    });
  });

  // Write the RSS feed to a file as XML
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
