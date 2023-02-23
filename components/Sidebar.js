import Nav from "./Nav";
const SideBar = ({ children }) => {
  return (
    <div className="flex min-h-screen text-sm sm:p-0 md:p-10">
      <div className="flex flex-col md:flex-row">
        <aside className="p-5 sm:mr-0 md:mr-10">
          <div className="flex flex-row md:flex-col">
            <Nav />
          </div>
        </aside>
        <main className="flex-1 border-b p-5 md:border-b-0 md:pl-10 md:pr-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SideBar;
