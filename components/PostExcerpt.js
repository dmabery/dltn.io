import Link from "next/link";

const PostExcerpt = ({ title, description, date, tags, slug }) => {
  return <>
    <div className="text-neutral-200">
      <div>
        <Link href={`/posts/${slug}`} className="font-heading text-2xl font-medium">
          {title || ""}
        </Link>
        <div className="tags flex gap-2 py-2 font-heading text-sm text-[#868686]">
          <div>{date}</div>
          <div>-</div>
          {tags
            ? tags.map((tag) => {
                return (
                  <div>
                    <Link href={`/tags/${tag}`} legacyBehavior>{tag}</Link>
                  </div>
                );
              })
            : "error"}
        </div>
      </div>
      <div className="mt-3">{description}</div>
    </div>
  </>;
};

export default PostExcerpt;
