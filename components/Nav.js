import Link from "next/link";

const links = [
  {
    title: "notes",
    slug: "notes",
  },
  {
    title: "about",
    slug: "about",
  },
  {
    title: "rss",
    slug: "rss",
  },
];

const Nav = () => (
  <nav className="mb-5 flex ml-15 flex-row items-center justify-between p-3 md:mb-0 md:px-0">
    <div className="flex items-center">
      <div className="text-md">
        <Link href="/">dltn.io</Link>
      </div>
    </div>
    <div className="row flex space-x-4 font-sansSerif text-md">
      {links.map((link) => (
        <Link
          href={`/${link.slug}`}
          className="hover:underline"
          key={link.slug}
          legacyBehavior>
          {link.title}
        </Link>
      ))}
    </div>
  </nav>
);

export default Nav;
