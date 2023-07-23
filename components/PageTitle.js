function PageTitle({ title, description }) {
  return (
    <div className="flex-row items-center">
      <div className="font-serif">
        <h2 className="mb-1 text-3xl font-bold text-gray-900">{title}</h2>
        <div className="font-sansSerif text-gray-800/80">{description}</div>
      </div>
    </div>
  );
}

export default PageTitle;
