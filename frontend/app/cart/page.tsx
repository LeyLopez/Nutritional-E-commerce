import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    id: "serum",
    name: "Serum Botanico Radiante",
    price: 84,
    details: "30ml - Con bakuchiol y aceite de rosa mosqueta",
    badge: "Organico",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    quantity: 1,
  },
  {
    id: "mask",
    name: "Mascarilla Mineral Earthbound",
    price: 52,
    details: "100g - Minerales del mar muerto y ceniza volcanica",
    badge: "Empaque sostenible",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=80",
    quantity: 1,
  },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function CartPage() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-8 lg:px-12">
      <header className="glass-panel ambient-shadow mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-4">
        <Link className="font-editorial text-xl tracking-tight text-[var(--primary)]" href="/">
          Ethereal Atelier
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link className="hover:underline" href="/">
            Inicio
          </Link>
          <a className="hover:underline" href="#summary">
            Resumen
          </a>
          <a className="hover:underline" href="#ritual-upsell">
            Ritual
          </a>
        </nav>
        <p className="rounded-full bg-[var(--secondary-container)] px-4 py-2 text-sm text-[var(--on-secondary-container)]">
          Carrito 2
        </p>
      </header>

      <main className="mx-auto mt-16 grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_.8fr]">
        <section className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">Tus rituales</p>
            <h1 className="font-editorial text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              Selecciones curadas para tu santuario
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--on-surface)]/80">
              Productos seleccionados para tu santuario personal. Capas suaves, formulas limpias y autocuidado intencional.
            </p>
          </div>

          <div className="space-y-8">
            {cartItems.map((item) => (
              <article
                className="ambient-shadow grid gap-5 rounded-3xl bg-[var(--surface-lowest)] p-5 sm:grid-cols-[150px_1fr] sm:p-6"
                key={item.id}
              >
                <div className="relative h-[170px] rounded-2xl sm:h-full">
                  <Image alt={item.name} className="rounded-2xl object-cover" fill src={item.image} />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="inline-block rounded-full bg-[var(--secondary-container)] px-3 py-1 text-[11px] tracking-wide text-[var(--on-secondary-container)]">
                        {item.badge}
                      </p>
                      <h2 className="font-editorial mt-3 text-3xl leading-tight">{item.name}</h2>
                      <p className="mt-2 text-sm text-[var(--on-surface)]/75">{item.details}</p>
                    </div>
                    <p className="font-editorial text-3xl text-[var(--primary)]">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="ghost-outline flex items-center gap-4 rounded-full bg-[var(--surface)] px-4 py-2">
                      <button aria-label={`decrease ${item.name}`} className="text-[var(--primary)]">
                        quitar
                      </button>
                      <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                      <button aria-label={`increase ${item.name}`} className="text-[var(--primary)]">
                        agregar
                      </button>
                    </div>
                    <button className="text-sm text-[var(--on-surface)]/70 underline decoration-1 underline-offset-4">
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="ambient-shadow rounded-3xl bg-[var(--surface-low)] p-8" id="ritual-upsell">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">Completa el ritual</p>
            <h3 className="font-editorial mt-4 text-3xl leading-tight">Anade un antifaz de seda para una restauracion profunda</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--on-surface)]/80">
              Combina tu seleccion con nuestro antifaz de seda insignia para una restauracion sin interrupciones y mejor calidad de sueno.
            </p>
            <button className="mt-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dim)] px-6 py-3 text-sm font-medium text-[var(--on-primary)] transition hover:brightness-110">
              Explorar la coleccion de sueno
            </button>
          </section>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start" id="summary">
          <section className="ambient-shadow rounded-3xl bg-[var(--surface-lowest)] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--secondary)]">Resumen del pedido</p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-[var(--on-surface)]/75">
                <span>Envio</span>
                <span>Calculado en el checkout</span>
              </div>
              <div className="flex items-center justify-between text-[var(--on-surface)]/75">
                <span>Impuestos</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="mt-6 h-px bg-[color:color-mix(in_srgb,var(--outline-variant)_20%,transparent)]" />

            <div className="mt-6 flex items-center justify-between">
              <p className="font-editorial text-2xl">Total</p>
              <p className="font-editorial text-3xl text-[var(--primary)]">${subtotal.toFixed(2)}</p>
            </div>

            <button className="mt-8 w-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dim)] px-6 py-3 text-sm font-medium text-[var(--on-primary)] transition hover:brightness-110">
              Ir al checkout
            </button>
            <p className="mt-3 text-center text-xs text-[var(--on-surface)]/70">Transaccion segura y encriptada</p>
          </section>

          <section className="rounded-3xl bg-[var(--surface-low)] p-7">
            <p className="font-editorial text-xl leading-tight">
              La verdadera belleza comienza cuando decides ser tu misma.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--on-surface)]/75">
              Anadimos una muestra de nuestra fragancia insignia en tu pedido.
            </p>
          </section>
        </aside>
      </main>

      <footer className="mx-auto mt-24 grid w-full max-w-6xl gap-10 rounded-3xl bg-[var(--surface-low)] px-8 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-editorial text-xl">ETHEREAL ATELIER</p>
          <p className="mt-3 text-[var(--on-surface)]/75">Rituales de lujo sostenible.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">Explora</p>
          <ul className="mt-3 space-y-2 text-[var(--on-surface)]/80">
            <li>Revista</li>
            <li>Nuestra filosofia</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">Soporte</p>
          <ul className="mt-3 space-y-2 text-[var(--on-surface)]/80">
            <li>Envios y devoluciones</li>
            <li>Privacidad</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">Conecta</p>
          <ul className="mt-3 space-y-2 text-[var(--on-surface)]/80">
            <li>Suscripcion al boletin</li>
            <li>Public Eco</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}