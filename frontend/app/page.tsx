import Image from "next/image";
import Link from "next/link";
import ChatWidget from "./components/ChatWidget";

const products = [
  {
    name: "Radiance Collagen Elixir",
    subtitle: "Luminosidad y soporte de elasticidad",
    price: "$48",
    badge: "ORGANICO",
    image:
      "https://images.unsplash.com/photo-1611071536599-3598c0d79e7b?auto=format&fit=crop&w=1200&q=80",
    offset: "mt-0",
  },
  {
    name: "Calm Adaptogen Blend",
    subtitle: "Ritual para balance del estres",
    price: "$36",
    badge: "SOLO MIEMBROS",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
    offset: "mt-6",
  },
  {
    name: "Marine Mineral Drops",
    subtitle: "Hidratacion y recuperacion",
    price: "$32",
    badge: "MAS VENDIDO",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    offset: "mt-3",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen px-4 py-8 sm:px-8 lg:px-12">
      <header className="glass-panel ambient-shadow mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-4">
        <p className="font-editorial text-xl tracking-tight text-(--primary)">NutriShop</p>
        <nav className="hidden gap-8 text-sm md:flex">
          <a className="hover:underline" href="#collections">
            Colecciones
          </a>
          <a className="hover:underline" href="#ritual">
            Ritual
          </a>
          <a className="hover:underline" href="#journal">
            Revista
          </a>
        </nav>
        <Link
          className="rounded-full bg-(--secondary-container) px-4 py-2 text-sm text-(--on-secondary-container) transition hover:brightness-95"
          href="/cart"
        >
          Ver carrito
        </Link>
      </header>

      <main className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-24">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end" id="ritual">
          <div className="ambient-shadow relative rounded-3xl bg-(--surface-lowest) p-8 sm:p-12">
            <p className="text-sm uppercase tracking-[0.28em] text-(--secondary)">Atelier etereo</p>
            <h1 className="font-editorial mt-6 max-w-2xl text-5xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-6xl">
              Wellness premium con alma editorial
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-(--on-surface)/80">
              Suplementos, rituales y belleza funcional seleccionados como una curaduria de boutique. Menos ruido, mas calma.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-linear-to-r from-(--primary) to-(--primary-dim) px-7 py-3 font-medium text-(--on-primary) transition hover:brightness-110">
                Comprar ritual
              </button>
              <button className="rounded-full bg-(--secondary-container) px-7 py-3 font-medium text-(--on-secondary-container) transition hover:brightness-95">
                Ver historia
              </button>
            </div>
          </div>

          <article className="ambient-shadow overflow-hidden rounded-4xl bg-(--surface-low) p-4">
            <div className="relative h-85 rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80"
                alt="Set editorial de bienestar"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
            <p className="font-editorial mt-4 text-2xl text-foreground">Rutinas curadas</p>
            <p className="mt-2 text-sm text-(--on-surface)/80">
              Sets pensados para energia, piel luminosa y enfoque diario.
            </p>
          </article>
        </section>

        <section className="space-y-8" id="collections">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-(--secondary)">Carrusel de sets curados</p>
              <h2 className="font-editorial mt-3 text-4xl tracking-tight">Colecciones destacadas</h2>
            </div>
            <button className="text-sm text-(--primary) underline decoration-1 underline-offset-4">Ver todo</button>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto pb-3">
            {products.map((product) => (
              <article
                key={product.name}
                className={`ambient-shadow min-w-70 snap-start rounded-2xl bg-(--surface-lowest) p-4 ${product.offset}`}
              >
                <div className="relative h-64 rounded-xl">
                  <Image src={product.image} alt={product.name} fill className="rounded-xl object-cover" />
                </div>
                <p className="mt-4 inline-block rounded-full bg-(--secondary-container) px-3 py-1 text-[11px] tracking-wide text-(--on-secondary-container)">
                  {product.badge}
                </p>
                <h3 className="font-editorial mt-4 text-2xl">{product.name}</h3>
                <p className="mt-1 text-sm text-(--on-surface)/75">{product.subtitle}</p>
                <p className="font-editorial mt-4 text-2xl text-(--primary)">{product.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid gap-6 rounded-3xl bg-(--surface-low) p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end"
          id="journal"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-(--secondary)">Revista y membresia</p>
            <h2 className="font-editorial mt-4 text-4xl leading-tight">Recibe rituales, guias y lanzamientos privados</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-(--on-surface)/80">
              Suscribete para acceder a ediciones limitadas, protocolos de bienestar y contenido experto cada semana.
            </p>
          </div>
          <form className="grid gap-3 sm:min-w-[320px]">
            <label className="text-sm text-(--on-surface)/75" htmlFor="email">
              Correo electronico
            </label>
            <input
              className="ghost-outline rounded-xl bg-(--surface-highest) px-4 py-3 text-sm outline-none transition focus:bg-(--primary-container)"
              id="email"
              placeholder="tu@email.com"
              type="email"
            />
            <button className="mt-2 rounded-full bg-linear-to-r from-(--primary) to-(--primary-dim) px-6 py-3 text-sm font-medium text-(--on-primary) transition hover:brightness-110">
              Unirme al atelier
            </button>
          </form>
        </section>

        <footer className="pb-8 text-center text-sm text-(--on-surface)/70">
          E-commerce nutricional de NutriShop.
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
}