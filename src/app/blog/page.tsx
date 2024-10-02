import { Button } from "@radix-ui/themes";
import styles from "./page.module.css";

export default function Blog() {
  const PostPreviewCard = (props: { key: string }) => {
    return (
      <article key={props.key} className={styles.card}>
        <h3>Post title</h3>
        <small>September 25, 2024</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vero facere officiis temporibus quae...
        </p>
        <Button variant="outline" size="4">
          Read more
        </Button>
      </article>
    );
  };

  // Page
  return (
    <main className={`sideMargins`}>
      <h2 className={styles.heading}>Blog Posts</h2>
      <section className={styles.cardsContainer}>
        <PostPreviewCard key={"a"} />
        <PostPreviewCard key={"b"} />
        <PostPreviewCard key={"c"} />
        <PostPreviewCard key={"d"} />
        <PostPreviewCard key={"e"} />
        <PostPreviewCard key={"f"} />
        <PostPreviewCard key={"g"} />
        <PostPreviewCard key={"h"} />
        <PostPreviewCard key={"i"} />
        <PostPreviewCard key={"j"} />
        <PostPreviewCard key={"k"} />
      </section>
    </main>
  );
}
