import { Carousel } from "@mantine/carousel";

function CarouselView({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      withIndicators
      className="group flex h-full w-full max-w-4xl items-center justify-center"
      slideSize="100%"
      height="100%"
      align="center"
      classNames={{
        indicator:
          "w-[12px] h-[4px] transition-all duration-250 ease-in-out data-[active]:w-[40px]",
        controls:
          "opacity-0 transition-opacity duration-150 group-hover:opacity-100 text-white ",
      }}
    >
      {children}
    </Carousel>
  );
}

export default CarouselView;
