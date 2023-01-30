import LinkText from '../components/LinkText';
import Meta from '../components/Meta';
import SideNote from '../components/SideNote';

const bookList = [
  {
    title: 'Discipline is Destiny',
    link: '/discipline-is-destiny-by-ryan-holiday',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Leadership',
    link: '/leadership',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Man from the Future',
    link: '/the-man-from-the-future',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'Pieces of the Action',
    link: '/pieces-of-action',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Letters to a Young Poet',
    link: '/pieces-of-action',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Revolt of the Public',
    link: '/revolt-of-the-public',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Library',
    link: '/the-library',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'The Clockwork Universe by Edward Dolnick',
    link: '/the-clockwork-universe',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Da Vinci by Walter Isaacson',
    link: '/leonardo-da-vinci',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Niels Bohr: The Man, His Science, and the World They Changed',
    link: '',
    rating: '⭐️⭐️',
  },
  {
    title: 'The Rise and Fall of the Dinosaurs by Steven Brusatte',
    link: '/the-rise-and-fall-of-dinosaurs-by-steven-brusatte',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'On Writing Well by William Zinsser',
    link: '/on-writing-well-by-william-zinsser',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'A Short History of Everything by Bill Bryson',
    link: '/a-short-history-of-nearly-everything-by-bill-bryson',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'Live No Lies by John Mark Comer',
    link: '',
    rating: '⭐️⭐️⭐️⭐️⭐️',
  },
  {
    title: '12 Rules for Life by Jordan Peterson',
    link: '/12-rules-for-life',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Benjamin Franklin by Walter Isaacson',
    link: '',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: "Writer's Retreats",
    link: '',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'What We See When We Read by Peter Mendelsund',
    link: '/what-we-see-when-we-read',
    rating: '⭐️⭐️',
  },
  {
    title: 'Mastery by Robert Greene',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title:
      "Calm, It doesn't have to be crazy at work by Jason Friedman and DHH",
    link: '',
    rating: '⭐️',
  },
  {
    title: 'Think Like a Rocket Scientist by Ozan Varol',
    link: '/think-like-a-rocket-scientist',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'The Tipping Point by Malcolm Gladwell',
    link: '/the-tipping-point-by-malcolm-gladwell',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'The Meaning of Marriage by Timothy Keller',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Reason for God by Timothy Keller',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Ride of a Lifetime by Bob Iger',
    link: '/the-ride-of-a-lifetime-lessons-from-15-years-as-ceo-of-the-walt-disney',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Dip by Seth Godin',
    link: '/the-dip-by-seth-godin',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'Start with Why by Simon Sinek',
    link: '',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'The Ruthless Elimination of Hurry by John Mark Comer',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Neurofitness by Paul Jandial',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Show Your Work by Austin Kleon',
    link: '/show-your-work-by-austin-kleon',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'Range by David Epstein',
    link: '/range-by-david-epstein',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Shoe Dog by Phil Knight',
    link: '',
    rating: '⭐️⭐️⭐️⭐️⭐️',
  },
  {
    title: 'I Declare War by Levi Lusko',
    link: '',
    rating: '⭐️⭐️⭐️⭐️',
  },
  {
    title: 'Everybody Always by Bob Goff',
    link: '',
    rating: '⭐️⭐️⭐️',
  },
  {
    title: 'The Problem of God by Mark Clark',
    link: '',
    rating: '⭐️⭐️⭐️⭐️⭐️',
  },
  {
    title: 'The Screwtape Letter by C.S. Lewis',
    link: '',
    rating: '⭐️⭐️⭐️⭐️⭐️',
  },
];

const Books = () => (
  <div className="text-white">
    <Meta title="Dalton's books" />
    <p className="mb-5 max-w-lg">
      These are some the books I&#39;ve read (ordered by most recent) along with
      my arbitrary rating that you can totally disagree with.
    </p>
    <p className="mb-5 max-w-lg">
      If you&#39;re looking for books to read, skim this list or check out{' '}
      <LinkText
        slug="https://tommycollison.com/greatbooks"
        text="The Great Books Project"
        type="bright"
      />
      . I&#39;ve yet to embark on it, but plan to.
    </p>
    <SideNote
      title="Quick note"
      content="If it's linked, that means I've published my notes."
    />
    <ul className="list-disc ml-4">
      {bookList.map((book) =>
        book.link ? (
          <li className="mb-2 text-blue-500">
            <LinkText
              slug={`book-notes${book.link}`}
              text={book.title}
              type="bright"
            />{' '}
            - {book.rating}
          </li>
        ) : (
          <li className="mb-2">
            {book.title} - {book.rating}
          </li>
        )
      )}
    </ul>
  </div>
);

export default Books;
