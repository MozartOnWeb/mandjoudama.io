type Props = {
  letters: string[];
  style?: undefined | "outline";
  href?: string;
};

export const OnPageLink = ({ letters, style, href }: Props) => {
  return (
    <a className={`animated-button ${style}`} href={href ? href : ""}>
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
    </a>
  );
};
