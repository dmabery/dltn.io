import Link from "next/link";

const PostListSimple = (props) => (
  <div className="items-top flex gap-3">
    <div className="hidden w-24 shrink-0 font-sansSerif text-sm text-neutral-800 md:inline">
      {props.date.slice(0, 10)}
    </div>
    <div className="mb-2 text-[19px] leading-tight underline hover:no-underline">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
