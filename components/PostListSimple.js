import LinkText from './LinkText';

const PostListSimple = (props) => (
  <div>
    <div className="mb-1 max-w-lg">
      <LinkText slug={`/${props.slug}`} text={props.title} type="bright" />
      <span className="ml-1 text-xs text-neutral-800 md:inline">
        {props.date.slice(0, 10)}
      </span>
    </div>
  </div>
);

export default PostListSimple;
