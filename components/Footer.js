import Image from 'next/image'

const Footer = () => {
    return (
        <div className="mt-10 border-t-2 border-amber-700 border-t-4 pt-20 pb-20 bg-slate-900 pl-6 pr-6">
            <div className="container mx-auto max-w-screen-md flex justify-between content-center">
                <div>
                    <p className="text-slate-100 pb-4">Stay curious.</p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://www.twitter.com/daltonmabery" className=" underline hover:decoration-amber-700 hover:decoration-2">Twitter</a></p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/daltonmabery" className=" underline hover:decoration-amber-700 hover:decoration-2">YouTube</a></p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/dalton.mabery" className=" underline hover:decoration-amber-700 hover:decoration-2">Instagram</a></p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://www.getrevue.co/profile/maberydalton" className=" underline hover:decoration-amber-700 hover:decoration-2">Newsletter</a></p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://github.com/dmabery" className=" underline hover:decoration-amber-700 hover:decoration-2">GitHub</a></p>
                    <p className="text-xs text-slate-500 pb-1"><a rel="noreferrer" target="_blank" href="https://www.indiehackers.com/daltonmabery" className=" underline hover:decoration-amber-700 hover:decoration-2">Indie Hackers</a></p>
                </div>
                <div className="flex content-center">
                    <Image src="/reading book.png" width={105} height={100} />
                </div>
            </div>
        </div>
    )
}

export default Footer;