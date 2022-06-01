import Link from 'next/link'

const links = [
    {
        title: 'Home',
        slug: ''
    },
    {
        title: 'Essays',
        slug: 'essays'
    },
    {
        title: 'Asides',
        slug: 'thoughts'
    },
    {
        title: 'Notes',
        slug: 'notes',
    },
    {
        title: 'About',
        slug: 'about'
    }
]

const Nav = () => {
    return (
        <nav className="flex flex-row space-x-4 justify-center p-5 border-b">
            <div className="flex flex-row space-x-4">
            {links.map(link => (
                <Link href = {`/${link.slug}`} passHref key={link.text}>
                    <a className="font-medium py-2 text-slate-900 rounded-lg hover:underline hover:decoration-amber-700 hover:decoration-2">{link.title}</a>
                 </Link>
            ))}
            </div>
        </nav>
    )
}

export default Nav;


