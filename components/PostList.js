import Link from 'next/link';
import TagButton from './TagButton';

const PostList = (props) => {
    return (
        
            <div>
                <div className="transition-all mb-10 rounded md:mr-5 mr-2" key={props.key}>
                    <div>
                        <div className='flex flex-col justify-between md:flex-row md:justify-between'>
                                <div>
                                     <TagButton />
                                     <Link href={'/essays/' + props.slug} passHref><a className="text-xl font-bold text-neutral-100 md:mb-0 mb-1 hover:text-amber-200 hover:underline">{props.title}</a></Link>
                                </div>
                            <p className="text-xs text-neutral-300">{props.date.slice(0,10)}</p>
                        </div>
                        <p className="mt-2 mb-2 font-normal text-neutral-300">{props.description}</p>
                    </div>
                </div>
            </div>
        
        )
}

export default PostList;
