/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import Meta from '../components/Meta';
import PageTitle from '../components/PageTitle';
import { getAllByType } from './api/notion';

export const getStaticProps = async () => {
  const data = await getAllByType('Book Notes');

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

const NoteList = ({ posts }) => (
  <>
    <Meta
      title="Book Notes"
      description="Notes, summaries, and lessons from 30+ books."
    />
    <PageTitle
      title="Book Notes"
      description={
        <div className="prose mt-3 mb-3 text-sm md:text-base">
          <blockquote>
            The more that you read, the more things you will know. The more that
            you learn, the more places you’ll go. – Dr. Seuss
          </blockquote>
        </div>
      }
    />
    <div className="grid-row grid grid-cols-2 content-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} passHref key={post.id}>
          <a>
            <div className="transition-all hover:drop-shadow-lg">
              <Image
                className=""
                alt={post.title}
                src={post.image}
                width={170}
                height={250}
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  </>
);

export default NoteList;
