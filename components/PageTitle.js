function PageTitle({ title, description }) {
  return (
    <div className="flex-row items-center">
      <h2 className="mb-1 text-[20px] font-medium">{title}</h2>
      <div className="text-[13px] text-[#555]">{description}</div>
    </div>
  );
}

export default PageTitle;
