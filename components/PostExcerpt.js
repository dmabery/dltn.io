import Link from "next/link";

const PostExcerpt = ({ title, description, date, tags, slug }) => {
  return (
    <>
      <div className="font-sansSerif text-bodyText">
        <div>
          <Link href={`/posts/${slug}`} className="text-2xl font-medium">
            {title || ""}
          </Link>
          <div className="tags flex gap-2 py-2 text-sm text-[#868686]">
            <div>{date}</div>
            <div>-</div>
            {tags
              ? tags.map((tag) => {
                  return (
                    <div>
                      <Link href={`/tags/${tag}`} legacyBehavior>
                        {tag}
                      </Link>
                    </div>
                  );
                })
              : "error"}
          </div>
        </div>
        <div>{description}</div>
      </div>
    </>
  );
};

export default PostExcerpt;
