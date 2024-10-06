import Link from "next/link";

const PostListSimple = (props) => (
  <div className="mb-3 gap-4 flex items-center text-md font-sansSerif">
    <div className="hidden shrink-0 text-neutral-200/90 md:inline">
      {props.date.slice(0,4)} <span className="text-sm">•</span> {props.date.slice(5,7)}
    </div>
    <div className="underline hover:text-blue">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
