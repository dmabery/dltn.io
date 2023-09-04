function PageTitle({ title, description }) {
  return (
    <div className="flex-row items-center">
      <div className="font-sansSerif">
        <h2 className="mb-1 text-2xl font-medium text-gray-900">{title}</h2>
        <div className="text-gray-800/80">{description}</div>
      </div>
    </div>
  );
}

export default PageTitle;
