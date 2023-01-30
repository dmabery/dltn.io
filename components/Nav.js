import Link from 'next/link';
import LinkText from './LinkText';

const links = [
  {
    title: 'writing',
    slug: 'writing',
  },
  {
    title: 'notes',
    slug: 'notes',
  },
  {
    title: 'newsletter',
    slug: '221b',
  },
  {
    title: 'about',
    slug: 'about',
  },
];

const Nav = () => (
  <nav className="flex flex-col md:flex-row justify-between items-center mt-5">
    <div className="flex items-center mb-2">
      <div className="font-bold font-serif text-2xl">
        <Link href="/">
          <a className="text-zinc-900/90">d.</a>
        </Link>
      </div>
    </div>
    <div className="flex row space-x-3">
      {links.map((link) => (
        <LinkText
          slug={`/${link.slug}`}
          text={`${link.title}`}
          key={link.title}
          type="nav"
        />
      ))}
    </div>
  </nav>
);

export default Nav;
