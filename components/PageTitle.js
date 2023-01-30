import { Fragment } from 'react';

function PageTitle({ title, description }) {
  return (
    <div className='flex-row items-center mb-3'>
      <div className="font-serif">
        <h2 className="text-3xl text-gray-900 font-extrabold mb-2">
          {title}
        </h2>
        <div className="font-body text-gray-800/80">
          <Fragment>{description}</Fragment>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
