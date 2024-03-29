function PageTitle({ title, description }) {
  return (
    <div className="flex-row items-center">
      <h2 className="mb-1 font-sansSerif text-2xl font-medium text-gray-900">
        {title}
      </h2>
      <div className="font-sansSerif text-gray-800/80">{description}</div>
    </div>
  );
}

export default PageTitle;
