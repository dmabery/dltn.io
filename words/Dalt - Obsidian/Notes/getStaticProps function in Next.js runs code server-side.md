With Next.js, the getStaticProps function's code will run server-side. So if you have a console.log() in that function, it will be logged in the terminal and not in the browser console.

This also means you can put any code in here, and it will not be accessible with the dev tools on a browser, so this code can contain data queries and other stuff that you need to keep private.

This function will also pass down its return values as props to the page, so you can access the props in the rendered JSX component.

***
[[Programming]]
[[Next.js]]