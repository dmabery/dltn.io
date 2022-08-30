import Image from 'next/image';

const Footer = () => (
  <div className="mt-10 pt-20 pb-20">
    <div className="container mx-auto flex justify-between content-center border-t-2 border-t-slate-500/50  py-5">
      <div>
        <p className="text-slate-100 pb-4">Stay curious.</p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.twitter.com/daltonmabery"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            Twitter
          </a>
        </p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/daltonmabery"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            YouTube
          </a>
        </p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/dalton.mabery"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            Instagram
          </a>
        </p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.getrevue.co/profile/maberydalton"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            Newsletter
          </a>
        </p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/dmabery"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            GitHub
          </a>
        </p>
        <p className="text-xs text-slate-500 pb-1">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.indiehackers.com/daltonmabery"
            className=" underline hover:decoration-amber-700 hover:decoration-2"
          >
            Indie Hackers
          </a>
        </p>
      </div>
      <div className="flex content-center">
        <a href="https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r" target="_blank" rel="noreferrer"><Image src="/reading book.png" alt="spaceman" width={120} height={150} /></a>
      </div>
    </div>
  </div>
);

export default Footer;
