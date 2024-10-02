import { Button, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { FC } from "react";

type Props = {
  captionContainerClassName?: string;
  children?: React.ReactNode;
  className?: string;
  description: string;
  image?: React.ReactNode;
  title: string;
  width: number;
};

const CarouselItem: FC<Props> = (props) => {
  return (
    <div className={props.className} style={{ minWidth: props.width }}>
      {props.image}
      <div
        className={props.captionContainerClassName}
        style={{ minWidth: props.width }}
      >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.children}
      </div>
    </div>
  );
};

export default CarouselItem;
