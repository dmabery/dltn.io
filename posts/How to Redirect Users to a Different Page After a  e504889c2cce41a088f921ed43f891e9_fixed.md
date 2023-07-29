---
Title: "How to Redirect Users to a Different Page After a Set Interval with Next.js"
Tags: ['programming']
Date: "April 20, 2022 3:11 AM (GMT)"
Description: "The following code example came after wanting to redirect my 404 page after someone landed on it."
Published: True
Slug: "how-to-redirect-users-to-a-different-page-after-a-set-interval-with-next-js"
Type: "Aside"
---

The following code example came after wanting to redirect my 404 page after someone landed on it. I've been using an astronaut for my branding and have been loving it. I found a picture of an alien beaming the astronaut into its spaceship, so wanted to 'beam' the user back home. The easy way out was to use a button and have them click it, but that didn't make sense to me. Since it's 'beaming', it should happen automatically. So I did the following:

```js

import { useRouter } from 'next/router'

const Custom404 = () => {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/')}, 2000);

```

The first line of code imports `next/router` from Next, don't miss that step. Then, I added a `useEffect` hook to set the timeout interval. I had to use that function inside the `useEffect` hook because it can only run client side. When I tried it without the hook, I kept getting an error because it was running on build. Silly me.

The argument in `router.push` is the page you want to redirect to, so change as needed. I'm redirecting home.