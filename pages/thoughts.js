import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import SideNote from '../components/SideNote'
import PostListSimple from '../components/PostListSimple'
import Head from 'next/head';
import Meta from '../components/Meta'
import { getAllPostsFromContentful, getThoughtsFromContentful } from '../lib/contentfulAPI'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ThoughtDisplay from '../components/ThoughtDisplay'
import Markdown from 'markdown-to-jsx'

export const getStaticProps = async () => {
  return getThoughtsFromContentful();
}

export default function Home(thoughts) {
  return (
    <div className="container">
        <Meta title="dalton's site" description="Insatiably curious" />
      <PageTitle
        title="Asides"
        description = "Short-form posts to share interesting things I find online, simple solutions to common problems, and code snippets."
      />
              
    <PageContent>
      {thoughts.thoughts.map(thought => (
        <PostListSimple title={thought.fields.title} content={thought.fields.content2} date={thought.sys.createdAt} key={thought.sys.id} slug={thought.fields.slug}  />
      ))}
  
    </PageContent>
  </div>
  )
}

