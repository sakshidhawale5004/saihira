import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Tilt } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SAIHIRA · SHM Asal — Our Heritage, Craft & Team" },
      { name: "description", content: "Learn about SAIHIRA's devotion to handmade Gujarati Khakhras and Bhakhris, our mentor Guru SAIHIRA, and our experienced leadership team." },
      { property: "og:title", content: "About SAIHIRA · SHM Asal" },
      { property: "og:description", content: "Handmade Gujarati heritage snacks, slow-roasted with pure devotion." },
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
    title: "Artisanal Hand Crafting",
    desc: "Unlike factory machines that compress dough under extreme friction, our dough is hand-rolled by experienced women artisans to maintain natural grain aromas.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    tag: "Craft",
  },
  {
    title: "Direct-From-Farm Grains",
    desc: "Premium Sharbati wheat, Kathiawari bajra, Himalayan barley, and certified organic ragi sourced responsibly with zero adulteration.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    tag: "Purity",
  },
  {
    title: "100% Tawa Roasted",
    desc: "Every single Khakhra is pressed slowly on seasoned iron griddles until golden crisp. Never deep-fried, preserving healthy low-oil goodness.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80",
    tag: "Tradition",
  },
  {
    title: "Airtight Vacuum Shield",
    desc: "Multi-layered barrier packaging that protects against moisture and oxidation, delivering crisp crunch for up to 6 months without synthetic preservatives.",
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
    <div className="mx-auto max-w-6xl px-6 pt-14">
      {/* 1. HERO STORY SECTION */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="eyebrow">About SAIHIRA Foods</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-tight text-primary">
            A venture <em>born of devotion</em>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            SAIHIRA was established with a singular, heartfelt vision: to preserve the authentic culinary heritage of grandmother’s kitchen and bring the purest, handmade Gujarati snacks to households across India and the globe.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our brand name, <strong>SHM Asal</strong>, embodies this philosophy. <em>"Asal"</em> is the Gujarati word for genuine, pristine, and original. Every batch of Khakhra and Bhakhri we bake honors this sacred promise.
          </p>
        </Reveal>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border-4 border-double border-accent shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80"
              alt="Golden wheat fields and authentic grain harvesting"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg">
            <span className="text-xs font-bold text-primary block">Est. in Mumbai</span>
            <span className="text-[11px] text-muted-foreground">30+ Years Food Heritage</span>
          </div>
        </div>
      </div>

      {/* 2. THE SACRED DEDICATION / POEM SECTION */}
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

      {/* 3. OUR FOUR PILLARS OF CRAFT */}
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
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-deep h-full flex flex-col transition-transform duration-300 hover:-translate-y-1.5">
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. LEADERSHIP TEAM */}
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
              <Tilt className="h-full rounded-3xl border border-border bg-card p-8 shadow-deep flex flex-col justify-between">
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
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. FOOD PURITY & SAFETY CERTIFICATIONS */}
      <section className="py-16 border-t border-border bg-secondary/50 rounded-2xl p-8 mb-20 text-center">
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
  );
}
