import Link from "next/link";

const PostListSimple = (props) => (
  <div className="items-top flex mb-1">
    <div className="mb-2 text-xl text-slate-900 underline-offset-2 leading-tight underline hover:no-underline">
      <Link href={`/${props.slug}`} legacyBehavior>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
