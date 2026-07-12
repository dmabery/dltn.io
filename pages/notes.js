import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import { getAllPosts } from "../lib/getMarkdownFiles";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const bookPosts = posts.filter((post) => post.type === "Book Notes");

  const byYear = {};
  bookPosts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(post);
  });

  const years = Object.keys(byYear)
    .sort((a, b) => b - a)
    .map((year) => ({ year, posts: byYear[year] }));

  return {
    props: { years, total: bookPosts.length },
  };
};

function splitTitleAuthor(title) {
  const cleaned = title.replace(/^Notes:\s*/i, "");
  const byIndex = cleaned.lastIndexOf(" by ");
  if (byIndex === -1) return { bookTitle: cleaned, author: null };
  return {
    bookTitle: cleaned.slice(0, byIndex),
    author: cleaned.slice(byIndex + 4),
  };
}

const NoteList = ({ years, total }) => (
  <>
    <Meta
      title="Book Notes"
      description="Notes, summaries, and lessons from books."
    />
    <div className="text-[20px] font-medium">The Bookshelf</div>
    <p className="mb-1 mt-1.5 text-[13px] leading-[1.7] text-[#222]">
      Notes, quotes, and reviews from my reading &mdash; mostly history,
      biography, and the occasional book about books. Click a cover for the
      notes.
    </p>
    <p className="mb-3.5 text-[11.5px] text-[#555]">
      Jump to:{" "}
      {years.map((y, i) => (
        <span key={y.year}>
          {i > 0 && " · "}
          <a href={`#${y.year}`}>{y.year}</a>
        </span>
      ))}
    </p>

    {years.map(({ year, posts }) => (
      <div key={year}>
        <div
          id={year}
          className="mb-2.5 border-b border-[#999] pb-0.5 text-[15px] font-medium"
        >
          {year}
        </div>
        <div className="mb-[18px] grid grid-cols-2 gap-3 sm:grid-cols-4">
          {posts.map((post) => {
            const { bookTitle, author } = splitTitleAuthor(post.title);
            return (
              <div className="text-center" key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <div className="inline-block border border-[#888] bg-white p-[3px]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={bookTitle}
                        width={78}
                        height={112}
                        className="h-[112px] w-[78px] object-cover"
                      />
                    ) : (
                      <div className="flex h-[112px] w-[78px] items-center justify-center bg-[#e6e3d8] p-1.5 text-[10px] italic leading-tight">
                        {bookTitle}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="mt-0.5 text-[11px] leading-[1.4]">
                  <Link href={`/posts/${post.slug}`}>{bookTitle}</Link>
                </div>
                {author && (
                  <div className="text-[10.5px] text-[#555]">{author}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ))}

    <div className="mt-3.5 border-t border-[#ccc] pt-2 text-center text-[11px] text-[#555]">
      {total} books and counting &middot; <a href="/rss.xml">Entries (RSS)</a>
    </div>
  </>
);

export default NoteList;
