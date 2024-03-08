import Link from "next/link";

const PostList = (props) => {
  return (
    <div className="mb-4 font-sansSerif text-bodyText">
      <div className="text-xl font-medium hover:underline">
        <Link href={props.slug} legacyBehavior>{props.title}</Link>
      </div>
      <div className="text-sm">{props.description}</div>
    </div>
  );
};
export default PostList;
