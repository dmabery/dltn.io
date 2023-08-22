import Link from "next/link";

const PostList = (props) => {
  return (
    <div className="mb-4 font-sansSerif text-bodyText">
      <div className="text-2xl font-bold">
        <Link href={props.slug}>{props.title}</Link>
      </div>
      <div>{props.description}</div>
    </div>
  );
};
export default PostList;
