import { FormEvent, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
} from "lucide-react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { principles, projects, services, studio } from "./content";

const ease = [0.16, 1, 0.3, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 54 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.9, ease },
};
type Project = (typeof projects)[number];

function OrbitalMark() {
  return (
    <div className="orbital" aria-hidden="true">
      <i />
      <i />
      <i />
      <span>J</span>
    </div>
  );
}
function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100),
    sx = useSpring(x, { stiffness: 500, damping: 38 }),
    sy = useSpring(y, { stiffness: 500, damping: 38 });
  useEffect(() => {
    const m = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    addEventListener("mousemove", m);
    return () => removeEventListener("mousemove", m);
  }, [x, y]);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />;
}
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc]);
  return (
    <header>
      <Link className="brand" to="/">
        <OrbitalMark />
        <b>{studio.name}</b>
      </Link>
      <nav className={open ? "open" : ""}>
        <Link to="/projects">Projects</Link>
        <Link to="/#studio">Studio</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#process">Process</Link>
        <Link className="nav-cta" to="/contact">
          Start a project <ArrowUpRight size={16} />
        </Link>
      </nav>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll(),
    drift = useTransform(scrollY, [0, 800], [0, 180]),
    fade = useTransform(scrollY, [0, 620], [1, 0]);
  return (
    <section className="hero" id="top">
      <div className="noise" />
      <motion.div className="aurora" style={{ y: drift }} />
      <motion.div className="hero-copy" style={{ opacity: fade }}>
        <div className="eyebrow">
          <span className="live" /> Independent digital studio{" "}
          <em>SPB / Worldwide</em>
        </div>
        <h1>
          <span>Websites</span>
          <span className="serif">with presence.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Strategy, design and technology for businesses ready to look as good
            as they actually are.
          </p>
          <a href="#work" className="round-link">
            <ArrowDownRight />
            <span>
              Selected
              <br />
              work
            </span>
          </a>
        </div>
      </motion.div>
      <div className="hero-index">
        JMK®
        <br />
        2026
      </div>
    </section>
  );
}

