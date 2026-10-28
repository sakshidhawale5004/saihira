import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Tilt } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { InteractiveTilt } from "@/components/InteractiveTilt";

const HERO_ABOUT = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=85"; // Artisan rolling flatbread dough

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SAIHIRA · SHM Asal — Our Heritage, Craft & Team" },
      { name: "description", content: "Learn about SAIHIRA's devotion to handmade Gujarati Khakhras and Bhakhris, our mentor Guru SAIHIRA, and our experienced leadership team." },
      { property: "og:title", content: "About SAIHIRA · SHM Asal" },
      { property: "og:description", content: "Handmade Gujarati heritage snacks, slow-roasted with pure devotion." },
      { property: "og:image", content: HERO_ABOUT },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Reshma Udasi",
    role: "Head of Operations & Research",
    qualification: "M.Sc. (Mumbai University) · Ex-IIT Mumbai",
    bio: "A post-graduate in Science from Mumbai University with a solid foundation in scientific research (4 years at IIT-Mumbai). She brings 22 years of high-level corporate leadership as Country Head across international supply chains, operational quality management, and clean food systems.",
  },
  {
    name: "Ria Ahuja",
    role: "Head of HR, PR & Key Accounts",
    qualification: "M.Sc., B.Ed. · Former Chemistry Professor",
    bio: "With a Master's in Science and a background as a prestigious Mumbai college Chemistry Professor for 11 years, Ria has spent over 20 years managing human capital for 600+ team members. She spearheads our artisan women empowerment initiatives, customer experience, and retail relationships.",
  },
  {
    name: "Mahesh Ahuja",
    role: "Master Baker & Head of Procurement",
    qualification: "B.Com (Mumbai University) · Certified Baker",
    bio: "A seasoned veteran with 40 years across retail, exports, and distribution networks. Mahesh is a certified master baker who oversees grain procurement directly from regional farmers and monitors the traditional slow-roasting parameters on each tawa line.",
  },
];

const pillars = [
  {
    title: "Hand-Rolled on Wood Boards",
    desc: "Unlike industrial conveyor presses that crush grain gluten, our dough is individually rolled on wooden patla to yield tender, flaky crispness.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    tag: "Artisan Craft",
  },
  {
    title: "Direct-From-Farm Grains",
    desc: "Premium Sharbati whole wheat, Kathiawari bajra, Himalayan barley, and organic ragi sourced responsibly with zero adulteration.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    tag: "Farm Purity",
  },
  {
    title: "100% Cast Iron Tawa Roasted",
    desc: "Every single Khakhra is pressed gently on seasoned cast-iron griddles. Never deep-fried, preserving healthy low-oil goodness.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80",
    tag: "Tradition",
  },
  {
    title: "Multi-Barrier Vacuum Seal",
    desc: "Food-grade nitrogen barrier packaging that locks out humidity and maintains farm-fresh crunch for 6 months without synthetic preservatives.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    tag: "Freshness",
  },
];

const poem = [
  "HE, who has been our constant friend and guide,",
  "HE, who has given us our pride,",
  "In whatever we do,",
  "HE, who has taught us to be right",
  "In the eyes of the ALMIGHTY,",
  "HE is our Mentor, our Guru — SAIHIRA.",
  "We strive to make this venture",
  "A part of HIS dream,",
  "And of HIS Consort — Nanda.",
];

