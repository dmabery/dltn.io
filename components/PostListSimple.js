import Link from "next/link";

const PostListSimple = (props) => (
  <div className="mb-2 gap-3 flex items-center text-md font-sansSerif">
    <div className="hidden w-[82px] shrink-0 text-gray-600 md:inline">
      {props.date.slice(0,4)} <span className="text-gray-900/50 text-sm">•</span> {props.date.slice(5,7)}
    </div>
    <div className="underline hover:text-[#003EDB]">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
