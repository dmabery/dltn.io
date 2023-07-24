import Link from "next/link";

const PostList = (props) => {
  return (
    <div className="mb-4 text-bodyText">
      <div className="text-2xl font-bold">
        <Link href={props.slug}>
          <a>{props.title}</a>
        </Link>
      </div>
      <div>{props.description}</div>
    </div>
  );
};
export default PostList;
