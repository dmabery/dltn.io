import PageTitle from "../components/PageTitle";
import PageContent from "../components/Layout";
import Meta from "../components/Meta";

const AboutMe = () => {
    return (
        <>
            <Meta title="About" description="Insatiably curious. Rhythmic creator." />
            <PageTitle 
                title="About Me"
                description="Insatiably curious. Rhythmic creator."
            />

            <PageContent>
                <div className="prose prose-invert font-light prose-strong:text-gray-100 text-gray-200 prose-a:text-amber-700 hover:prose-a:text-amber-700 hover:prose-a:no-underline prose-h1:leading-tight prose-h3:text-slate-300 prose-h4:text-slate-300 sm:prose-h1:leading-tight md:p-0 prose-blockquote:border-none prose-blockquote:font-normal prose-blockquote:bg-slate-400/40 prose-blockquote:rounded prose-blockquote:leading-normal prose-blockquote:p-1 prose-blockquote:pl-5 prose-blockquote:pr-5 prose-blockquote:not-italic">
                    <p>My name is Dalton Mabery -- a video editor, developer, reader, writer, thinker, and lover of the curious things in the world. I try to understand how things work through the essential inner dialogue that populates this site and <a className="text-sky-800 underline decoration-amber-700 decoration-2" href="https://twitter.com/daltonmabery">my Twitter</a>. This is a record of my becoming of a person as I explore the intellectual, creative, philosophical, and spiritual questions in this world through extensive research of literature -- both young and old. A private journey made public in seek of the one true question we all ask at some point: <strong><em>who am I and what is all this?</em></strong></p>
                    <p>Whenever I can refer to wisdom from those who lived before me, I do. The following quote comes from Will Durant in <em>The Map of Human Character </em>and was the first time I was able to assign words to the inner motivation that drives me -- <strong>how can we best make sense of everything in the world?</strong></p>
                    <blockquote>
                    <p>Therefore I feel that we of this generation give too much time to news about the transient present, too little to the living past. <strong>We are choked with news, and starved of history.</strong> We know a thousand items about the day or yesterday, we learn the events and troubles and heartbreaks of a hundred peoples, the policies and pretensions of a dozen capitals, the victories and defeats of causes, armies, athletic teams. <br /> <br />
                    
                    But how, without history, can we understand these events, discriminate their significance, sift out the large from the small, see the basic currents underlying surface movements and changes, and foresee the result sufficiently to guard against fatal error or the souring of unreasonable hopes?&quot; <br /> <br />
                    
                    - Will Durant, &quot;The Map of Human Character</p>
                    </blockquote>
                    <p> The legacy I hope to leave behind is similar to that of Albert Einstein&#39;s. Not his groundbreaking theroies, but his curiosity and humility. After his death, <i>The New York Times</i> wrote this:</p>
                    <blockquote>
                        <p>Man stands on this diminutive earth, gazes at the myriad of stars and upon billowing ocean and tossing trees–and wonders. What does it all mean? How did it come about? The most thoughtful wonderer who appeared among us in three centuries has passed on in the person of Albert Einstein.</p>
                    </blockquote>
                    <p>&quot;The most thoughtful wonderer.&quot; I love that. I hope those words are used to describe me one day.</p>
                    <hr />
                    <h2>Career</h2>
                    <p>On a professional note, I have a degree in Digital Media &amp; Design from Southeastern University and work as a Digital Creator and Designer for <a className="text-sky-800 underline decoration-amber-700 decoration-2" href="https://fs.blog/">Farnam Street</a>.</p>
                    <p>Developer - I built this site using Tailwind and React. I&#39;d like my next job to be as a programmer.</p>
                </div>
            </PageContent>
        </>
    )
}


export default AboutMe;
