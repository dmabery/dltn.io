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
                <meta property="og:image" content={props.image || "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c85bb5fb-c8ea-4bad-9ac3-3b4340f8b323/guillermo-ferla-Oze6U2m1oYU-unsplash.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220903T194338Z&X-Amz-Expires=86400&X-Amz-Signature=789e07006245f292b0d9372e83eb11807fc7c2ab7e1992ba7774231d190af662&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22guillermo-ferla-Oze6U2m1oYU-unsplash.jpeg%22&x-id=GetObject" }/>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@daltonmabery" />
                <meta name="twitter:image" content={props.image} />
            </Head>
        </>
    )
}

export default Meta;