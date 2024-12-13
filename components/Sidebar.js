import Link from "next/link";
export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex">
        <div className="mx-auto">
          <div className="flex-grow px-8 pb-20 pt-20 max-w-[650px] w-full md:w-auto">{children}</div>
        </div>
        <div className="px-8 max-w-[250px] font-sansSerif font-light justify-between text-black hidden h-screen w-2/5 p-8 text-sm md:flex md:flex-col">
          <div>
            <h2 className="mb-5 pb-3 font-sansSerif text-lg leading-tight">
              A personal blog about books, history, and the law.
            </h2>
          </div>
          <div className="mb-3 text-lg flex flex-col gap-3">
            <Link href="/about">About</Link>
            <Link href="/about">Writing</Link>
            <Link href="/notes">Book Notes</Link>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}
