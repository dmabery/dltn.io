import Link from 'next/link';
import Subscribe from './Subscribe';

const SubscribeGroup = ({ title, caption }) => (
  <div className="mt-10 rounded-lg bg-gray-200/60 py-8 px-5">
    <div className="mb-1 font-serif text-xl font-bold text-gray-900 md:text-2xl">
      {title || 'Learn five new things in five minutes or less.'}
    </div>
    <div className="mb-3 mt-1 max-w-xl text-sm text-neutral-600">
      {caption || (
        <>
          Get my weekly email that shares an anthology of ideas and stories from
          history, science, philosophy, and more. Read previous editions{' '}
          <Link href="/tags/221b">
            <a className="text-blue-700 hover:text-blue-900">here</a>
          </Link>
          .
        </>
      )}
    </div>
    <Subscribe />
  </div>
);
export default SubscribeGroup;
