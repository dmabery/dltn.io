import { Fragment } from 'react';

function PageTitle({ title, description }) {
  return (
    <div className='flex-row items-center mb-3'>
      <div className="font-serif">
        <h2 className="text-4xl md:text-5xl text-gray-900 font-extrabold mb-2 italic">
          {title}
        </h2>
        <div className="font-body text-sm md:text-base">
          <Fragment>{description}</Fragment>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
