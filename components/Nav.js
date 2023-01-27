import Image from 'next/image';
import Link from 'next/link';
import LinkText from './LinkText';

const links = [
    {
        title: '.writing',
        slug: 'writing'
    },
    {
        title: '.notes',
        slug: 'notes',
    },
    {
        title: '.newsletter',
        slug: '221b'
    },
    {
        title: '.about',
        slug: 'about'
    }
]

const Nav = () => {
    return (
        <nav className="pt-2 flex flex-col md:flex-row font-mono justify-between items-center border-slate-800 border-b">
            <div className="flex items-center mb-2 px-10">
                <Image src="/ezgif.com-gif-maker.gif" alt="space" width={70} height={70}/>            
                <div className="font-bold text-xl"><Link href="/"><a className='text-zinc-600/80'>dltn.io</a></Link></div>
            </div>
            <div className="flex row space-x-3 px-10">
            {links.map(link => (
                <LinkText slug={`/${link.slug}`} text={`${link.title}()`} key={link.title} type="nav" />
            ))}
            </div>
        </nav>
    )
}

export default Nav;


