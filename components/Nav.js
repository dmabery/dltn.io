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
  <nav className="mt-5 flex flex-col items-center justify-between md:flex-row">
    <div className="mb-2 flex items-center">
      <div className="font-serif text-2xl font-bold">
        <Link href="/">
          <a className="text-zinc-900/90">d.</a>
        </Link>
      </div>
    </div>
    <div className="row flex space-x-3">
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
