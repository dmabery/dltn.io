import LinkText from './LinkText';

const links = [
    {
        title: '.home',
        slug: ''
    },
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
        <nav className="flex font-mono flex-row mb-10 mt-10 space-x-4 justify-between ">
            <div className="basis-2/3 flex flex-row space-x-4">
            {links.map(link => (
                <LinkText slug={`/${link.slug}`} text={`${link.title}()`} key={link.title} type="nav" />
            ))}
            </div>
        </nav>
    )
}

export default Nav;


