import Link from "next/link";
import LegalHistoryBanner from "../components/LegalHistoryBanner";
import Meta from "../components/Meta";
import { getAllPosts } from "../lib/getMarkdownFiles";
import { getLegalHistoryForToday } from "../lib/legalHistory";
import generateRssFeed from "../utils/rss";

const RECENT_POST_COUNT = 8;

const BLOGROLL = [
  { title: "Shtetl-Optimized", href: "https://scottaaronson.blog/" },
  { title: "Marginal Revolution", href: "https://marginalrevolution.com/" },
  { title: "SCOTUSblog", href: "https://www.scotusblog.com/" },
];

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  generateRssFeed(posts);

  const categoryCounts = {};
  const archiveCounts = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      categoryCounts[tag.name] = (categoryCounts[tag.name] || 0) + 1;
    });
    const year = new Date(post.date).getFullYear();
    archiveCounts[year] = (archiveCounts[year] || 0) + 1;
  });

  const categories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const archives = Object.entries(archiveCounts).sort((a, b) => b[0] - a[0]);

  return {
    props: {
      posts: posts.slice(0, RECENT_POST_COUNT),
      categories,
      archives,
      legalHistoryEvent: getLegalHistoryForToday(),
    },
    // Regenerate periodically so the banner rolls over to the next day
    // without waiting on a new deploy.
    revalidate: 3600,
  };
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home({ posts, categories, archives, legalHistoryEvent }) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <Meta
        title="Dalton Mabery is a law student who reads and writes."
        description="Law and history nerd. Writer."
      />
      <LegalHistoryBanner event={legalHistoryEvent} />
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="min-w-0 flex-1">
          {posts.map((post, i) => (
            <div key={post.slug}>
              <div className="text-[17px] font-medium leading-snug">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </div>
              <div className="my-1 text-[11.5px] text-[#555]">
                {formatDate(post.date)}
              </div>
              <p className="mb-2 text-[13px] leading-[1.65]">
                {post.excerpt}
              </p>
              <div
                className={`text-[11.5px] text-[#555] ${
                  i < posts.length - 1
                    ? "mb-3 border-b border-dotted border-[#999] pb-3"
                    : ""
                }`}
              >
                {post.tags.length > 0 && (
                  <>
                    Posted in{" "}
                    {post.tags.map((tag, ti) => (
                      <span key={tag.id}>
                        {ti > 0 && ", "}
                        <Link href={`/tags/${tag.name}`}>{tag.name}</Link>
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
          <div className="mt-2 text-center text-[12px]">
            <Link href="/writing">&laquo; Older Entries</Link>
          </div>
        </div>

        <div className="w-full shrink-0 text-[11.5px] leading-[1.7] md:w-[150px] md:border-l md:border-[#ccc] md:pl-4">
          <div className="mb-0.5 text-[12px] font-medium">About</div>
          <div className="mb-2.5 text-[#333]">
            Second-year law student. I write about what I learn studying the
            law and reading history.
          </div>

          <div className="mb-0.5 text-[12px] font-medium">Categories</div>
          <div className="mb-2.5">
            {categories.map(([name, count]) => (
              <Link href={`/tags/${name}`} className="block" key={name}>
                {name[0].toUpperCase() + name.slice(1)} ({count})
              </Link>
            ))}
          </div>

          <div className="mb-0.5 text-[12px] font-medium">Archives</div>
          <div className="mb-2.5">
            {archives.map(([year, count]) => (
              <Link href="/writing" className="block" key={year}>
                {year} ({count})
              </Link>
            ))}
          </div>

          <div className="mb-0.5 text-[12px] font-medium">Blogroll</div>
          <div>
            {BLOGROLL.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block"
                key={link.href}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
