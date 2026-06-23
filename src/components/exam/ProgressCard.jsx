function ProgressCard({
  answered,
  remaining,
  total,
}) {
  const progress =
    Math.round((answered / total) * 100) || 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold text-lg mb-4">
        Progress
      </h3>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-4 space-y-2">
        <p>Answered: {answered}</p>
        <p>Remaining: {remaining}</p>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default ProgressCard;