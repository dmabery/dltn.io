export default function IndexCallout() {
  return (
    <div className="flex h-screen flex-col md:hidden">
      <div className="container mx-auto flex h-1/3 w-full flex-col gap-2 border border-black bg-white p-5">
        <div className="font-sansSerif text-[22px] font-bold">
          Hi, I'm Dalton
        </div>
        <div className="leading-tight">
          I'm a video editor and designer who reads and writes about what I
          learn.
        </div>
      </div>
      <div>Scroll for more</div>
    </div>
  );
}
