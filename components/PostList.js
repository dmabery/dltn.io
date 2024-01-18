import Link from "next/link";

const PostList = (props) => {
  return (
    <div className="mb-1 font-sansSerif text-bodyText">
      <div className="text-xl">
        <Link href={props.slug}>
          <a>{props.title}</a>
        </Link>
      </div>
      <div className="font-serif">{props.description}</div>
    </div>
  );
};
export default PostList;
