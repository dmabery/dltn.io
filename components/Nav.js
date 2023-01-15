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
        <nav className="flex flex-col md:flex-row font-mono mb-10 mt-10 justify-between items-center">
            <div className="flex items-center mb-2">
                <Image src="/ezgif.com-gif-maker.gif" alt="space" width={70} height={70}/>            
                <div className="font-bold text-xl"><Link href="/"><a className='text-slate-300'>dltn.io</a></Link></div>
            </div>
            <div className="flex row space-x-3">
            {links.map(link => (
                <LinkText slug={`/${link.slug}`} text={`${link.title}()`} key={link.title} type="nav" />
            ))}
            </div>
        </nav>
    )
}

export default Nav;


