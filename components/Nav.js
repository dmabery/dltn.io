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
];

const Nav = () => (
  <nav className="mb-5 flex flex-col items-center justify-between py-3 text-gray-900 md:mb-0 md:flex-row">
    <div className="flex items-center">
      <div className="text-md">
        <Link href="/">dltn.io</Link>
      </div>
    </div>
    <div className="row flex space-x-4 font-sansSerif text-md text-gray-900">
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
