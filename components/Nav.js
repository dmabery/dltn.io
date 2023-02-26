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
    slug: "221b",
  },
  {
    title: "about",
    slug: "about",
  },
];

const Nav = () => (
  <nav className="mt-5 flex flex-col items-center justify-between md:flex-row">
    <div className="mb-2 flex items-center space-x-5">
      <div className="">
        <Link href="/">
          <a className="font-serif text-2xl font-bold text-zinc-900/90">d.</a>
        </Link>
      </div>
    </div>
    <div className="row flex space-x-3">
      <div className="mb-3"></div>
    </div>
  </nav>
);

export default Nav;
