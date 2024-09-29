/* eslint-disable react/no-unescaped-entities */
import { Feed } from "feed";
import { getAllPosts } from "../lib/getMarkdownFiles";

const generateRssFeed = async (posts) => {
  const feed = new Feed({
    title: "dltn.io",
    description: "A person blog about books, history, and the law.",
    id: "http://dltn.io",
    link: "http://dltn.io",
    language: "en",
    image: "/favicon 3.png",
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
      link: `posts/${post.slug}`,
      description: post.description,
      content: post.content,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }) {
  const posts = await getAllPosts();

  const rss = await generateRssFeed(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {} };
}

export default Rss;
