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
  <nav className="flex flex-col items-center justify-between bg-[#191919] px-3 py-3 md:flex-row">
    <div className="flex items-center">
      <div className="font-serif text-4xl font-bold">
        <Link href="/">
          <a className="text-white">d.</a>
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
