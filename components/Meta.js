import Head from 'next/head';

const Meta = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta property="og:title" content={props.title}/>
                <meta property="og:site_name" content="dalton's site" />
                <meta property="og:description" content={props.description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://daltonmabery.com/"/>
                <meta property="og:image" content={props.image || "https://res.cloudinary.com/dde1q4ekv/image/upload/v1670113793/brian-mcgowan-I0fDR8xtApA-unsplash_iyjtlr.jpg"}/>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@daltonmabery" />
                <meta name="twitter:image" content={props.image || "https://res.cloudinary.com/dde1q4ekv/image/upload/v1670113793/brian-mcgowan-I0fDR8xtApA-unsplash_iyjtlr.jpg"} />
            </Head>
        </>
    )
}

export default Meta;