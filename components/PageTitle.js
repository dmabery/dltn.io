import Image from 'next/image';
import { Fragment } from 'react';

function PageTitle({ title, description, image, width, height, small }) {
  const condition = image ? 'flex' : 'flex-none sm:flex';
  const secondary = small ? 'text-3xl' : 'text-5xl';

  return (
    <div className={`flex-row items-center ${condition}`}>
      <div className="w-1/2 md:w-3/4">
        <div className={`${secondary} text-slate-300 font-bold mb-2 font-mono`}>
          {title}
        </div>
        <div className="md:text-md prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
          <Fragment>{description}</Fragment>
        </div>
      </div>
      {image ? (
        <div className="ml-2">
          <Image
            alt="Rotating gif of astronaut illustration"
            src={image}
            width={width || 175}
            height={height || 175}
            loading="lazy" />
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default PageTitle;
