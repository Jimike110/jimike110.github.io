import { ArrowRight, ArrowUpRight } from "lucide-react";
import coastHouse from "./assets/atelier-noma-coast.jpg";
import townhouse from "./assets/atelier-noma-townhouse.jpg";
import hotel from "./assets/atelier-noma-hotel.jpg";

export default function EmbeddedWebsite() {
  return (
    <div className="noma-site">
      <nav className="noma-nav">
        <a className="noma-brand" href="#noma-top">ATELIER NOMA <span>ARCHITECTURE + INTERIORS</span></a>
        <div><a href="#noma-projects">Projects</a><a href="#noma-studio">Studio</a><a href="#noma-services">Services</a></div>
        <a className="noma-contact" href="#noma-contact">Start a project <ArrowUpRight size={13} /></a>
      </nav>

      <section className="noma-hero" id="noma-top">
        <img src={coastHouse} alt="Casa Areia, a limestone coastal residence" />
        <div className="noma-hero-copy">
          <p>Architecture rooted in place.<br />Interiors shaped around life.</p>
          <h1>Spaces for<br /><em>living well.</em></h1>
        </div>
        <div className="noma-hero-meta"><span>Lisbon / London / Worldwide</span><span>Casa Areia, Comporta · 2026</span></div>
      </section>

      <section className="noma-intro" id="noma-studio">
        <div><small>STUDIO / 01</small><span>EST. 2012</span></div>
        <p>Atelier Noma is an architecture and interior design practice creating thoughtful homes, hotels and gathering places across Europe.</p>
        <p className="noma-intro-note">We work from the inside out: beginning with how a place should feel, then resolving every decision from its position in the landscape to the touch of a door handle.</p>
        <a href="#noma-services">Discover the studio <ArrowRight size={15} /></a>
      </section>

      <section className="noma-projects" id="noma-projects">
        <div className="noma-section-head"><small>SELECTED PROJECTS / 02</small><h2>Recent places,<br /><em>made to last.</em></h2><p>Residential, hospitality and cultural work shaped by climate, material and the rituals of everyday life.</p></div>
        <article className="noma-feature">
          <div className="noma-feature-image"><img src={coastHouse} alt="Casa Areia residence facing the Atlantic" /></div>
          <div className="noma-project-info"><span>01 / RESIDENTIAL</span><h3>Casa Areia</h3><p>Comporta, Portugal · 2026</p><a href="#noma-contact">View project <ArrowUpRight size={14} /></a></div>
          <div className="noma-project-detail"><p>A coastal home organised as a sequence of sheltered courtyards. Local limestone, oak and hand-finished plaster temper the Atlantic light while deep thresholds create rooms between inside and out.</p><dl><div><dt>620 m²</dt><dd>AREA</dd></div><div><dt>2023–26</dt><dd>DESIGN + BUILD</dd></div><div><dt>Architecture</dt><dd>SCOPE</dd></div><div><dt>Private</dt><dd>CLIENT</dd></div></dl></div>
        </article>
        <div className="noma-project-grid">
          <article className="noma-project-card"><div><img src={hotel} alt="Palacio do Sul landscape hotel at dusk" /></div><div><span>02 / HOSPITALITY</span><h3>Palácio do Sul</h3><p>Alentejo, Portugal · 2025</p><small>18 suites · Restaurant · Landscape</small></div></article>
          <article className="noma-project-card"><div><img src={townhouse} alt="Calçada House restored townhouse interior" /></div><div><span>03 / RESIDENTIAL</span><h3>Calçada House</h3><p>Lisbon, Portugal · 2025</p><small>Restoration · Interiors · Furniture</small></div></article>
        </div>
      </section>

      <section className="noma-profile">
        <div className="noma-profile-image"><img src={townhouse} alt="Natural materials inside Calçada House" /></div>
        <div className="noma-profile-copy"><small>THE PRACTICE</small><h2>Local knowledge.<br /><em>International perspective.</em></h2><p>Founded by architect Marta Vieira and interior designer Noah Mercer, our 16-person studio brings architecture, interiors and objects together under one roof.</p><p>We collaborate closely with craftspeople, engineers, landscape designers and artists, building a team around the particular needs of each commission.</p><div><span>ARB / OA REGISTERED</span><span>RIBA CHARTERED PRACTICE</span><span>1% FOR THE PLANET</span></div></div>
      </section>

      <section className="noma-values">
        <small>OUR APPROACH</small>
        <blockquote>“The most enduring spaces feel inevitable: unmistakably of their place, generous to the people who use them, and better with age.”</blockquote>
        <p>MARTA VIEIRA / FOUNDING DIRECTOR</p>
      </section>

      <section className="noma-services" id="noma-services">
        <div className="noma-section-head"><small>CAPABILITIES / 03</small><h2>From first thought<br /><em>to final detail.</em></h2></div>
        <div className="noma-service-list">
          <article><span>01</span><h3>Architecture</h3><p>New-build homes, sensitive renovations, hospitality and cultural spaces from feasibility through completion.</p><b>FEASIBILITY · CONCEPT · PLANNING · DELIVERY</b></article>
          <article><span>02</span><h3>Interior architecture</h3><p>Spatial planning, bespoke joinery, kitchens, bathrooms and material palettes conceived as one whole.</p><b>SPACE · MATERIAL · LIGHT · DETAIL</b></article>
          <article><span>03</span><h3>Interior design</h3><p>Furniture, lighting, textiles, art and objects selected to make a finished space feel collected rather than decorated.</p><b>FURNITURE · LIGHTING · ART · STYLING</b></article>
        </div>
      </section>

      <section className="noma-proof">
        <div><span>14</span><p>years in practice</p></div><div><span>38</span><p>completed projects</p></div><div><span>9</span><p>countries</p></div><div><span>17</span><p>design awards</p></div>
      </section>

      <section className="noma-recognition"><small>RECOGNITION</small><div><span>Dezeen Awards</span><b>Residential interior / Longlist</b><i>2026</i></div><div><span>ArchDaily</span><b>Building of the year / Nominee</b><i>2026</i></div><div><span>Wallpaper*</span><b>Architects Directory</b><i>2025</i></div><div><span>Domus</span><b>New practices shaping Europe</b><i>2024</i></div></section>

      <section className="noma-journal">
        <div className="noma-section-head"><small>FIELD NOTES / 04</small><h2>Ideas from<br /><em>the studio.</em></h2></div>
        <div><article><span>ESSAY / 8 MIN</span><h3>Why natural materials make better buildings</h3><p>On patina, repair and designing for the long life.</p></article><article><span>VISIT / 5 MIN</span><h3>A maker’s guide to Lisbon</h3><p>Six workshops keeping regional craft alive.</p></article><article><span>DIARY / 3 MIN</span><h3>On site at Casa Areia</h3><p>Stone, salt air and the final weeks in Comporta.</p></article></div>
      </section>

      <section className="noma-contact-section" id="noma-contact">
        <small>NEW PROJECTS / 05</small>
        <h2>Have a place<br /><em>in mind?</em></h2>
        <p>We are currently accepting residential and hospitality commissions beginning in early 2027.</p>
        <a href="mailto:studio@atelier-noma.com">studio@atelier-noma.com <ArrowUpRight size={16} /></a>
        <div className="noma-footer"><b>ATELIER NOMA</b><span>Lisbon · +351 210 000 184</span><span>London · +44 20 0000 4810</span><span>Instagram · Pinterest</span><span>© 2026</span></div>
      </section>
    </div>
  );
}
