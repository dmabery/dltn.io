export default function ImageWithCaption({ src, caption }) {
  return (
    <div className="mx-auto my-5 flex flex-col gap-2">
      <img src={src} />
      <div className="text-center font-serif text-xs text-gray-600">
        {caption}
      </div>
    </div>
  );
}
