import Link from "next/link";

const SkipLink = (props: { href: string; text?: string }) => {
  return (
    <Link
      href={props.href}
      aria-label={props.text ?? "Skip to main content"}
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      {props.text ?? "Skip to main content"}
    </Link>
  );
};

export default SkipLink;
