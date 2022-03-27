import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import PostList from '../components/PostList'
import { getNotesFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getNotesFromContentful()
}

const NoteList = ({ notes }) => {
  console.log(notes)
    return (
      <>
      <Meta title="Notes" description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit." />
      <PageTitle 
        title="All Notes"
        description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit."/>

      <PageContent>
        <div className="grid grid-cols-4 grid-row gap-4">
            {notes.map((note, index) => (
              <Link href={'/essays/' + note.fields.slug} passHref >
                <a>
                    <Image
                      src={`https:` + note.fields.bookCoverImage.fields.file.url}
                      width={note.fields.bookCoverImage.fields.file.details.image.width}
                      height={note.fields.bookCoverImage.fields.file.details.image.height}
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