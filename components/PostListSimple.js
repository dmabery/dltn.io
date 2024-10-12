import Link from "next/link";

const PostListSimple = (props) => (
  <div className="mb-2 gap-3 flex items-center text-md font-sansSerif">
    <div className="hidden w-[100px] min-w-[55px] shrink-0 text-gray-600 md:inline">
      {props.date}
    </div>
    <div className="underline text-[#003EDB]">
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
