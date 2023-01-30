import Link from 'next/link';
import { useEffect } from 'react';
import LinkedTagButton from './LinkedTagButton';
import Meta from './Meta';
import PostBodyContent from './PostBodyContent';
import SubscribeGroup from './SubscribeGroup';
const prism = require("prismjs")

const FullPostDisplay = ({ title, description, image, date, tags, content }) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={title} description={description} image={image} />
                <article className="mx-auto text-neutral-300">
                  <div className="text-gray-900/90 md:pl-5 md:pr-5 p-0">
                    <div className="text-xs text-slate-500 text-center">
                      {date.slice(0,10)}
                    </div>
                    <h1 className="text-3xl mt-3 mb-3 text-center font-bold">{title || ''}</h1>
                  </div>
                  <div className='text-center'>
                    {tags.map((tag => (
                            <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag} /></a></Link></span>
                    )))}
                  </div>
                  <div className='container mx-auto'>
                    <PostBodyContent content={content} />
                  <div>
                    <SubscribeGroup />
                  </div>
                  </div>
                </article>
              </>
    )
} 

export default FullPostDisplay;
