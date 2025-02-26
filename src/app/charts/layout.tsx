export default function ChartLayout({
  barchart,
  linechart,
  hitmap,
}: {
  barchart: React.ReactNode;
  linechart: React.ReactNode;
  hitmap: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-auto bg-sky-200 py-5 px-10 grid grid-cols-1 md:grid-cols-2 items-start gap-5 ">
        <div className="bg-red-600 p-3">{barchart}</div>
        <div className="bg-yellow-300 p-3">{linechart}</div>
      </div>
      <div className="w-full h-auto p-10 bg-gray-400 text-center  ">{hitmap}</div>
    </>
  );
}
