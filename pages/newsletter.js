 
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import Subscribe from "../components/Subscribe";

const Newsletter = () => {
    return (
        <>
            <Meta title="Newsletter" description="Interesting links helping you explore the curious things in the world." />
            <PageTitle 
                title="Newsletter"
                description="Interesting links helping you explore the curious things in the world."
            />
            <div className="flex flex-col">
                <div className="mt-5 prose max-w-screen-md prose:ml-0 underline-offset-2 prose-strong:text-neutral-100 text-neutral-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-amber-400 prose-h1:leading-tight prose-h2:text-yellow-300 prose-h3:text-neutral-100 prose-h4:text-neutral-100 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-300 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic">
                    <p>This newsletter is two things:
                        <ul>
                            <li>
                                A mailing list for new essays
                            </li>
                            <li>
                                A Thursday newsletter sharing what I am learning, what I read, and a quote I am pondering.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="mt-5">
                    <Subscribe title="Sign up below." caption="You'll love it." />
                </div>
            </div>
        </>
    )
}


export default Newsletter;
