import { LogoSvg } from "@/public/assets/icons";

export const OurClients = () => {
  return (
    <section className="our-clients-section">
      <h2>My Clients</h2>
      <span className="vertical-bar" />
      <div className="clients-logo-container">
        <LogoSvg />
        <LogoSvg />
        <LogoSvg />
        <LogoSvg />
        <LogoSvg />
        <LogoSvg />
      </div>
    </section>
  );
};
