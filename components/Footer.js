const footerLinks = [
  { title: "Twitter", link: "https://www.twitter.com/dltnio" },
  { title: "GitHub", link: "https://github.com/dmabery" },
  { title: "YouTube", link: "https://www.youtube.com/daltonmabery" },
];

const Footer = () => (
  <footer className="mt-6 border-t border-[#ccc] pt-2 text-center text-[11px] text-[#555]">
    <div>
      dltn.io is proudly hand-rolled &middot;{" "}
      <a href="/rss.xml">Entries (RSS)</a>
    </div>
    <div className="mt-1">
      {footerLinks.map((link, i) => (
        <span key={link.link}>
          {i > 0 && <span className="mx-1">&middot;</span>}
          <a href={link.link} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        </span>
      ))}
    </div>
  </footer>
);

export default Footer;
