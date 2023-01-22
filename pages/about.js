import Link from "next/link";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import SideNote from "../components/SideNote";

const AboutMe = () => {
    return (
        <>
            <Meta title="About" description="Insatiably curious. Rhythmic creator." />
            <PageTitle 
                title="About Me"
                description="Insatiably curious. Rhythmic creator."
            />
            <div className="prose prose:ml-0 underline-offset-2 text-gray-800/80 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-900 prose-h1:leading-tight prose-h2:text-gray-900/80 prose-h3:text-neutral-900 prose-h4:text-neutral-900 sm:prose-h1:leading-tight prose-blockquote:font-normal prose-blockquote:text-neutral-900 prose-blockquote:border-red-500 prose-blockquote:leading-normal prose-blockquote:pl-5 prose-blockquote:not-italic prose-pre:font-normal prose-code:text-white">
                <SideNote title="Say hi!" content="I'm always looking for more people to talk about cool ideas with. Just send me an email: maberydalton@gmail.com." />
                <h2 id="tldr">Short bio</h2>
                    <p>I&#39;m a professional video editor with four years of social media experience and have a degree in Digital Media and Design. I currently work for <a href="https://fs.blog/" rel="noreferrer" target="_blank">Farnam Street </a>. I also <Link href="/writing"><a>write online</a></Link> and share interesting quotes and ideas on <a href="https://twitter.com/dltnio" rel="noreferrer" target="_blank">Twitter</a>.</p>
                <h2 id="what-i-m-doing-now">What I&#39;m Doing Now</h2>
                <h3 id="for-work">For work</h3>
                    <ul>
                        <li>I currently work for <a href="https://fs.blog/" rel="noreferrer" target="_blank">Farnam Street</a>. I spend most of my time operating and growing our <a href="https://www.youtube.com/channel/UCLtTf_uKt0Itd0NG7txrwXA">podcast&#39;s YouTube channel</a> (we hit 100k subscribers in August of 2022). When I&#39;m not doing that, I work on <a href="https://www.youtube.com/watch?v=k_zt6qRTmN0" rel="noreferrer" target="_blank">creating engaging scripts and videos</a> from our extensive blog content. I also run social accounts for <a href="https://twitter.com/farnamstreet">Farnam Street</a> and <a href="https://www.instagram.com/tkppodcast/">The Knowledge Project</a>. </li>
                    </ul>
                <h3 id="for-side-projects">For Side projects</h3>
                    <ul>
                        <li>When I&#39;m not working, I&#39;m either reading <Link href="/notes"><a>an interesting book</a></Link> or <a href="https://github.com/dmabery">coding</a>. I&#39;m studying to become a software engineer.</li>
                        <li>Every Friday, I send a weekly newsletter with five interesting ideas from history. You can sign up <Link href="/221b"><a>here.</a></Link></li>
                        <li>I also make <a href="https://youtube.com/@dltnio" rel="noreferrer" target="_blank">videos on YouTube</a>.</li>
                    </ul>
                <h3 id="for-fun">For Fun</h3>
                    <ul>
                        <li>When I sneak away from my computer, it&#39;s either to go to the gym, play golf (my goal is to break 80 this year), watch golf, or hang out with friends and family. My main leisure activities are golf and running.</li>
                        <li>I realized latley I love to work out like I&#39;m in prison (my friend Ryan Burns used that description of himself and I loved it). I run, use TRX bands in my office, do push ups, some ab workouts, and a stretching routine every morning. I love running because I sweat and when I sweat I think better. I also think it&#39;s the best way to increase your mental discipline.</li>
                    </ul>
                <h2 id="extended-about">Not so short bio</h2>
                    <p>I try to understand how things work and explain them to other people. This is a record of my becoming of a person as I explore the intellectual, creative, philosophical, and spiritual questions in this world through extensive research of literature -- both young and old. A private journey made public in seek of the one true question we all ask at some point: <strong><em>who am I and what is all this?</em></strong></p>
                    <p>Whenever I can refer to wisdom from those who lived before me, I do. The following quote comes from Will Durant in <em>The Map of Human Character</em> and was the first time I was able to assign words to the inner motivation that drives me -- <strong>how can we best make sense of everything in the world?</strong></p>
                        <blockquote>
                            <p>Therefore I feel that we of this generation give too much time to news about the transient present, too little to the living past. <strong>We are choked with news, and starved of history.</strong> We know a thousand items about the day or yesterday, we learn the events and troubles and heartbreaks of a hundred peoples, the policies and pretensions of a dozen capitals, the victories and defeats of causes, armies, athletic teams.  </p>
                            <p>But how, without history, can we understand these events, discriminate their significance, sift out the large from the small, see the basic currents underlying surface movements and changes, and foresee the result sufficiently to guard against fatal error or the souring of unreasonable hopes?&quot;  </p>
                            <p>  Will Durant, &quot;The Map of Human Character</p>
                        </blockquote>
                    <p>The legacy I hope to leave behind is similar to that of Albert Einstein&#39;s. Not his groundbreaking theroies, but his curiosity and humility. After his death, <em>The New York Times</em> wrote this:</p>
                        <blockquote>
                            <p>Man stands on this diminutive earth, gazes at the myriad of stars and upon billowing ocean and tossing trees–and wonders. What does it all mean? How did it come about? The most thoughtful wonderer who appeared among us in three centuries has passed on in the person of Albert Einstein.</p>
                        </blockquote>
                    <p>&quot;The most thoughtful wonderer.&quot; I love that. I hope those words are used to describe me one day.</p>
                <h3 id="socials">Socials</h3>
                    <p>You can find me on <a href="https://www.twitter.com/dltnio" rel="noreferrer" target="_blank">Twitter</a>, <a href="https://github.com/dmabery" rel="noreferrer" target="_blank">GitHub</a>, and <a href="https://www.youtube.com/@dltnio" rel="noreferrer" target="_blank">YouTube</a>.</p>
            </div>
           
        </>
    )
}


export default AboutMe;
