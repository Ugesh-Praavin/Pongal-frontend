export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="w-full bg-orange-200 rounded-full h-2 mb-4">
      <div
        className="bg-pongal-fire h-2 rounded-full transition-all"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}
