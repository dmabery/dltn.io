import Image from 'next/image';

function PageTitle({ title, description, image, width, height, small }) {
  const condition = image ? 'flex' : 'flex-none sm:flex';
  const secondary = small ? 'text-3xl' : 'text-5xl';

  return (
    <div className={`flex-row items-center ${condition}`}>
      <div className="basis-2/3">
        <div className={`${secondary} text-slate-300 font-bold mb-2 font-mono`}>
          {title}
        </div>
        <p className="text-slate-300">{description}</p>
      </div>
      {image ? (
        <div className="ml-2">
          <Image
            alt="Rotating gif of astronaut illustration"
            src={image}
            width={width || 175}
            height={height || 175}
            loading="lazy" />
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default PageTitle;
