import Link from 'next/link';
import Subscribe from './Subscribe';

const SubscribeGroup = ({ title, caption }) => (
  <div className="mt-10 py-8 px-5 bg-gray-200/60 rounded-lg">
    <div className="text-xl md:text-2xl mb-1 font-serif font-bold text-gray-900">
      {title || 'Learn five new things in five minutes or less.'}
    </div>
    <div className="text-sm mb-3 text-neutral-600 mt-1 max-w-xl">
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
