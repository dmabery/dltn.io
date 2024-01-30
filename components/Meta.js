import Head from "next/head";

const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta property="og:title" content={props.title} />
    <meta property="og:site_name" content="Dalton Mabery" />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dltn.io/" />
    <meta property="og:image" content={props.image || "styles/og image.png"} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@dltnio" />
    <meta name="twitter:image" content={props.image || "styles/og image.png"} />
  </Head>
);

export default Meta;
