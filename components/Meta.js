import Head from 'next/head';

const Meta = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta property="og:title" content={props.title}/>
                <meta property="og:site_name" content="dalton's site" />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://daltonmabery.com/"/>
                <meta property="twitter:site" content="@daltonmabery" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@daltonmabery" />
                <meta property="og:title" content={props.title}/>
                <meta property="og:description" content={props.description}/>
                <meta name="description" content="Understanding more of the world." />
                <meta property="og:image" content={props.image} />
            </Head>
        </>
    )
}

export default Meta;