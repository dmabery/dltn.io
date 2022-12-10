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
        <nav className="font-mono mb-10 mt-10">
            <div className="basis-3/3 flex flex-col md:flex-row md:space-x-4">
            {links.map(link => (
                <LinkText slug={`/${link.slug}`} text={`${link.title}()`} key={link.title} type="nav" />
            ))}
            </div>
        </nav>
    )
}

export default Nav;


