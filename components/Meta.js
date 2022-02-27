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
                <meta property="og:image" content={`https://daltonmabery.com/public${props.image}`}/>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@daltonmabery" />
                <meta name="twitter:image" content={`https://daltonmabery.com/public${props.image}`} />
            </Head>
        </>
    )
}

export default Meta;