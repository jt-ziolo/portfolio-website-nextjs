"use client";

import { Carousel, CarouselProps } from "nuka-carousel";

export default function CarouselWrapper({ children, ...props }: CarouselProps) {
  return <Carousel {...props}>{children}</Carousel>;
}
