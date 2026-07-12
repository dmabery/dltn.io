import Link from "next/link";

const PostListSimple = (props) => (
  <div className="mb-2 flex items-center gap-3 text-[13.5px]">
    <div className="hidden w-[100px] min-w-[55px] shrink-0 text-[#555] md:inline">
      {props.date}
    </div>
    <div>
      <Link href={`/${props.slug}`}>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
