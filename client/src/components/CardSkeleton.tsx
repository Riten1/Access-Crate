const SkeletonCards = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4"
        >
          <div className="h-40 w-full rounded-lg bg-gray-700"></div>

          <div className="space-y-3">
            <div className="h-4 w-20 rounded bg-gray-700"></div>
            <div className="h-3 w-full rounded bg-gray-600"></div>
            <div className="h-3 w-3/4 rounded bg-gray-600"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCards;
