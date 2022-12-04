import Link from 'next/link';
import { useEffect } from 'react';
import LinkedTagButton from './LinkedTagButton';
import Meta from './Meta';
import PostBodyContent from './PostBodyContent';
const prism = require("prismjs")

const FullPostDisplay = ({ title, description, image, date, tags, content }) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={title} description={description} image={image} />
                <article className="mx-auto max-w-screen-sm text-neutral-300">
                  <div className="border-b-2 mb-4 text-slate-100 pb-5 md:ml-0 mr-0">
                    <h1 className="text-left text-4xl mt-2 decoration-4 font-bold mb-2 md:w-3/4">{title || ''}</h1>
                    <div className='flex justify-between content-center items-center'>
                      <p className="text-xs text-slate-400">Published: {date.slice(0,10)}</p>
                      <div>
                        {tags.map((tag => (
                          <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag} /></a></Link></span>
                        )))}
                      </div>
                    </div>
                  </div>
                  <PostBodyContent content={content} />
                </article>
              </>
    )
} 

export default FullPostDisplay;
