import Link from 'next/link';

const PostList = (props) => {
  function checkContentType() {
    if (props.type === 'Aside') {
      return { tag: 'thought' };
    }
    return { tag: 'essay' };
  }

  return (
    <div className="mb-4 flex flex-row items-start">
      <div className="mt-1 w-24 flex-none font-mono text-sm font-bold text-gray-600/80">
        {props.date.slice(0, 10)}
      </div>
      <div className="text-blue-700 hover:text-blue-900">
        <Link href={props.slug}>
          <a>{props.title}</a>
        </Link>
      </div>
    </div>
  );
};
export default PostList;
