import Link from 'next/link';
import TagButton from './TagButton';

const PostList = ({ key, date, slug, description, title, contentType }) => {
    function checkContentType() {
        if (contentType === 'tinyThought') {
            return {slug: 'thoughts/', tag: 'thought'};
        } else return {slug: 'essays/', tag: 'essay'};
    }

    return (
        <div>
            <div className="mb-5" key={key}>
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className='w-4/5'>
                            <Link href={checkContentType().slug + slug} passHref>
                                <a className="text-xl font-bold text-neutral-100 transition-all hover:text-amber-200 hover:underline">
                                    {title}
                                </a>
                            </Link>
                            <p className="mt-2 mb-2 font-normal text-neutral-300 max-w-md">{description}</p>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-300">{date.slice(0, 10)}</p>
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
