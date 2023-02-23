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
    slug: "221b",
  },
  {
    title: "about",
    slug: "about",
  },
];

const Nav = () => (
  <nav className="mt-5 flex flex-col">
    <div className="font-serif text-2xl font-bold">
      <Link href="/">
        <a className="text-zinc-900/90">d.</a>
      </Link>
    </div>
    <div className="flex flex-col">
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
