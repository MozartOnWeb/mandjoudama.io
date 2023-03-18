import Link from "next/link";
import Image from "next/image";

import Image1 from "../../public/assets/images/1.jpg";

type Props = {
  href?: string;
};

export const LittleBlog = ({ href }: Props) => {
  return (
    <div className="little-blog">
      <Link href={href ? href : ""}>
        <Image className="post-image" src={Image1} alt="post-image" />
      </Link>

      <p className="category">Branding</p>

      <Link className="description" href={href ? href : ""}>
        Things to Look for When Comparing Branding Alternatives.
      </Link>
    </div>
  );
};
