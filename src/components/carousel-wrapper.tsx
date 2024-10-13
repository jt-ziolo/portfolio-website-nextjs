"use client";

import { Carousel, CarouselProps } from "nuka-carousel";

const CarouselWrapper = ({ children, ...props }: CarouselProps) => {
  return <Carousel {...props}>{children}</Carousel>;
};

export default CarouselWrapper;
