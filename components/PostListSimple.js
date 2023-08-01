import LinkText from "./LinkText";

const PostListSimple = (props) => (
  <div>
    <div className="mb-1 flex max-w-lg flex-row font-sansSerif">
      <span className="ml-1 w-24 text-xs text-neutral-800 md:inline">
        {props.date.slice(0, 10)}
      </span>
      <LinkText slug={`/${props.slug}`} text={props.title} type="bright" />
    </div>
  </div>
);

export default PostListSimple;
