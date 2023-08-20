import Link from "next/link";

const PostListSimple = (props) => (
  <div>
    <div className="mt-1 font-heading text-neutral-300">
      <span className="mr-2 text-neutral-500">{props.date}</span>
      <Link href={`/posts/${props.slug}`} legacyBehavior>{props.title || ""}</Link>
    </div>
  </div>
);

export default PostListSimple;
