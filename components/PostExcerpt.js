import Link from "next/link";

const PostExcerpt = ({ title, description, date, tags, slug }) => {
  return <>
    <div className="flex flex-col gap-1 font-sansSerif text-bodyText">
      <Link
        href={`/posts/${slug}`}
        className="text-2xl font-medium hover:underline"
        legacyBehavior>
        {title || ""}
      </Link>
      <div className="tags flex gap-1 py-2 text-sm text-[#868686]">
        <div>{date}</div>
      </div>
      <div className="text-gray-700">{description}</div>
    </div>
  </>;
};

export default PostExcerpt;
