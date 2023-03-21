import { LittleBlog } from "@/components/blogs/LittleBlog";
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

export const LatestPosts = () => {
  return (
    <section className="home-latest-posts-section">
      <div className="latest-posts-headline">
        <h2>Latest Posts</h2>
        <AnimatedButton
          href="/blogs"
          style="outline"
          letters={["v", "i", "e", "w", "\u00a0", "a", "l", "l"]}
        />
      </div>

      <SectionSeparator />

      <div className="posts-container">
        <LittleBlog />
        <SectionSeparator />
        <VerticalSeparator />
        <LittleBlog />
        <SectionSeparator />
        <VerticalSeparator />
        <LittleBlog />
      </div>
    </section>
  );
};
