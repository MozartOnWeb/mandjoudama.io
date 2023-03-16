import Link from "next/link";
import Image from "next/image";

import Image1 from "../../public/assets/images/1.jpg";

export const LittleBlog = () => {
  return (
    <div className="little-blog">
      <Link href={""}>
        <Image className="post-image" src={Image1} alt="post-image" />
      </Link>

      <Link className="category" href={""}>
        Branding
      </Link>

      <Link className="description" href={""}>
        Things to Look for When Comparing Branding Alternatives.
      </Link>
    </div>
  );
};