function About() {
  return (
    <div>
      {/* Khakhra & Bhakhri Themed Hero Section */}
      <PageHero
        eyebrow="Tradition & Sacred Devotion"
        title="A Venture Born of Devotion"
        subtitle="Bringing the authentic warmth of grandmother's kitchen and heirloom Gujarati recipes to homes worldwide."
        image={HERO_ABOUT}
        badge="Since 1990s"
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Story Intro */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The Heritage</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-primary">
              The Meaning of <em>"SHM Asal"</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              In Gujarati culinary tradition, the word <strong>"Asal"</strong> signifies unadulterated purity, original recipe, and honest craft. SAIHIRA was born out of a desire to make sure that true handmade Khakhras and Bhakhris aren't replaced by soulless mass-factory crackers.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every piece in our collection is hand-rolled by experienced women artisans, roasted slowly over gentle iron tawa heat, and packed fresh in Mumbai.
            </p>
          </Reveal>
          <InteractiveTilt maxTilt={10} scale={1.03}>
            <div className="overflow-hidden rounded-2xl border-4 border-double border-accent shadow-2xl">
              <img
                src="/khakra 3.jpg"
                alt="Authentic handmade SHM Asal Gujarati Khakhra craft"
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </InteractiveTilt>
        </div>

        {/* The Sacred Dedication / Poem Section */}
        <section className="mx-auto max-w-3xl py-20 text-center">
          <div className="frame p-10 md:p-14 shadow-deep">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-4">
              ✦ Dedicated with Reverence ✦
            </span>
            <div className="space-y-2">
              {poem.map((line, i) => (
                <p
                  key={i}
                  className={`font-display ${
                    line.includes("SAIHIRA")
                      ? "text-primary text-3xl md:text-4xl font-bold py-2"
                      : line.includes("Nanda")
                      ? "text-accent text-2xl font-semibold"
                      : "text-lg md:text-xl text-muted-foreground italic"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground max-w-md mx-auto leading-relaxed border-t border-border pt-4">
              Guided by this spirit of selfless service, our kitchen operates on strict principles of purity, respect for food, and utmost honesty in every ingredient.
            </p>
          </div>
        </section>

        {/* 4 Pillars of Craft with 3D Tilt */}
        <section className="py-12 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">The Asal Promise</span>
            <h2 className="mt-3 text-4xl font-semibold">How We Craft the Perfect Crunch</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We unite traditional wisdom with rigorous food safety standards to bring you snacks you can feel proud serving to your family.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <InteractiveTilt maxTilt={10} scale={1.03} className="h-full">
                  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-deep h-full flex flex-col justify-between transition-shadow hover:shadow-2xl">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">
                          {pillar.tag}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                </InteractiveTilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 border-t border-border">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">Leadership & Expertise</span>
              <h2 className="mt-3 text-4xl font-semibold">The Custodians of Taste</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Combining over three decades of science, education, supply-chain excellence, and artisanal baking craft.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <InteractiveTilt maxTilt={8} scale={1.02} className="h-full">
                  <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-deep flex flex-col justify-between transition-shadow hover:shadow-xl">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 font-display text-2xl font-bold text-primary">
                          {t.name.split(" ").map((w) => w[0]).join("")}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                          <p className="text-xs font-semibold text-accent">{t.role}</p>
                        </div>
                      </div>
                      <div className="mt-3 rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {t.qualification}
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.bio}</p>
                    </div>
                  </div>
                </InteractiveTilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Food Purity & Safety Certifications */}
        <section className="py-16 border-t border-border bg-secondary/50 rounded-2xl p-8 mb-10 text-center">
          <span className="eyebrow">Highest Standards</span>
          <h2 className="mt-2 text-3xl font-semibold text-primary">Our Purity Commitment</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
              <span className="text-2xl block mb-1">🌿</span>
              <h4 className="font-semibold text-sm">100% Vegetarian</h4>
              <p className="text-xs text-muted-foreground mt-1">Made in a strictly pure vegetarian facility.</p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
              <span className="text-2xl block mb-1">🚫</span>
              <h4 className="font-semibold text-sm">Zero Preservatives</h4>
              <p className="text-xs text-muted-foreground mt-1">No artificial colours, flavours or MSG.</p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
              <span className="text-2xl block mb-1">📦</span>
              <h4 className="font-semibold text-sm">Vacuum Pack Tech</h4>
              <p className="text-xs text-muted-foreground mt-1">Locks in crunch and freshness for 6 months.</p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
              <span className="text-2xl block mb-1">✨</span>
              <h4 className="font-semibold text-sm">FSSAI Certified</h4>
              <p className="text-xs text-muted-foreground mt-1">Manufactured under strict hygiene norms.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/products" className="btn-warm text-sm">
              Taste the Authentic Difference →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
