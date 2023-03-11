"use client";

import Link from "next/link";

type Props = {
  letters: string[];
  style?: string;
};

export const AnimatedButton = ({ letters, style }: Props) => {
  return (
    <Link className={`animated-button ${style}`} href={""}>
      <span className="one">
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </span>
      <span className="two">
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </span>
    </Link>
  );
};
