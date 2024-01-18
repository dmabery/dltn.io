function PageTitle({ title, description }) {
  return (
    <div className="flex-row items-center">
      <div>
        <h2 className="mb-1 font-sansSerif text-2xl text-gray-900">{title}</h2>
        <div className="font-serif text-gray-800/80">{description}</div>
      </div>
    </div>
  );
}

export default PageTitle;
