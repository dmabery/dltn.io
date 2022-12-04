import Link from "next/link";

const PostList = (props) => {
    function checkContentType() {
        if (props.type === 'Aside') {
            return {tag: 'thought'};
        } else return {tag: 'essay'};
    }

    return (
        <div className="grid grid-cols-4 mb-5 font-mono">
            <div className="col-span-1 text-slate-300"> 
                {props.date.slice(0,10)}
            </div>
            <div className="col-span-2 text-slate-100 hover:text-amber-400">
                <Link href={props.slug}><a>{props.title}</a></Link>

            </div>

        </div>
    );
    }
export default PostList;
