import { useEffect } from "react";

/* ------------------------------------------------------------------ *
 * Easily-editable constants
 * ------------------------------------------------------------------ */
const CONTACT_EMAIL = "popper.b@gmail.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Community Compute — Introduction"
)}`;
// The white paper PDF lives in /public. Respect the Vite base path so the
// link resolves whether the site is served from "/" or a subpath.
const WHITEPAPER_URL = `${import.meta.env.BASE_URL}community-compute-white-paper.pdf`;

/* ------------------------------------------------------------------ *
 * Small building blocks
 * ------------------------------------------------------------------ */
const Diamond = ({ className = "" }: { className?: string }) => (
  <span className={`cc-diamond ${className}`} aria-hidden />
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="cc-eyebrow">
    <Diamond />
    {children}
  </span>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="cc-reveal">
    <div className="font-display text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-[hsl(var(--cc-text))]">
      {value}
    </div>
    <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--cc-muted))]">
      {label}
    </p>
  </div>
);

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */
const CommunityCompute = () => {
  // Scroll-reveal for anything marked .cc-reveal
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".cc-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ---------------------------------------------------------- Header */}
      <header className="sticky top-0 z-40 border-b border-[hsl(var(--cc-line)/0.6)] bg-[hsl(var(--cc-ink)/0.72)] backdrop-blur-md">
        <div className="cc-container flex h-16 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.24em] text-[hsl(var(--cc-text))] no-underline"
          >
            <Diamond />
            Community Compute
          </a>
          <nav className="flex items-center gap-6 text-[13px] text-[hsl(var(--cc-muted))]">
            <a
              href="#thesis"
              className="hidden text-inherit no-underline transition-colors hover:text-[hsl(var(--cc-text))] sm:inline"
            >
              Thesis
            </a>
            <a
              href="#model"
              className="hidden text-inherit no-underline transition-colors hover:text-[hsl(var(--cc-text))] sm:inline"
            >
              Model
            </a>
            <a
              href={MAILTO}
              className="text-[hsl(var(--cc-text))] no-underline transition-colors hover:text-[hsl(var(--cc-accent))]"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      {/* ---------------------------------------------------------- Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-12%] top-[-18%] h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--cc-accent) / 0.42), transparent 62%)",
          }}
        />
        <div className="cc-container relative pb-24 pt-20 sm:pt-28">
          <div className="max-w-[900px]">
            <div className="cc-reveal">
              <Eyebrow>Community-first renewable development for the AI era</Eyebrow>
            </div>
            <h1 className="cc-reveal cc-display mt-7 text-[clamp(2.6rem,6.4vw,5rem)]">
              The power the AI era needs,
              <br className="hidden sm:block" /> built where communities{" "}
              <em className="italic text-[hsl(var(--cc-accent))]">want</em> it.
            </h1>
            <p className="cc-reveal mt-8 max-w-[64ch] text-[clamp(1.05rem,1.7vw,1.28rem)] leading-relaxed text-[hsl(var(--cc-muted))]">
              A once-in-a-generation compute buildout — capital rivaling the
              railroads — is frozen at the county line. Community Compute
              develops community-owned solar and storage that clears the way:
              real local benefit first, and hyperscaler demand as the upside.
            </p>
            <div className="cc-reveal mt-10 flex flex-wrap items-center gap-4">
              <a href={WHITEPAPER_URL} download className="cc-btn-primary">
                Download the white paper
              </a>
              <a href={MAILTO} className="cc-btn-ghost">
                Get in touch
              </a>
            </div>
            <p className="cc-reveal mt-10 text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--cc-faint))]">
              Confidential — for discussion only
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Opportunity */}
      <section className="border-t border-[hsl(var(--cc-line)/0.5)] bg-[hsl(var(--cc-ink-2))]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>The opportunity</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[22ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Hyperscalers call compute existential. Communities are saying no.
          </h2>
          <p className="cc-reveal mt-7 max-w-[68ch] text-[1.05rem] leading-relaxed text-[hsl(var(--cc-muted))]">
            The pipeline is on ice, and the price of ready power keeps climbing.
            Chips and capital are available; a permitted site with energy
            attached — and a community that consents to it — is not. Every
            project stuck in the logjam is a claim on that value, waiting for a
            developer who can clear the community checkpoint.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              value="$130B+"
              label="of data-center projects blocked or delayed by local opposition in Q1 2026 alone — 75 projects in three months."
            />
            <Stat
              value="~20%"
              label="of the entire U.S. data-center pipeline frozen by the Texas grid audit; New York's moratorium halted $10B more."
            />
            <Stat
              value="70%"
              label="of Americans oppose a data center near them — majorities of both parties, across 49 states."
            />
            <Stat
              value="$35M+"
              label="per megawatt, per year — what ready compute now rents for at the top of the market."
            />
          </div>
          <p className="cc-reveal mt-12 text-[12px] leading-relaxed text-[hsl(var(--cc-faint))]">
            Sources: Data Center Watch (Q1 2026); BloombergNEF on the ERCOT
            audit; NY EO 62 / Bisnow; Gallup (Mar 2026); Axios / Anthropic (2026).
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- Thesis */}
      <section id="thesis" className="border-t border-[hsl(var(--cc-line)/0.5)]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>The thesis</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[20ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Two problems that can solve each other.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="cc-reveal cc-panel p-8">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.24em] text-[hsl(var(--cc-accent))]">
                The buildout needs
              </h3>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                Sited land, power, water, transmission access, and local
                permission. The scarce input is no longer chips or capital — it
                is a permitted site with energy attached, and it is produced
                only with community consent.
              </p>
            </div>
            <div className="cc-reveal cc-panel p-8">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.24em] text-[hsl(var(--cc-gold))]">
                Rural America has
              </h3>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                Large contiguous parcels, existing transmission corridors, and
                county governments that can move quickly — alongside falling
                populations, disappearing farms, and a contracting tax base.
              </p>
            </div>
          </div>

          <div className="cc-reveal mt-10 max-w-[72ch]">
            <p className="cc-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-[hsl(var(--cc-text))]">
              Tie the AI buildout to community ownership of the renewable
              infrastructure that serves it, and the standoff resolves — while
              the towns that host it share in thirty years of revenue, not a
              one-time check.
            </p>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-[hsl(var(--cc-muted))]">
              There is an American precedent for exactly this shape of problem.
              Member-owned rural electric cooperatives electrified most of the
              countryside within two decades — because the ownership structure
              gave rural residents a durable claim on the asset. Ownership, not
              compensation, is what gets rural infrastructure built at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Model */}
      <section id="model" className="border-t border-[hsl(var(--cc-line)/0.5)] bg-[hsl(var(--cc-ink-2))]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>Our model</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[26ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Community renewables, subsidized by the hyperscalers who need the
            logjam cleared.
          </h2>
          <p className="cc-reveal mt-7 max-w-[68ch] text-[1.05rem] leading-relaxed text-[hsl(var(--cc-muted))]">
            We develop community solar and battery projects that give
            hyperscalers a concrete, credible way to meet their community
            commitments — and that subsidy transforms an already-viable
            business.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                who: "Communities",
                text: "Grant consent for projects they co-own — ownership stakes, stable revenue, lower energy costs, and land kept green.",
              },
              {
                who: "Hyperscalers",
                text: "Fund community benefit at a scale that is a rounding error against ~$700B of annual capex — and unfreeze their pipeline.",
              },
              {
                who: "States",
                text: "Supply incentives and are writing the community-benefit frameworks our model already fits.",
              },
            ].map((c) => (
              <div key={c.who} className="cc-reveal cc-panel p-8">
                <div className="mb-4 flex items-center gap-2.5">
                  <Diamond />
                  <h3 className="text-[1.15rem] text-[hsl(var(--cc-text))]">
                    {c.who}
                  </h3>
                </div>
                <p className="text-[0.98rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
            {[
              {
                k: "Base case",
                v: "Standard community-solar economics — already institutional-grade on their own.",
              },
              {
                k: "Upside",
                v: "Hyperscaler community-benefit dollars subsidize development, lift returns, and accelerate timelines.",
              },
              {
                k: "Moat",
                v: "Sub-50 MW projects are exempt from New York's freeze — ours is the lane that stayed open.",
              },
            ].map((r) => (
              <div key={r.k} className="cc-reveal border-t border-[hsl(var(--cc-line))] pt-5">
                <div className="text-[12px] font-medium uppercase tracking-[0.22em] text-[hsl(var(--cc-accent))]">
                  {r.k}
                </div>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                  {r.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Why now */}
      <section className="border-t border-[hsl(var(--cc-line)/0.5)]">
        <div className="cc-container py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="cc-reveal">
                <Eyebrow>Why now</Eyebrow>
              </div>
              <h2 className="cc-reveal cc-display mt-6 text-[clamp(2rem,4vw,3rem)]">
                The toll gate is now community benefit.
              </h2>
              <p className="cc-reveal mt-7 text-[1.05rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                Regulators and hyperscalers have converged on the same
                conclusion: buildouts proceed only where communities visibly
                gain. Our model was designed for the rules everyone is now
                writing.
              </p>
              <blockquote className="cc-reveal mt-10 border-l-2 border-[hsl(var(--cc-accent))] pl-6">
                <p className="cc-display text-[clamp(1.3rem,2.2vw,1.7rem)] italic leading-snug text-[hsl(var(--cc-text))]">
                  “Communities must benefit significantly from each project.”
                </p>
                <footer className="mt-4 text-[13px] text-[hsl(var(--cc-faint))]">
                  Mark Zuckerberg, announcing Meta's $1B community fund for
                  data-center towns
                </footer>
              </blockquote>
            </div>

            <div className="cc-reveal flex flex-col gap-px overflow-hidden rounded-xl border border-[hsl(var(--cc-line))]">
              {[
                {
                  t: "New York — July 2026",
                  d: "First statewide moratorium on hyperscale data centers: permits paused, $10B halted, while the state writes a community-benefits framework.",
                },
                {
                  t: "Texas — August 2026",
                  d: "New approvals frozen pending an audit of 1,800+ queued projects requesting 474 GW — five times ERCOT's historical peak.",
                },
                {
                  t: "Meta — $1B community fund",
                  d: "Pledged to build energy infrastructure “wherever we invest,” tying each project to significant local benefit.",
                },
                {
                  t: "Microsoft & the majors",
                  d: "Committed to recover the electricity costs their facilities impose on host communities; a joint White House pledge to fund grid upgrades.",
                },
              ].map((row) => (
                <div key={row.t} className="bg-[hsl(var(--cc-surface))] p-7">
                  <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--cc-text))]">
                    {row.t}
                  </div>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                    {row.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Proof */}
      <section className="border-t border-[hsl(var(--cc-line)/0.5)] bg-[hsl(var(--cc-ink-2))]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>Proof of economics</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[24ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Solar was a good business before any hyperscaler subsidy.
          </h2>
          <p className="cc-reveal mt-7 max-w-[70ch] text-[1.05rem] leading-relaxed text-[hsl(var(--cc-muted))]">
            Peter Davidson — who ran the DOE Loan Programs Office and now leads
            Aligned Climate Capital — publishes the math. His sixth
            distributed-solar fund closed oversubscribed, backed by insurers,
            endowments, and family offices, and it builds projects in exactly
            the communities capital has skipped. The subsidy is upside on top of
            economics that already clear.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
            <Stat value="$240M" label="closed, oversubscribed — one distributed-solar fund, mid-deployment." />
            <Stat value="$150.3M" label="in energy savings delivered to low- and moderate-income communities." />
            <Stat value="$38–78" label="per MWh — utility-scale solar, the cheapest new generation in most of the country." />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Sequencing */}
      <section className="border-t border-[hsl(var(--cc-line)/0.5)]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>How we build</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[24ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Data centers come later — after we've earned the right.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                k: "Now",
                t: "Community solar + storage",
                d: "Projects communities want: local savings, conserved land, no noise, no water draw. Revenue and trust accrue from year one.",
              },
              {
                k: "Next",
                t: "A trusted local platform",
                d: "A track record of kept promises, a bench of qualified sites, and standing relationships with towns, utilities, and state programs.",
              },
              {
                k: "Then",
                t: "Balanced data-center development",
                d: "Proposals designed with communities from day one — sited, sized, and conditioned on the air, sound, water, and energy terms residents set.",
              },
            ].map((s, i) => (
              <div key={s.k} className="cc-reveal">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[1.6rem] text-[hsl(var(--cc-accent))]">
                    0{i + 1}
                  </span>
                  <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-[hsl(var(--cc-faint))]">
                    {s.k}
                  </span>
                </div>
                <h3 className="mt-4 text-[1.2rem] text-[hsl(var(--cc-text))]">
                  {s.t}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <p className="cc-reveal mt-14 cc-display text-[clamp(1.3rem,2.4vw,1.8rem)] leading-snug text-[hsl(var(--cc-text))]">
            Trust is the scarce asset in this market. We will not spend it early.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- Team */}
      <section className="border-t border-[hsl(var(--cc-line)/0.5)] bg-[hsl(var(--cc-ink-2))]">
        <div className="cc-container py-24">
          <div className="cc-reveal">
            <Eyebrow>The team</Eyebrow>
          </div>
          <h2 className="cc-reveal cc-display mt-6 max-w-[24ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Two founders, four disciplines this model requires.
          </h2>
          <p className="cc-reveal mt-7 max-w-[64ch] text-[1.05rem] leading-relaxed text-[hsl(var(--cc-muted))]">
            Energy development, community permitting, AI, and public
            communication — the seams where most projects fail are the seams we
            staff.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                name: "Nathaniel Doyno",
                role: "Clean energy & development",
                bullets: [
                  "Founder, Finlo Solar Development — solar & storage projects across New York State.",
                  "Two decades in clean-tech as founder, impact investor, and advisor to mission-driven enterprises.",
                  "Cornell University, Urban & Regional Studies — the community-development lens this model is built on.",
                ],
              },
              {
                name: "Benjamin Popper",
                role: "Media, communications & AI",
                bullets: [
                  "Business editor at The Verge; bylines in The New York Times, WSJ, and Rolling Stone.",
                  "Led content & audience growth at Stack Overflow; spearheaded its Industry Guide to AI.",
                  "Red Hook, NY resident — building where he lives, with the neighbors this model serves.",
                ],
              },
            ].map((p) => (
              <div key={p.name} className="cc-reveal cc-panel p-8">
                <h3 className="font-display text-[1.7rem] text-[hsl(var(--cc-text))]">
                  {p.name}
                </h3>
                <div className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[hsl(var(--cc-accent))]">
                  {p.role}
                </div>
                <ul className="mt-6 flex flex-col gap-4">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <Diamond className="mt-2 shrink-0" />
                      <span className="text-[0.98rem] leading-relaxed text-[hsl(var(--cc-muted))]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Closing CTA */}
      <section id="contact" className="border-t border-[hsl(var(--cc-line)/0.5)]">
        <div className="cc-container py-28 text-center">
          <div className="cc-reveal mx-auto flex max-w-[720px] flex-col items-center">
            <Diamond />
            <h2 className="cc-display mt-8 text-[clamp(2.2rem,5vw,3.6rem)]">
              Read the thesis in full.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[1.08rem] leading-relaxed text-[hsl(var(--cc-muted))]">
              The white paper lays out the market, the mechanism, and the
              precedent in detail. We would rather work through the hard
              questions with you now than have you find them later.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={WHITEPAPER_URL} download className="cc-btn-primary">
                Download the white paper
              </a>
              <a href={MAILTO} className="cc-btn-ghost">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Footer */}
      <footer className="border-t border-[hsl(var(--cc-line)/0.5)]">
        <div className="cc-container flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <div className="flex items-center gap-2.5 text-[12px] uppercase tracking-[0.24em] text-[hsl(var(--cc-muted))]">
            <Diamond />
            Community Compute
          </div>
          <div className="text-[12px] text-[hsl(var(--cc-faint))]">
            Confidential — for discussion only · Nathaniel Doyno & Benjamin
            Popper
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityCompute;
