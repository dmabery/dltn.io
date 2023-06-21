export default function Sidebar({ left, right }) {
  return (
    <div className="flex">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
