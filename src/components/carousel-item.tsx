type ComponentProps = {
  description: string;
  title: string;
  width: number;
  captionContainerClassName?: string;
  children?: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
};

const CarouselItem = ({
  description,
  title,
  width,
  captionContainerClassName,
  children,
  className,
  image,
}: ComponentProps): React.ReactNode => {
  return (
    <div className={className} style={{ minWidth: width }}>
      {image}
      <div className={captionContainerClassName} style={{ minWidth: width }}>
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default CarouselItem;
