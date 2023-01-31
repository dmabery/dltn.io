import Image from 'next/image';
import LinkText from './LinkText';

const footerLink = [
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/dltnio',
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/daltonmabery',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/dmabery',
  },
];

const Footer = () => (
  <div>
    <div className="container mx-auto flex justify-between border-t-2 border-t-slate-500/50 py-5">
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
  </div>
);

export default Footer;
