import Link from "next/link";

interface ComponentProps {
  href: string;
  text?: string;
}

const SkipLink = ({ href, text }: ComponentProps) => {
  return (
    <Link
      href={href}
      aria-label={text ?? "Skip to main content"}
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      {text ?? "Skip to main content"}
    </Link>
  );
};

export default SkipLink;
