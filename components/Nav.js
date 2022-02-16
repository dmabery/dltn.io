import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="flex flex-row mb-10 mt-10 space-x-4 justify-between ">
            <div className="basis-2/3 flex flex-row space-x-4">
                <Link href="/" passHref>
                    <p className="font-medium py-2 text-gray-900 rounded-lg hover:underline hover:decoration-amber-700 hover:decoration-2">Home</p>
                </Link>
                <Link href="/essays" passHref>
                    <p className="font-medium py-2 text-gray-900 rounded-lg hover:underline hover:decoration-amber-700 hover:decoration-2">Essays</p>
                </Link>
                <Link href="/notes" passHref>
                    <p className="font-medium py-2 text-gray-900 rounded-lg hover:underline hover:decoration-amber-700 hover:decoration-2">Notes</p>
                </Link>
                <Link href="/about" passHref>
                    <p className="font-medium py-2 text-gray-900 rounded-lg hover:underline hover:decoration-amber-700 hover:decoration-2">About</p>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;