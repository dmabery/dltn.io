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
  <nav className="fixed top-0 w-full border-b-4 border-gray-400 bg-black py-3">
    <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between  text-white md:mb-0 md:flex-row">
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
    </div>
  </nav>
);

export default Nav;
