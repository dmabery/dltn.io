import PageTitle from "../components/PageTitle";

const Now = () => {
    return (
        <>
            <PageTitle title="Now" description="What I'm working on"/>        
        
            <div className='prose'>
                <div>Last updated August 6, 2022 from California.</div>
                <h2 id="how-i-pay-my-bills">How I pay my bills</h2>
                <p>I currently work full-time as a video editor and designer for Farnam Street. My main tasks involve managing our podcast YouTube channel and turning our articles into videos (example here and here).</p>
                <h2 id="free-time">Free time</h2>
                <p>Outside of work, I explore various disciplines to help me paint a better picture of how the world works. I&#39;m currently studying history, science, and programming.</p>
                <p>I read for an hour/day (book notes), write for about 30 minutes/day (posts), and write code for an hour/day (GitHub).</p>
                <h2 id="what-i-m-hoping-for">What I&#39;m hoping for</h2>
                <p>I want my next job to be as a programmer. I love writing code. It&#39;s challenging and fun. In the meantime, I&#39;m working on building my skills in React and making difficult projects.</p>
                <p>I was stuck in a state of limbo for awhile–confused as to how to move forward. I thought going back to school for a CS degree was the right path, but I don&#39;t think it is. Instead, I&#39;d like to get a job first as a programmer to make more connections, potentially have a mentor, and then from there figure out if going back to school is worth it.</p>
                <p>If you or anyone you know needs help writing React code, let me know.</p>
            </div>
        </>
    )
}

export default Now;
