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
  <nav className="fixedtop-0 z-10 w-full border-b-4 border-gray-400 bg-black py-4">
    <div className="px-5 mx-auto flex max-w-[650px] flex-col items-center justify-between  text-white md:mb-0 md:flex-row">
      <div className="flex items-center">
        <div className="font-serif text-3xl font-bold">
          <Link href="/">d.</Link>
        </div>
      </div>
      <div className="row flex space-x-4 font-sansSerif text-sm text-white">
        {links.map((link) => (
          <div className="hover:underline hover:text-blue-400">
            <Link
              href={`/${link.slug}`}
              key={link.slug}
              legacyBehavior>
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
