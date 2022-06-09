import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import Meta from '../components/Meta'
import { getThoughtsFromContentful } from '../lib/contentfulAPI'
import ThoughtDisplay from '../components/ThoughtDisplay'

export const getStaticProps = async () => {
  return getThoughtsFromContentful();
}

export default function Home(thoughts) {
  return (
    <div className="container">
        <Meta title="dalton's site" description="Insatiably curious" />
      <PageTitle
        title="Asides"
        description = "Short-form posts to share interesting things I learn or find online. This is similar to a more traditional blog."
      />
              
    <PageContent>
      {thoughts.thoughts.map(thought => (
        <ThoughtDisplay title={thought.fields.title} content={thought.fields.content2} date={thought.sys.createdAt} key={thought.sys.id} slug={thought.fields.slug}  />
      ))}
  
    </PageContent>
  </div>
  )
}

