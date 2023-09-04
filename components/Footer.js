import Image from "next/image";
import LinkText from "./LinkText";

const footerLink = [
  {
    title: "Twitter",
    link: "https://www.twitter.com/dltnio",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/daltonmabery",
  },
  {
    title: "GitHub",
    link: "https://github.com/dmabery",
  },
];

const Footer = () => (
  <>
    <div className="mt-5 flex items-center gap-5">
      <hr className="w-2/3"></hr>
      <div className="text-4xl font-bold">d.</div>
      <hr className="w-2/3"></hr>
    </div>
    <div className="container mx-auto mt-10 flex justify-between pb-10">
      <div className="flex flex-col">
        <p className="mb-4 font-serif font-bold text-gray-900">Stay curious.</p>
        {footerLink.map((link) => (
          <LinkText
            slug={link.link}
            text={link.title}
            type="small"
            key={link.title}
          />
        ))}
      </div>
      <Image
        src="/reading book.png"
        width={80}
        height={100}
        alt="astronaut on planet reading a book"
      />
    </div>
  </>
);

export default Footer;
