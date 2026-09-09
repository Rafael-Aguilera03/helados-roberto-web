export default function Hero() {
  return (
    <section className="pt-12 pb-10 text-center max-w-3xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold tracking-wide mb-6 shadow-xs">
        <svg className="w-3.5 h-3.5 text-sky-700 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <path d="m7.5 4.27 9 5.15"/>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        </svg>
        <span>VENTAS DE HELADOS POR MAYOR Y MENOR</span>
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-5">
        Venta y distribución de helados envasados, <br className="hidden sm:inline" />
        <span className="text-sky-700">calidad y precio garantizado.</span>
      </h2>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
        Distribución independiente con años de experiencia abasteciendo a familias y comercios locales. Revisá nuestros más de 50 productos abajo ↓
      </p>
    </section>
  );
}