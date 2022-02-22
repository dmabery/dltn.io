import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import filterPostsByType from '../lib/filterPostsByType'

export const getStaticProps = async () => {
  return filterPostsByType('snippets');
}

const Snippets = ({ posts }) => {
    return (
      <>
      <Meta title="Essays" description="Most of my essays are expanding on an idea I read in a book or heard in a podcast. These essays are a record of my becoming of a person while trying to answer the question, 'What does this all mean?" />
        <PageTitle
            title="Snippets"
            description="Short code snippets and interesting ideas/theories."      />

        <PageContent>

        </PageContent>
      </>
    )}

export default Snippets;