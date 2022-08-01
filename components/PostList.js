import Link from 'next/link';

const PostList = (props) => {
    return (
        <Link href={'/essays/' + props.slug} passHref>
            <a>
                <div className="transition-all mb-3 hover:bg-slate-400/50 rounded p-5 border border-slate-400/50 border-2" key={props.key}>
                    <div>
                        <div className='flex flex-col justify-between md:flex-row md:justify-between'>
                            
                                <a className="text-xl font-bold text-gray-200 md:mb-0 mb-1">{props.title}</a>
                            
                            <p className="text-xs text-gray-400">{props.date.slice(0,10)}</p>
                        </div>
                        <p className="mt-2 mb-2 font-normal text-gray-400">{props.description}</p>
                    </div>
                </div>
            </a>
        </Link>
        )
}

export default PostList;
