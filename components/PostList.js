
const PostList = (props) => {
    function checkContentType() {
        if (props.type === 'Aside') {
            return {tag: 'thought'};
        } else return {tag: 'essay'};
    }

    return (
        <div className="grid grid-cols-4 mb-3 font-mono">
            <div className="col-auto text-slate-300"> 
                {props.date.slice(0,10)}
            </div>
            <div className="col-span-3 text-slate-100">
                {props.title}
            </div>

        </div>
    );
    }
export default PostList;
