export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-pongal-fire h-2.5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}
