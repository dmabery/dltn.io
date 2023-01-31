function PageTitle({ title, description }) {
  return (
    <div className="mb-3 flex-row items-center">
      <div className="font-serif">
        <h2 className="mb-2 text-3xl font-extrabold text-gray-900">{title}</h2>
        <div className="font-body text-gray-800/80">{description}</div>
      </div>
    </div>
  );
}

export default PageTitle;
