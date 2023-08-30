import Link from "next/link";

const PostListSimple = (props) => (
  <div className="mb-1 flex items-center font-sansSerif">
    <div className="w-24 shrink-0 text-sm text-neutral-800">{props.date}</div>
    <div className="underline hover:no-underline">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
