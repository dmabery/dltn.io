import PageTitle from "../components/PageTitle";
import PageContent from "../components/Layout";

const AboutMe = () => {
    return (
        <>
            <PageTitle 
                title="About Me"
                description="A bio about who I am and why I do what I do. A life thesis (for now) if you will."
            />

            <PageContent>
                <div className="prose">
                    <p>My name is Dalton Mabery -- a video editor, developer in training, reader, writer, thinker, and lover of the curious things in the world. I try to understand how things work through the essential inner dialogue that populates this site and <a href="https://twitter.com/daltonmabery">my Twitter</a>. This is a record of my becoming of a person as I explore the intellectual, creative, philosophical, and spiritual questions in this world through extensive research of literature -- both young and old. A private journey made public in seek of the one true question we all ask at some point: <strong><em>who am I and what is all this?</em></strong></p>
                    <p>Whenever I can refer to wisdom from those who lived before me, I do. The following quote comes from Will Durant in <em>The Map of Human Character </em>and was the first time I was able to assign words to the inner motivation that drives me -- <strong>how can we best make sense of everything in the world?</strong></p>
                    <blockquote>
                    <p>Therefore I feel that we of this generation give too much time to news about the transient present, too little to the living past. <strong>We are choked with news, and starved of history.</strong> We know a thousand items about the day or yesterday, we learn the events and troubles and heartbreaks of a hundred peoples, the policies and pretensions of a dozen capitals, the victories and defeats of causes, armies, athletic teams. <br /> <br />
                    
                    But how, without history, can we understand these events, discriminate their significance, sift out the large from the small, see the basic currents underlying surface movements and changes, and foresee the result sufficiently to guard against fatal error or the souring of unreasonable hopes?&quot; <br /> <br />
                    
                    - Will Durant, &quot;The Map of Human Character</p>
                    </blockquote>
                    <hr />
                    <h2>Career</h2>
                    <p>On a professional note, I have a degree in Digital Media &amp; Design from Southeastern University and work as a Digital Creator and Designer for <a href="https://fs.blog/">Farnam Street</a>.</p>
                    <p>I like to say I&#39;m a &quot;developer in training&quot; as I&#39;m learning programing. I built this site (sort of) from scratch using Ghost as a Content Management System. I customized the design of a template using HTML/CSS and Handlebars, the templating language Ghost uses to render pages. I&#39;m working through a React course as well as learning Solidity to help me understand Web3 and the Blockchain. I plan to launch a micro SaaS product of some sort this year.</p>
                </div>
            </PageContent>
        </>
    )
}


export default AboutMe;