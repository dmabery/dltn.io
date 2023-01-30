import LinkText from './LinkText';

const PostListSimple = (props) => (
  <div>
    <div className="max-w-lg mb-1">
      <LinkText slug={`/${props.slug}`} text={props.title} type="bright" />
      <span className="text-xs text-neutral-800 ml-1 md:inline">
        {props.date.slice(0, 10)}
      </span>
    </div>
  </div>
);

export default PostListSimple;