function ProjectVisual({
  theme,
  large = false,
}: {
  theme: string;
  large?: boolean;
}) {
  return (
    <div className={`visual ${theme} ${large ? "visual-large" : ""}`}>
      {theme === "interior" ? (
        <>
          <div className="window" />
          <div className="sofa">
            <i />
            <i />
          </div>
          <div className="lamp" />
          <span>INTERIOR / DIGITAL</span>
        </>
      ) : theme === "bank" ? (
        <>
          <div className="bank-glow" />
          <div className="bank-card">
            <small>AVAILABLE</small>
            <strong>₽ 284,900</strong>
            <div className="graph" />
          </div>
          <div className="bank-pill">
            Transfer completed <b>✓</b>
          </div>
        </>
      ) : (
        <>
          <div className="market-grid">
            {["01", "02", "03", "04"].map((n) => (
              <i key={n}>
                <small>{n}</small>
              </i>
            ))}
          </div>
          <div className="market-tag">1,204 active listings</div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article {...reveal} className={`project project-${p.theme}`}>
      <Link to={`/projects/${p.id}`}>
        <div className="project-meta">
          <span>{p.index}</span>
          <span>{p.type}</span>
          <span>{p.year}</span>
        </div>
        <ProjectVisual theme={p.theme} />
        <div className="project-copy">
          <div>
            <h3>{p.title}</h3>
            <p className="project-headline">{p.headline}</p>
          </div>
          <div>
            <p>{p.description}</p>
            <ul>
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <button aria-label={`View ${p.title}`}>
            <ArrowUpRight />
          </button>
        </div>
      </Link>
    </motion.article>
  );
}
function Work() {
  return (
    <section id="work" className="work">
      <motion.div {...reveal} className="section-head">
        <span>01 / Selected work</span>
        <h2>
          Proof lives
          <br />
          <i>in the work.</i>
        </h2>
        <p>
          A small selection of interfaces where thinking, aesthetics and
          engineering meet.
        </p>
      </motion.div>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard p={p} key={p.id} />
        ))}
      </div>
      <div className="all-work">
        <Link to="/projects">
          Explore every project <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
function Marquee() {
  return (
    <div className="marquee">
      <div>
        {Array(4)
          .fill("STRATEGY · DESIGN · DEVELOPMENT · MOTION · 3D · ")
          .join("")}
      </div>
    </div>
  );
}

function BuildSequence() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cameraScale = useTransform(
    p,
    [0, 0.18, 0.48, 0.68, 1],
    [0.52, 0.7, 1, 1.95, 3.6]
  );
  const cameraX = useTransform(
    p,
    [0, 0.2, 0.48, 0.68, 1],
    [160, 80, 0, -60, -180]
  );
  const cameraY = useTransform(
    p,
    [0, 0.2, 0.48, 0.68, 1],
    [120, 55, 0, 40, 310]
  );
  const cameraRX = useTransform(p, [0, 0.3, 0.52, 0.7], [58, 30, 0, 0]);
  const cameraRY = useTransform(p, [0, 0.3, 0.52, 0.7], [-38, -18, 0, 0]);
  const cameraRZ = useTransform(
    p,
    [0, 0.28, 0.52, 0.72, 1],
    [-7, -3, 0, 1.5, 0]
  );
  const frameOpacity = useTransform(p, [0, 0.05, 0.78, 0.92], [0, 1, 1, 0]);
  const wireZ = useTransform(p, [0, 0.22], [-480, 0]);
  const wireO = useTransform(p, [0, 0.12, 0.42], [1, 1, 0]);
  const navY = useTransform(p, [0.08, 0.24], [-180, 0]);
  const navO = useTransform(p, [0.06, 0.2], [0, 1]);
  const titleX = useTransform(p, [0.13, 0.3], [-520, 0]);
  const titleO = useTransform(p, [0.12, 0.25], [0, 1]);
  const accentX = useTransform(p, [0.18, 0.34], [520, 0]);
  const accentO = useTransform(p, [0.18, 0.3], [0, 1]);
  const ctaScale = useTransform(p, [0.24, 0.39], [0, 1]);
  const ctaRotate = useTransform(p, [0.24, 0.39], [-180, 0]);
  const card1Y = useTransform(p, [0.28, 0.43], [400, 0]);
  const card2Y = useTransform(p, [0.31, 0.46], [520, 0]);
  const card3Y = useTransform(p, [0.34, 0.49], [640, 0]);
  const siteScroll = useTransform(
    p,
    [0.58, 0.72, 0.84, 1],
    [0, -420, -850, -1320]
  );
  const copyO = useTransform(p, [0, 0.12, 0.42, 0.54], [1, 1, 1, 0]);
  const copyX = useTransform(p, [0.42, 0.56], [0, -160]);
  const finalO = useTransform(p, [0.76, 0.9], [0, 1]);
  const progress = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <section ref={ref} id="build" className="build-sequence">
      <div className="build-sticky">
        <motion.div className="build-copy" style={{ opacity: copyO, x: copyX }}>
          <span>Your business, transformed</span>
          <h2>
            Imagine this
            <br />
            was <i>yours.</i>
          </h2>
          <p>
            Keep scrolling. We build the idea, reveal the experience, then take
            you through it.
          </p>
        </motion.div>
        <div className="build-stage">
          <motion.div
            className="website-world"
            style={{
              scale: cameraScale,
              x: cameraX,
              y: cameraY,
              rotateX: cameraRX,
              rotateY: cameraRY,
              rotateZ: cameraRZ,
              opacity: frameOpacity,
            }}
          >
            <motion.div
              className="wire-plane"
              style={{ z: wireZ, opacity: wireO }}
            >
              <i />
              <i />
              <i />
              <i />
              <i />
              <span>STRUCTURE / 12 COL</span>
            </motion.div>
            <div className="living-browser">
              <div className="living-chrome">
                <i />
                <i />
                <i />
                <span>yourbusiness.world / new-presence</span>
              </div>
              <motion.div className="living-site" style={{ y: siteScroll }}>
                <motion.div
                  className="living-nav"
                  style={{ y: navY, opacity: navO }}
                >
                  <b>YOUR®</b>
                  <div>
                    <span>Story</span>
                    <span>Offer</span>
                    <span>Proof</span>
                  </div>
                  <button>Begin ↗</button>
                </motion.div>
                <section className="living-hero">
                  <motion.small style={{ opacity: titleO }}>
                    A CONCEPT FOR YOUR NEXT CHAPTER
                  </motion.small>
                  <motion.h3 style={{ x: titleX, opacity: titleO }}>
                    YOUR BUSINESS
                    <br />
                    <em>belongs here.</em>
                  </motion.h3>
                  <motion.div
                    className="living-orb"
                    style={{ x: accentX, opacity: accentO }}
                  >
                    <i />
                    <i />
                    <i />
                    <b>YOURS</b>
                  </motion.div>
                  <motion.button style={{ scale: ctaScale, rotate: ctaRotate }}>
                    ENTER ↘
                  </motion.button>
                  <div className="living-scroll">
                    SCROLL TO IMAGINE <i />
                  </div>
                </section>
                <section className="living-cards">
                  <motion.article style={{ y: card1Y }}>
                    <span>01 / DESIRE</span>
                    <strong>MAKE THEM FEEL</strong>
                    <i />
                    <p>Turn first impressions into curiosity.</p>
                  </motion.article>
                  <motion.article style={{ y: card2Y }}>
                    <span>02 / CLARITY</span>
                    <strong>MAKE IT OBVIOUS</strong>
                    <i />
                    <p>Give every offer a compelling place.</p>
                  </motion.article>
                  <motion.article style={{ y: card3Y }}>
                    <span>03 / ACTION</span>
                    <strong>MAKE THEM MOVE</strong>
                    <i />
                    <p>Guide attention towards a decision.</p>
                  </motion.article>
                </section>
                <section className="living-showcase">
                  <div className="showcase-copy">
                    <small>ONE SYSTEM / EVERY AMBITION</small>
                    <h4>
                      Whatever you make,
                      <br />
                      <em>make it unforgettable.</em>
                    </h4>
                    <p>
                      Hospitality. Interiors. Technology. Wellness. Culture.
                      Professional services. Your story decides the form.
                    </p>
                  </div>
                  <div className="showcase-object">
                    <i />
                    <i />
                    <i />
                    <span>
                      YOUR
                      <br />
                      WORLD
                    </span>
                  </div>
                </section>
                <section className="living-proof">
                  <div className="proof-title">
                    <small>THE EXPERIENCE</small>
                    <h4>
                      Not a page.
                      <br />
                      <em>A place.</em>
                    </h4>
                  </div>
                  <div className="proof-rail">
                    <article>
                      <span>01</span>
                      <b>DISCOVER</b>
                    </article>
                    <article>
                      <span>02</span>
                      <b>BELIEVE</b>
                    </article>
                    <article>
                      <span>03</span>
                      <b>CHOOSE</b>
                    </article>
                  </div>
                </section>
                <section className="living-statement">
                  <small>YOUR NEXT WEBSITE COULD FEEL LIKE THIS</small>
                  <h4>
                    Give the business
                    <br />
                    <em>the presence it deserves.</em>
                  </h4>
                  <button>START THE CONVERSATION ↗</button>
                  <div className="living-marquee">
                    YOUR STORY · YOUR PRESENCE · YOUR MOMENT · YOUR STORY · YOUR
                    PRESENCE ·
                  </div>
                </section>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div className="inside-label" style={{ opacity: finalO }}>
          THIS COULD BE
          <br />
          <b>YOUR DIGITAL WORLD</b>
        </motion.div>
        <div className="build-progress">
          <motion.i style={{ width: progress }} />
        </div>
        <div className="build-steps">
          <span>Skeleton</span>
          <span>Components</span>
          <span>Interface</span>
          <span>Enter</span>
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="studio">
      <div className="studio-orbit">
        <OrbitalMark />
      </div>
      <motion.div {...reveal}>
        <span className="kicker">02 / The studio</span>
        <h2>
          Small by design.
          <br />
          <i>Serious by nature.</i>
        </h2>
      </motion.div>
      <motion.div {...reveal} className="studio-grid">
        <p className="manifesto">
          JIMIKE is a founder-led digital studio creating high-end websites and
          interactive experiences for ambitious businesses.
        </p>
        <div className="founder">
          <span>Experience at scale</span>
          <strong>65M+ people reached</strong>
          <p>
            Our developers have real-world experience contributing to software
            solutions used by more than 65 million people worldwide.
          </p>
        </div>
      </motion.div>
      <div className="principles">
        {principles.map(([a, b], i) => (
          <motion.div {...reveal} key={a}>
            <span>0{i + 1}</span>
            <h3>{a}</h3>
            <p>{b}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="services">
      <motion.div {...reveal} className="section-head light">
        <span>03 / Capabilities</span>
        <h2>
          Everything necessary.
          <br />
          <i>Nothing ornamental.</i>
        </h2>
      </motion.div>
      <div className="service-list">
        {services.map((s) => (
          <motion.div {...reveal} key={s.number} className="service">
            <span>{s.number}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ArrowDownRight />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function Process() {
  return (
    <section id="process" className="process">
      <motion.div {...reveal}>
        <span className="kicker">04 / How we work</span>
        <h2>
          Clarity at
          <br />
          every stage.
        </h2>
      </motion.div>
      <div className="steps">
        {[
          ["01", "Discover", "Business, audience, market and ambition."],
          ["02", "Direct", "Positioning, concept and visual territory."],
          ["03", "Design", "Interfaces, content, motion and prototypes."],
          ["04", "Build", "Responsive development and integration."],
          ["05", "Launch", "Testing, analytics, handover and support."],
        ].map(([n, t, d]) => (
          <motion.div {...reveal} key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer id="contact">
      <div className="availability">
        <span className="live" />
        {studio.availability}
      </div>
      <h2>
        Have something
        <br />
        <i>worth building?</i>
      </h2>
      <Link className="email" to="/contact">
        Tell us about your project
        <ArrowUpRight />
      </Link>
      <div className="footer-bottom">
        <span>© 2026 {studio.name}</span>
        <span>{studio.location}</span>
        <div>
          <a href={studio.telegram}>Telegram</a>
          <a href={studio.linkedin}>LinkedIn</a>
          <a href={studio.github}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <BuildSequence />
      <Marquee />
      <Studio />
      <Services />
      <Process />
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <main className="inner-page projects-page">
      <section className="page-hero">
        <span>Selected archive / 2025–2026</span>
        <h1>
          Projects <i>with a pulse.</i>
        </h1>
        <p>
          Products, identities and digital spaces shaped through strategy,
          design and engineering.
        </p>
      </section>
      <section className="project-archive">
        {projects.map((p) => (
          <ProjectCard p={p} key={p.id} />
        ))}
      </section>
      <Footer />
    </main>
  );
}

function GalleryPanel({
  theme,
  label,
  i,
}: {
  theme: string;
  label: string;
  i: number;
}) {
  return (
    <div className={`gallery-panel gallery-${theme} g-${i}`}>
      <div className="gallery-ui">
        <small>0{i + 1}</small>
        <strong>{label}</strong>
        <span>
          {theme === "interior"
            ? "FORM / MATERIAL / LIGHT"
            : theme === "bank"
            ? "DATA / CLARITY / TRUST"
            : "DISCOVERY / SPEED / SYSTEM"}
        </span>
      </div>
    </div>
  );
}
function CaseStudy() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main className={`case-study case-${p.theme}`}>
      <section className="case-hero">
        <Link className="back" to="/projects">
          <ArrowLeft /> All projects
        </Link>
        <div className="case-kicker">
          <span>{p.type}</span>
          <span>{p.year}</span>
        </div>
        <h1>{p.title}</h1>
        <p>{p.headline}</p>
        <ul>
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <ProjectVisual theme={p.theme} large />
      <section className="case-story">
        <motion.div {...reveal}>
          <span>01 / Challenge</span>
          <p>{p.challenge}</p>
        </motion.div>
        <motion.div {...reveal}>
          <span>02 / The idea</span>
          <p>{p.idea}</p>
        </motion.div>
        <motion.div {...reveal}>
          <span>03 / Outcome</span>
          <p>{p.outcome}</p>
        </motion.div>
      </section>
      <section className="case-gallery">
        {p.gallery.map((g, i) => (
          <motion.div {...reveal} key={g}>
            <GalleryPanel theme={p.theme} label={g} i={i} />
          </motion.div>
        ))}
      </section>
      <section className="next-project">
        <span>Next project</span>
        <Link to={`/projects/${next.id}`}>
          {next.title}
          <ArrowRight />
        </Link>
      </section>
      <Footer />
    </main>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget),
      subject = encodeURIComponent(`New project enquiry — ${data.get("name")}`),
      body = encodeURIComponent(
        `Name: ${data.get("name")}\nCompany: ${data.get(
          "company"
        )}\nEmail: ${data.get("email")}\nBudget: ${data.get(
          "budget"
        )}\nTimeline: ${data.get("timeline")}\n\nProject:\n${data.get(
          "message"
        )}`
      );
    setSent(true);
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
  }
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <span>Start a project / 2026</span>
        <h1>
          Let’s make
          <br />
          <i>something felt.</i>
        </h1>
        <p>
          Tell us where the business is now, where it needs to go and why this
          project matters.
        </p>
        <div className="contact-options">
          <a href={studio.telegram}>
            Book through Telegram <ArrowUpRight />
          </a>
          <a href={`mailto:${studio.email}`}>
            Email directly <ArrowUpRight />
          </a>
        </div>
      </section>
      <section className="contact-form-wrap">
        {sent ? (
          <div className="sent">
            <Check />
            <h2>Your email app should now be open.</h2>
            <p>
              Review the prepared message and press send. If nothing opened,
              email us directly at {studio.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label>
              Your name
              <input required name="name" placeholder="Name" />
            </label>
            <label>
              Company / project
              <input name="company" placeholder="Business name" />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
              />
            </label>
            <div className="form-row">
              <label>
                Indicative budget
                <select name="budget">
                  <option>₽150k–₽300k</option>
                  <option>₽300k–₽600k</option>
                  <option>₽600k+</option>
                  <option>Not decided</option>
                </select>
              </label>
              <label>
                Ideal timeline
                <select name="timeline">
                  <option>4–6 weeks</option>
                  <option>6–10 weeks</option>
                  <option>10+ weeks</option>
                  <option>Flexible</option>
                </select>
              </label>
            </div>
            <label>
              What are we building?
              <textarea
                required
                name="message"
                rows={7}
                placeholder="The situation, ambition and what success would look like..."
              />
            </label>
            <button type="submit">
              Prepare enquiry <ArrowUpRight />
            </button>
            <small>
              This prepares an email in your default email application. No
              information is stored on this website.
            </small>
          </form>
        )}
      </section>
    </main>
  );
}
function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <Link to="/">
        Return home <ArrowRight />
      </Link>
    </main>
  );
}
function AppRoutes() {
  return (
    <>
      <ScrollTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <AppRoutes />
    </BrowserRouter>
  );
}
