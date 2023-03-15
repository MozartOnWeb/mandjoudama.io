import { VerticalSeparator } from "@/components/separators/Separators";

export default function Work() {
  return (
    <main className="single-work-page">
      <section className="hero">
        <div className="left">
          <h1>DANCING STARS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet justo. Dui nunc mattis enim
            ut tellus elementum. Cum sociis natoque penatibus et magnis dis. In
            mollis nunc sed id semper risus.
          </p>
        </div>

        {/* SEPARATOR */}
        <VerticalSeparator />

        <div className="right">
          <div className="work-detail">
            <p>Client</p>
            <p>Tiecoura N&apos;Daou</p>
          </div>
          <div className="work-detail">
            <p>Year</p>
            <p>2021</p>
          </div>
          <div className="work-detail">
            <p>TIMELINE</p>
            <p>8 weeks</p>
          </div>
          <div className="work-detail">
            <p>Services</p>
            <div className="work-detail-services">
              <p>Web dev</p>
              <p>web design</p>
              <p>content</p>
            </div>
          </div>
          <div className="work-detail">
            <p>Website</p>
            <p>tiecourandaou.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
