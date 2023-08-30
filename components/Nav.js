import Link from "next/link";

const links = [
  {
    title: "writing",
    slug: "writing",
  },
  {
    title: "notes",
    slug: "notes",
  },
  {
    title: "newsletter",
    slug: "twr",
  },
  {
    title: "about",
    slug: "about",
  },
];

const Nav = () => (
  <nav className="mb-5 flex flex-col items-center justify-between py-3 text-gray-900 md:mb-0 md:flex-row">
    <div className="flex items-center">
      <div className="font-serif text-4xl font-bold">
        <Link href="/">d.</Link>
      </div>
    </div>
    <div className="row flex space-x-4 font-sansSerif text-sm text-gray-900">
      {links.map((link) => (
        <Link
          href={`/${link.slug}`}
          className="hover:underline"
          key={link.slug}
        >
          {link.title}
        </Link>
      ))}
    </div>
  </nav>
);

export default Nav;
