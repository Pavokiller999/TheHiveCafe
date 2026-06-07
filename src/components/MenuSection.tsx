import { useState } from "react";
import type { MenuCategory } from "../data/menuData";

const itemColors = [
  "bg-[oklch(0.95_0.06_80)]",
  "bg-[oklch(0.94_0.05_65)]",
  "bg-[oklch(0.94_0.04_95)]",
  "bg-[oklch(0.96_0.04_70)]",
  "bg-[oklch(0.93_0.06_85)]",
  "bg-[oklch(0.95_0.05_55)]",
];

export function MenuSection({ categories }: { categories: MenuCategory[] }) {
  const [openCategory, setOpenCategory] = useState<number | null>(0); // first open by default

  const toggle = (i: number) => setOpenCategory(openCategory === i ? null : i);

  return (
    <div className="mx-auto max-w-4xl">
      {categories.map((cat, i) => {
        const isOpen = openCategory === i;
        const bg = itemColors[i % itemColors.length];

        return (
          <div key={cat.category} className="mb-3">
            {/* ACCORDION HEADER */}
            <button
              onClick={() => toggle(i)}
              className={`flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition hover:shadow-md ${
                isOpen ? "shadow-md" : ""
              } ${bg}`}
            >
              <div>
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.category}
                </h3>
                {cat.description && (
                  <p className="mt-0.5 text-sm text-black/55">
                    {cat.description}
                  </p>
                )}
              </div>
              <span
                className={`text-2xl text-[oklch(0.58_0.14_70)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* ACCORDION CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-1 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                {/* Size prices header for coffee/drink categories */}
                {cat.sizePrices && (
                  <div className="mb-4 grid grid-cols-3 gap-3">
                    {cat.sizePrices.map((size) => (
                      <div
                        key={size.label}
                        className="rounded-xl bg-[oklch(0.92_0.08_80)] px-3 py-2 text-center"
                      >
                        <p className="text-xs font-semibold text-black/60">
                          {size.label}
                        </p>
                        <p className="text-lg font-bold text-[oklch(0.58_0.14_70)]">
                          {size.price}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items list */}
                <div className="divide-y divide-black/5">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 py-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-black/85">{item.name}</p>
                        {item.note && (
                          <p className="mt-0.5 text-sm text-black/45">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 font-semibold text-[oklch(0.58_0.14_70)]">
                        {item.price || (cat.sizePrices ? "See sizes" : "")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}