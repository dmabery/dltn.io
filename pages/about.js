import Link from "next/link";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import SideNote from "../components/SideNote";

const AboutMe = () => (
  <>
    <Meta title="About" description="Insatiably curious. Rhythmic creator." />
    <PageTitle
      title="About Me"
      description="Insatiably curious. Rhythmic creator."
    />
    <div className="container prose text-gray-800 underline-offset-2 prose-h1:leading-tight prose-h2:text-3xl prose-h2:text-[#0C2059] prose-h3:text-2xl prose-h3:text-[#263459] prose-h4:text-xl prose-h4:text-[#263459] prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-900 hover:prose-a:underline prose-blockquote:border-red-500 prose-blockquote:pl-5 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-normal prose-blockquote:text-neutral-900 prose-code:text-white prose-pre:font-normal sm:prose-h1:leading-tight">
      <SideNote
        title="👋 Say hi!"
        content="I'm always looking for more people to talk about cool ideas with. Just send me an email: maberydalton@gmail.com."
      />
      <h2 id="tldr">Short bio</h2>
      <p>
        I&#39;m a professional video editor and designer with four years of
        social media experience. I have a degree in Digital Media and Design
        from Southeastern University. I currently work for{" "}
        <a href="https://fs.blog/" rel="noreferrer" target="_blank">
          Farnam Street{" "}
        </a>
        . I also{" "}
        <Link href="/writing">
          <a>write online</a>
        </Link>{" "}
        and share interesting quotes and ideas on{" "}
        <a href="https://twitter.com/dltnio" rel="noreferrer" target="_blank">
          Twitter
        </a>
        . In my free time, I run, read, and write code. I love media and
        technology. I currently have experience with React, Tailwind, Ruby on
        Rails, and Next.js. I&#39;m interested in the intersection between
        legacy media operations and technology, and building meaningful media
        businesses. My next job, when I feel ready for it, will be in software
        development or media/journalism.
      </p>
      <p>
        I&#39;m curious about why things are the way that they are. Sayings,
        names, standards, rules; there&#39;s often a fascinating backstory
        behind them all. I like to learn those stories and share them with
        others.
      </p>
      <h2 id="what-i-m-doing-now">What I&#39;m Doing Now</h2>
      <h3 id="for-work">For work</h3>
      <ul>
        <li>
          I&#39;m the Senior Digital Creator at{" "}
          <a href="https://fs.blog/" rel="noreferrer" target="_blank">
            Farnam Street
          </a>
          . I spend most of my time making videos for and operating our{" "}
          <a href="https://www.youtube.com/channel/UCLtTf_uKt0Itd0NG7txrwXA">
            podcast&#39;s YouTube channel
          </a>
          . When I&#39;m not doing that, I work on{" "}
          <a
            href="https://www.youtube.com/watch?v=k_zt6qRTmN0"
            rel="noreferrer"
            target="_blank"
          >
            writing scripts and editing videos
          </a>{" "}
          from our extensive blog content. I also run the social accounts for{" "}
          <a href="https://twitter.com/farnamstreet">Farnam Street</a> and{" "}
          <a href="https://www.instagram.com/tkppodcast/">
            The Knowledge Project
          </a>
          .{" "}
        </li>
      </ul>
      <h3 id="for-side-projects">For Side projects</h3>
      <ul>
        <li>
          When I&#39;m not working, I&#39;m either reading{" "}
          <Link href="/notes">
            <a>an interesting book</a>
          </Link>{" "}
          or <a href="https://github.com/dmabery">coding</a>.
        </li>
        <li>
          Every Friday, I send a weekly newsletter with lessons I learn from
          books. You can sign up{" "}
          <Link href="/221b">
            <a>here.</a>
          </Link>
        </li>
        <li>
          I used to make{" "}
          <a
            href="https://youtube.com/@dltnio"
            rel="noreferrer"
            target="_blank"
          >
            videos on YouTube
          </a>
          , but have put that on pause for now.
        </li>
      </ul>
      <h3 id="for-fun">For Fun</h3>
      <ul>
        <li>
          Away from my computer or a book, I either play golf, watch golf, run,
          or hang out with friends and family. My main leisure activities are
          golf and running.
        </li>
        <li>
          I realized latley I love to work out like I&#39;m in prison (my friend
          Ryan Burns used that description of himself and I loved it). I run,
          use TRX bands in my office, do push ups, some ab workouts, and a
          stretching routine every morning. I love running because I sweat and
          when I sweat I think better. I also think it&#39;s the best way to
          increase your mental discipline. As Seneca said, &quot;We treat the
          body rigorously so that it may not be disobedient to the mind&quot;.
        </li>
      </ul>
      <h2 id="extended-about">Not so short bio</h2>
      <p>
        I try to understand how things work and explain them to other people.
        This site is is a record of my becoming of a person as I explore the
        intellectual, creative, philosophical, and spiritual questions in this
        world through extensive research of literature -- both young and old. A
        private journey made public in seek of the one true question we all ask
        at some point:{" "}
        <strong>
          <em>who am I and what is all this?</em>
        </strong>
      </p>
      <p>
        Whenever I can refer to wisdom from those who lived before me, I do. The
        following quote comes from Will Durant in{" "}
        <em>The Map of Human Character</em> and was the first time I was able to
        assign words to the inner motivation that drives me --{" "}
        <strong>how can we best make sense of everything in the world?</strong>
      </p>
      <blockquote>
        <p>
          Therefore I feel that we of this generation give too much time to news
          about the transient present, too little to the living past.{" "}
          <strong>We are choked with news, and starved of history.</strong> We
          know a thousand items about the day or yesterday, we learn the events
          and troubles and heartbreaks of a hundred peoples, the policies and
          pretensions of a dozen capitals, the victories and defeats of causes,
          armies, athletic teams.{" "}
        </p>
        <p>
          But how, without history, can we understand these events, discriminate
          their significance, sift out the large from the small, see the basic
          currents underlying surface movements and changes, and foresee the
          result sufficiently to guard against fatal error or the souring of
          unreasonable hopes?&quot;{" "}
        </p>
        <p> Will Durant, &quot;The Map of Human Character</p>
      </blockquote>
      <p>
        The legacy I hope to leave behind is similar to that of Albert
        Einstein&#39;s. Not his groundbreaking theroies, but his curiosity and
        humility. After his death, <em>The New York Times</em> wrote this:
      </p>
      <blockquote>
        <p>
          Man stands on this diminutive earth, gazes at the myriad of stars and
          upon billowing ocean and tossing trees–and wonders. What does it all
          mean? How did it come about? The most thoughtful wonderer who appeared
          among us in three centuries has passed on in the person of Albert
          Einstein.
        </p>
      </blockquote>
      <p>
        &quot;The most thoughtful wonderer.&quot; I love that. I hope those
        words are used to describe me one day.
      </p>
      <h3 id="socials">Socials</h3>
      <p>
        You can find me on{" "}
        <a
          href="https://www.twitter.com/dltnio"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        ,{" "}
        <a href="https://github.com/dmabery" rel="noreferrer" target="_blank">
          GitHub
        </a>
        , and{" "}
        <a
          href="https://www.youtube.com/@dltnio"
          rel="noreferrer"
          target="_blank"
        >
          YouTube
        </a>
        .
      </p>
    </div>
  </>
);

export default AboutMe;
