import Link from "next/link";

const PostListSimple = (props) => (
  <div className="items-top flex gap-3">
    <div className="mb-2 text-xl leading-tight underline hover:no-underline">
      <Link href={`/${props.slug}`} legacyBehavior>{props.title}</Link>
    </div>
  </div>
);

export default PostListSimple;
