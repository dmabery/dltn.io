import Link from "next/link";

const PostListSimple = (props) => (
  <div className="items-top flex gap-3">
    <div className="hidden mr-2 shrink-0 font-sansSerif text-sm text-neutral-800 md:inline">
      {props.date}
    </div>
    <div className="mb-2.5 text-[20px] leading-tight underline decoration-1 hover:text-blue hover:no-underline">
      <Link href={`/${props.slug}`} legacyBehavior>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
