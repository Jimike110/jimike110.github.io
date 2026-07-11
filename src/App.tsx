import { FormEvent, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
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
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Menu,
  Minus,
  Plus,
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
import EmbeddedWebsite from "./EmbeddedWebsite";

const ease = [0.16, 1, 0.3, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 54 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.9, ease },
};
type Project = (typeof projects)[number];
const currentYear = new Date().getFullYear();

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
        JIMIKE®
        <br />
        {currentYear}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article {...reveal} className="project">
      <Link to={`/projects/${p.id}`}>
        <div className="project-meta">
          <span>{p.index}</span>
          <span>{p.type}</span>
          <span>{p.year}</span>
        </div>
        <div className="project-image">
          <img src={p.coverImage} alt={p.coverAlt} loading="lazy" />
        </div>
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
        {projects
          .filter((p) => p.featured)
          .map((p) => (
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
  const siteRef = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);
  const [siteTravel, setSiteTravel] = useState(0);
  const [buildPhase, setBuildPhase] = useState<"intro" | "site" | "outro">(
    "intro"
  );
  useEffect(() => {
    const mq = matchMedia("(max-width: 800px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const measure = () => {
      if (!siteRef.current) return;
      setSiteTravel(
        Math.max(0, siteRef.current.scrollHeight - window.innerHeight + 42)
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (siteRef.current) observer.observe(siteRef.current);
    addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      removeEventListener("resize", measure);
    };
  }, []);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(p, "change", (latest) => {
    const next = latest < 0.18 ? "intro" : latest > 0.9 ? "outro" : "site";
    setBuildPhase((current) => (current === next ? current : next));
  });
  const cameraScale = useTransform(
    p,
    [0, 0.14, 0.34, 0.43, 0.89, 1],
    mobile ? [0.36, 0.42, 0.8, 1, 1, 0.36] : [0.38, 0.5, 0.86, 1, 1, 0.38]
  );
  const cameraX = useTransform(
    p,
    [0, 0.24, 0.43, 0.89, 1],
    mobile ? [42, 28, 0, 0, 42] : [300, 150, 0, 0, 300]
  );
  const cameraY = useTransform(
    p,
    [0, 0.24, 0.43, 0.89, 1],
    mobile ? [190, 120, 0, 0, 190] : [80, 24, 0, 0, 80]
  );
  const cameraRX = useTransform(
    p,
    [0, 0.22, 0.43, 0.89, 1],
    [mobile ? 18 : 44, 12, 0, 0, mobile ? 18 : 44]
  );
  const cameraRY = useTransform(
    p,
    [0, 0.22, 0.43, 0.89, 1],
    [mobile ? -10 : -28, -7, 0, 0, mobile ? -10 : -28]
  );
  const cameraRZ = useTransform(
    p,
    [0, 0.24, 0.43, 0.89, 1],
    [-4, -1, 0, 0, -4]
  );
  const siteScroll = useTransform(p, [0.46, 0.84], [0, -siteTravel]);
  const buildUiO = useTransform(p, [0.35, 0.43], [1, 0]);
  const progress = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <section ref={ref} id="build" className="build-sequence">
      <div className="build-sticky">
        {buildPhase === "intro" && (
          <motion.div
            className="build-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>Your business, transformed</span>
            <h2>
              Imagine this
              <br />
              was <i>yours.</i>
            </h2>
            <p>
              Keep scrolling. We build the idea, reveal the experience, then
              take you through it.
            </p>
          </motion.div>
        )}
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
            }}
          >
            <div className="living-browser">
              <div className="living-chrome">
                <i />
                <i />
                <i />
                <span>yourbusiness.world / new-presence</span>
              </div>
              <motion.div
                ref={siteRef}
                className="living-site"
                style={{ y: siteScroll }}
              >
                <EmbeddedWebsite />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {buildPhase === "outro" && (
          <motion.div
            className="build-return"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>JIMIKE® / DIGITAL STUDIO</span>
            <h2>
              Built for real
              <br />
              <i>business.</i>
            </h2>
            <p>
              Strategy, design and technology shaped into one complete
              experience.
            </p>
          </motion.div>
        )}
        <motion.div className="build-progress" style={{ opacity: buildUiO }}>
          <motion.i style={{ width: progress }} />
        </motion.div>
        <motion.div className="build-steps" style={{ opacity: buildUiO }}>
          <span>Structure</span>
          <span>Direction</span>
          <span>Enter site</span>
          <span>Experience</span>
        </motion.div>
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
        <span>© {currentYear} {studio.name}</span>
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
        <span>Selected archive / 2025–{currentYear}</span>
        <h1>
          Projects <i>with a pulse.</i>
        </h1>
        <p>
          Products, identities and digital spaces shaped through strategy,
          design and engineering.
        </p>
      </section>
      <section className="project-archive">
        <div className="projects">
          {projects.map((p) => (
            <ProjectCard p={p} key={p.id} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

type GalleryItem = Project["gallery"][number];

function ImageViewer({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const item = items[index];
  const move = (delta: number) => {
    setZoom(1);
    onIndex((index + delta + items.length) % items.length);
  };
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "+" || event.key === "=")
        setZoom((value) => Math.min(3, value + 0.25));
      if (event.key === "-") setZoom((value) => Math.max(1, value - 0.25));
    };
    addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  });
  return (
    <motion.div
      className="image-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image viewer`}
    >
      <button
        className="viewer-close"
        onClick={onClose}
        aria-label="Close viewer"
      >
        <X />
      </button>
      {items.length > 1 && (
        <>
          <button
            className="viewer-prev"
            onClick={() => move(-1)}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            className="viewer-next"
            onClick={() => move(1)}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </>
      )}
      <div
        className="viewer-canvas"
        onWheel={(event) => {
          event.preventDefault();
          setZoom((value) =>
            Math.min(3, Math.max(1, value + (event.deltaY < 0 ? 0.2 : -0.2)))
          );
        }}
      >
        <motion.img
          src={item.src}
          alt={item.alt}
          animate={{ scale: zoom }}
          transition={{ duration: 0.2 }}
          drag={zoom > 1}
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
        />
      </div>
      <div className="viewer-meta">
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
        <div>
          <strong>{item.title}</strong>
          <p>{item.caption}</p>
        </div>
      </div>
      <div className="viewer-tools">
        <button
          onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
          aria-label="Zoom out"
        >
          <Minus />
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button
          onClick={() => setZoom((value) => Math.min(3, value + 0.25))}
          aria-label="Zoom in"
        >
          <Plus />
        </button>
        <button onClick={() => setZoom(1)} aria-label="Fit image">
          <Maximize2 />
        </button>
      </div>
    </motion.div>
  );
}
function CaseStudy() {
  const { id } = useParams();
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const p = projects.find((x) => x.id === id);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main className="case-study">
      <section className="case-hero">
        <Link className="back" to="/projects">
          <ArrowLeft /> All projects
        </Link>
        <div className="case-kicker">
          <span>{p.type}</span>
          <span>{p.year}</span>
        </div>
        <h1 className="project-title">{p.title}</h1>
        <p>{p.headline}</p>
        <ul>
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Link className="visit-site" to={p.url} target="_blank" rel="noopener noreferrer">
          Visit <ArrowUpRight />
        </Link>
      </section>
      <button
        className="case-cover"
        onClick={() => setViewerIndex(0)}
        aria-label={`View ${p.title} cover image`}
      >
        <img src={p.coverImage} alt={p.coverAlt} />
      </button>
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
          <motion.button
            {...reveal}
            className="gallery-image"
            key={g.src}
            onClick={() => setViewerIndex(i)}
            aria-label={`Open ${g.title} in image viewer`}
          >
            <img src={g.src} alt={g.alt} loading="lazy" />
            <span>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <strong>{g.title}</strong>
              <em>{g.caption}</em>
            </span>
          </motion.button>
        ))}
      </section>
      <AnimatePresence>
        {viewerIndex !== null && (
          <ImageViewer
            items={p.gallery}
            index={viewerIndex}
            onIndex={setViewerIndex}
            onClose={() => setViewerIndex(null)}
          />
        )}
      </AnimatePresence>
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
        )}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nBudget: ${data.get(
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
        <span>Start a project / {currentYear}</span>
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
              email us directly at <Link to={`mailto:${studio.email}`}>{studio.email}</Link>.
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
            <label>
              Phone (optional)
              <input type="tel" name="phone" placeholder="+7 999 999 99 99" />
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
