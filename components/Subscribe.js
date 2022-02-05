import Script from 'next/script'

const Subscribe = () => {
    return (
        <>
            <div id="custom-substack-embed"></div>

            <Script>
            {window.CustomSubstackWidget = {
                substackUrl: "daltonsbookshelf.substack.com",
                placholder: "albert@einstein.com",
                buttonText: "Subscribe",
                theme: "green" 
            }}
            </Script>
            <Script src="https://substackapi.com/widget.js" async></Script>
        </>
                        
    )
}

export default Subscribe;