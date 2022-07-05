import PageTitle from '../components/PageTitle'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Custom404 = () => {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/')}, 2000);

        return () => clearTimeout(timeout);
        })

    return (
        <>
        <PageTitle title="Oops" description="You have seem to wandered off the path. Beaming you back home." image="/alien and astronaut.png" width='200' height='250' />
        </>
    )
}

export default Custom404;