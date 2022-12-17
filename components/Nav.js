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
        slug: 'newsletter'
    },
    {
        title: '.about',
        slug: 'about'
    }
]

const Nav = () => {
    return (
        <nav className="flex font-mono mb-10 mt-10 justify-between items-center">
            <div className="flex items-center">
                <Image src="/ezgif.com-gif-maker.gif" alt="space" width={100} height={100}/>            
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


