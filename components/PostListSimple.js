import Link from "next/link";

const PostListSimple = (props) => (
  <div className="items-center flex gap-3 mb-2">
    <div className="hidden shrink-0 font-sansSerif text-sm text-neutral-800 md:inline">
      {`${props.date.slice(0, 4)} • ${props.date.slice(5, 7)}`}
    </div>
    <div className="text-[19px] leading-tight underline hover:no-underline">
      <Link href={`/${props.slug}`} legacyBehavior>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
