 
import Link from "next/link";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import Subscribe from "../components/Subscribe";

const Newsletter = () => {
    return (
        <>
            <Meta title="Newsletter" description="Books and pictures that help you see the world in a new way." />
            <PageTitle 
                title="Newsletter"
                description="Books, quotes, and pictures that help you see the world in a new way."
            />
            <div className="flex flex-col">
                <div className="mt-5 prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
                    <p>This newsletter is two things:
                        <ol>
                            <li>
                                <strong>My monthly reading list</strong>
                                <div>At the end of every month (or the beginning of a new month), I&#39;ll send the most interesting books, articles, and podcasts I&#39;ve read that month along with a couple sentences of commentary. My goal is to help you discover an idea you didn&#39;t know exisisted.</div>
                            </li>
                            <li>
                                <strong>A mailing list for new essays</strong>
                                <div>Whenever I write a new post, you&#39;ll get it straight in your inbox. You can read my posts <Link href="/writing">here</Link>. </div>
                            </li>
                        </ol>
                    </p>
                </div>
                <div className="mt-5">
                    <Subscribe title="All you need is an email and a brain." caption="Pretty simple, right?" />
                </div>
            </div>
        </>
    )
}


export default Newsletter;
