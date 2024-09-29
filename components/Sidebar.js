import Link from "next/link";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
export default function Sidebar({ children, left, post }) {
  return (
    <>
      <div className="flex">
        <div className="max-w-[360px] px-14 pt-20 fixed font-sansSerif font-light justify-between text-white hidden h-screen w-2/5 bg-black p-8 text-sm md:flex md:flex-col">
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
            <div className=" mb-5 border-b border-[#191919] pb-5">
              <h2 className="mb-2 font-sansSerif text-md">
                My monthly reading list email
              </h2>
              <Subscribe />
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex-grow px-8 pb-20 pt-20 max-w-[650px] w-full md:w-auto md:ml-[350px]">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
