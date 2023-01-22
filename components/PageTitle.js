import { Fragment } from 'react';

function PageTitle({ title, description }) {
  return (
    <div className='flex-row items-center mb-3'>
      <div className="font-serif">
        <h2 className="text-3xl text-gray-900/80 font-bold mb-2">
          {title}
        </h2>
        <div className="md:text-md prose max-w-screen-md prose:ml-0 underline-offset-2 text-gray-600 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
          <Fragment>{description}</Fragment>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
