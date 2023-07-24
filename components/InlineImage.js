const InlineImage = (props) => (
  <div className="float-right ml-3 mb-3">
    <a href={props.url} target="_blank">
      <img className="h-48 object-scale-down md:h-72" src={props.src} />
    </a>
  </div>
);

export default InlineImage;
