import Link from "next/link";

const navLinks = [
  { title: "notes", href: "/notes" },
  { title: "about", href: "/about" },
  { title: "rss", href: "/rss.xml" },
];

const Header = ({ homepage }) => {
  const links = homepage
    ? navLinks
    : [{ title: "home", href: "/" }, ...navLinks];

  return (
    <header className="mb-4 border-b-[3px] border-double border-[#666] pb-3 text-center">
      <div className={homepage ? "text-[27px]" : "text-[20px]"}>
        <Link href="/" className="font-medium text-[#003399] no-underline">
          dltn.io
        </Link>
      </div>
      {homepage && (
        <div className="mt-1 text-[13px] italic text-[#333]">
          The blog of Dalton Mabery &mdash; law student in Sacramento.
          <br />
          Notes on the law, history, and the books that explain both.
        </div>
      )}
      <div className="mt-2 text-[11.5px]">
        {links.map((link, i) => (
          <span key={link.href}>
            {i > 0 && <span className="mx-1 text-[#333]">&middot;</span>}
            <Link href={link.href}>{link.title}</Link>
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
