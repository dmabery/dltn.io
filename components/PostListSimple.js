import Link from "next/link";

const PostListSimple = (props) => (
  <div className="gap-4 mb-2 flex items-baseline font-sansSerif">
    <div className="hidden min-w-[82px] text-neutral-800/75 md:inline">
      {props.date.slice(0,4)} <span className="text-sm">•</span> {props.date.slice(5,7)}
    </div>
    <div className="underline hover:text-[#003EDB]">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
