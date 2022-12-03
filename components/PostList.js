import Link from 'next/link';
import TagButton from './TagButton';

const PostList = (props) => {
    function checkContentType() {
        if (props.type === 'Aside') {
            return {tag: 'thought'};
        } else return {tag: 'essay'};
    }

    return (
        <div>
            <div className="mb-5">
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className='md:w-4/5'>
                            <Link href={props.slug} passHref>
                                <a className="text-xl font-bold text-neutral-100 transition-all hover:text-amber-200 hover:underline">
                                    {props.title}
                                </a>
                            </Link>
                            <p className="mt-2 mb-2 font-normal text-neutral-300 max-w-md">{props.description}</p>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-300">{props.date.slice(0, 10)}</p>
                            <div>
                                <TagButton
                                    btnColor={checkContentType().tag === 'thought' ? 'bg-red-600' : ''}
                                    btnText ={checkContentType().tag === 'thought' ? 'Aside' : 'Essay'}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
    }
export default PostList;
