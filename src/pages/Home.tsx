import { Link } from "@tanstack/react-router";
import { HexLogo } from "../components/Hex";
import { MenuSection } from "../components/MenuSection";
import { menuData } from "../data/menuData";

const reviews = [
  {
    quote: "Excellent café, excellent service.",
    name: "Google Review",
  },
  {
    quote: "The food was so good and the presentation was pretty.",
    name: "Karla M.",
  },
  {
    quote: "I have found a new favorite place to dine.",
    name: "Alyssa B.",
  },
];

export function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.98_0.025_85)] text-[oklch(0.18_0.04_50)]">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[oklch(0.98_0.025_85/0.85)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <HexLogo size={42} />
            <span
              className="text-2xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Hive Cafe
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="hover:text-[oklch(0.63_0.14_70)]">
              Menu
            </a>
            <a href="#reviews" className="hover:text-[oklch(0.63_0.14_70)]">
              Reviews
            </a>
            <a href="#visit" className="hover:text-[oklch(0.63_0.14_70)]">
              Visit
            </a>
            <a
              href="tel:+14054181406"
              className="rounded-full bg-[oklch(0.18_0.04_50)] px-5 py-2.5 text-white shadow-lg shadow-black/10 transition hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[oklch(0.84_0.16_80/0.45)] blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[oklch(0.7_0.15_45/0.25)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[oklch(0.78_0.12_75)] bg-white/70 px-4 py-2 text-sm font-medium shadow-sm">
              <span>⭐ 4.7</span>
              <span className="text-black/40">•</span>
              <span>242 Google reviews</span>
            </div>

            <h1
              className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Honey lattes, Latin breakfast, and cozy cafe vibes.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
              A family-owned cafe in southwest Oklahoma City serving fresh
              drinks, beautiful breakfast plates, street-food favorites, and
              warm neighborhood energy.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="rounded-full bg-[oklch(0.68_0.16_72)] px-7 py-4 text-center font-semibold text-[oklch(0.16_0.035_50)] shadow-xl shadow-[oklch(0.68_0.16_72/0.25)] transition hover:-translate-y-1"
              >
                View Favorites
              </a>

            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold">$10–20</p>
                <p className="text-sm text-black/55">per person</p>
              </div>
              <div>
                <p className="text-3xl font-bold">7 AM</p>
                <p className="text-sm text-black/55">opens daily</p>
              </div>
              <div>
                <p className="text-3xl font-bold">OKC</p>
                <p className="text-sm text-black/55">local cafe</p>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/65 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[2rem] bg-[oklch(0.22_0.045_50)] p-8 text-white">
                <div className="flex items-center justify-between">
                  <HexLogo size={56} />
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    Fresh • Sweet • Local
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                    Featured
                  </p>
                  <h2
                    className="mt-3 text-5xl font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Honey Latte
                  </h2>
                  <p className="mt-4 max-w-sm text-white/65">
                    Espresso, milk, honey sweetness, and a smooth finish made
                    for slow mornings.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-2xl font-bold">Dine-in</p>
                    <p className="mt-1 text-sm text-white/55">Cozy seating</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-2xl font-bold">Pickup</p>
                    <p className="mt-1 text-sm text-white/55">Easy ordering</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block">
              <p className="text-sm text-black/50">Loved for</p>
              <p className="font-semibold">tacos, lattes & breakfast</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[oklch(0.18_0.04_50)] p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.82_0.14_75)]">
                About the cafe
              </p>
              <h2
                className="text-4xl font-bold md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A warm local spot with Latin flavor and a honey-sweet soul.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/65">
              The Hive Cafe brings together comforting breakfast, refreshing
              aguas frescas, espresso drinks, and street-food favorites in a
              welcoming space for families, friends, and coffee lovers.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.58_0.13_70)]">
              Menu highlights
            </p>
            <h2
              className="text-4xl font-bold md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fresh favorites
            </h2>
          </div>
          <p className="max-w-md text-black/60">
            Breakfast plates, coffee drinks, juices, tacos, and colorful comfort
            food made to brighten your day.
          </p>
        </div>

        <MenuSection categories={menuData} />
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.58_0.13_70)]">
              Reviews
            </p>
            <h2
              className="text-4xl font-bold md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Guests love the buzz
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.quote}
                className="rounded-[1.75rem] bg-[oklch(0.98_0.025_85)] p-7"
              >
                <div className="mb-5 text-xl text-[oklch(0.68_0.16_72)]">
                  ★★★★★
                </div>
                <blockquote className="text-lg font-medium leading-8">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-black/50">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.58_0.13_70)]">
              Visit us
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Southwest Oklahoma City
            </h2>

            <div className="mt-8 space-y-6 text-black/70">
              <p>
                <span className="font-semibold text-black">Address:</span>
                <br />
                1700 S Morgan Rd Unit C,
                <br />
                Oklahoma City, OK 73128
              </p>

              <p>
                <span className="font-semibold text-black">Phone:</span>
                <br />
                <a href="tel:+14054181406" className="hover:underline">
                  +1 405-418-1406
                </a>
              </p>

              <p>
                <span className="font-semibold text-black">Services:</span>
                <br />
                Dine-in, curbside pickup, and no-contact delivery.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[oklch(0.68_0.16_72)] p-8 text-[oklch(0.16_0.035_50)] md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] opacity-70">
              Open daily
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start your morning at The Hive.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 opacity-75">
              Come in for breakfast, grab a latte, or order your favorite meal
              for pickup.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1700+S+Morgan+Rd+Unit+C+Oklahoma+City+OK+73128+Estados+Unidos"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[oklch(0.18_0.04_50)] px-7 py-4 text-center font-semibold text-white transition hover:scale-105"
              >
                Get Directions
              </a>
              <a
                href="tel:+14054181406"
                className="rounded-full bg-white/60 px-7 py-4 text-center font-semibold transition hover:bg-white"
              >
                Call Cafe
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
