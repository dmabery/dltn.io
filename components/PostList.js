import Link from "next/link";

const PostList = (props) => {
    function checkContentType() {
        if (props.type === 'Aside') {
            return {tag: 'thought'};
        } else return {tag: 'essay'};
    }

    return (
        <div className="flex  flex-row items-start mb-2">
            <div className="mt-1 text-sm font-mono text-slate-300 w-24 flex-none"> 
                {props.date.slice(0,10)}
            </div>
            <div className="text-blue-700 hover:text-blue-900">
                <Link href={props.slug}><a>{props.title}</a></Link>

            </div>

        </div>
    );
    }
export default PostList;
