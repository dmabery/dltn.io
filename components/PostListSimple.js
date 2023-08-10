import LinkText from "./LinkText";

const PostListSimple = (props) => (
  <div className="mb-1 flex items-center font-sansSerif">
    <div className="w-18 mr-2 text-xs text-neutral-800">
      {props.date.slice(0, 10)}
    </div>
    <div className="col-span-2">
      <LinkText slug={`/${props.slug}`} text={props.title} type="bright" />
    </div>
  </div>
);

export default PostListSimple;
