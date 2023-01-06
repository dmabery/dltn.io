 
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import Subscribe from "../components/Subscribe";

const Newsletter = () => {
    return (
        <>
            <Meta title="221b Newsletter" description="Learn 5 new things every Friday." />
            <PageTitle 
                title="221b"
                description="Learn 5 new things every Friday."
            />
            <div className="flex flex-col">
                <div className="mt-5 prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
                    <p>This newsletter is two things:
                        <ol>
                            <li>
                                <strong>My curated weekly email</strong>
                                <div>Every Friday, I send 5 interesting things to help you learn something new. The name, 221b, is a nod to Sherlock Holmes and his residence/labaratory at 221b Baker Street.</div>
                            </li>
                            <li>
                                <strong>My monthly reading list</strong>
                                <div>Every month, I send short summaries of all the books and articles I read to give you reccomendations for the next month.</div>
                            </li>
                        </ol>
                    </p>
                </div>
                <div className="mt-5">
                    <Subscribe title="Learn 5 you new things every Friday."/>
                </div>
            </div>
        </>
    )
}


export default Newsletter;
