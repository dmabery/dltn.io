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
    slug: "newsletter",
  },
  {
    title: "about",
    slug: "about",
  },
];

const Nav = () => (
  <nav className="flex flex-col items-center justify-between border-b-4 border-gray-400 bg-black px-3 py-3 text-white md:mb-0 md:flex-row">
    <div className="flex items-center">
      <div className="font-serif text-3xl font-bold">
        <Link href="/">d.</Link>
      </div>
    </div>
    <div className="row flex space-x-4 font-sansSerif text-sm text-white">
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
