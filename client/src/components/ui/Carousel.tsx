import React from "react";

import { EffectCube, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform md:h-[600px] md:w-[500px] lg:h-[650px] lg:w-[800px]">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination, Navigation, Scrollbar]}
        className="h-full w-full"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
}
