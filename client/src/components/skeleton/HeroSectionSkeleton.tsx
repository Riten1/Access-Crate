const HeroSectionSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col-reverse items-center justify-center gap-8 text-center md:flex-row lg:flex-row lg:text-left rounded-lg p-4 md:flex md:gap-8 lg:flex lg:gap-8">
      <div className="flex flex-col gap-8">
        <div className="space-y-3">
          <div className="h-10 w-48 rounded bg-gray-700"></div>
          <div className="h-10 w-full rounded bg-gray-600"></div>
          <div className="h-3 w-3/4 rounded bg-gray-600"></div>
        </div>
        <div className="h-3 w-3/4 rounded bg-gray-600"></div>
        <div className="mt- h-8 w-3/4 rounded bg-gray-600"></div>
      </div>

      <div className="h-80 w-[300px] rounded-lg bg-gray-700"></div>
    </div>
  );
};

export default HeroSectionSkeleton;
