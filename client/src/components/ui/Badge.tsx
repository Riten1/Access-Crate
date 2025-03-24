import React from "react";

import cn from "../../lib/classname";

export const Badge = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-full bg-core-timer px-4 font-semibold ${className}`
      )}
    >
      {name}
    </div>
  );
};
