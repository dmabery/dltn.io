import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import { getNotesFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getNotesFromContentful()
}

const NoteList = ({ notes }) => {
    return (
      <>
      <Meta title="Notes" description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit." />
      <PageTitle 
        title="All Notes"
        description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit."/>

      <PageContent>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-row gap-4">
            {notes.map((note, index) => (
              <Link href={'/book-notes/' + note.fields.slug} passHref key={note.sys.id}>
                <a>
                    <Image
                      src={`https:` + note.fields.image.fields.file.url}
                      width={note.fields.image.fields.file.details.image.width}
                      height={note.fields.image.fields.file.details.image.height}
                      layout="responsive"
                  />
                </a>
              </Link> 
            ))}
        </div>
      </PageContent>
    </>
    )
}

export default NoteList;