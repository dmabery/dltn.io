import Link from 'next/link'

const LittleButton = () => {
    return (
        <div id="revue-embed" className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-4 lg:p-6 dark:bg-gray-900 mt-10 mb-10">
            <Link href='/thoughts' passHref>
                <a>More Thoughts</a>
            </Link>

        </div>
    )
}

export default LittleButton;