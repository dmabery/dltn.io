import Link from "next/link";
import LinkText from "./LinkText";

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
  <nav className="flex flex-col items-center justify-between py-3 md:mb-0 md:flex-row">
    <div className="flex items-center">
      <div className="font-serif text-4xl font-bold">
        <Link href="/" className="text-white">
          d.
        </Link>
      </div>
    </div>
    <div className="row flex space-x-4">
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
