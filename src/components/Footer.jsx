export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Identidad */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-xs">
              <svg 
                className="w-4 h-4 stroke-current fill-none stroke-[2]" 
                viewBox="0 0 24 24" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m7 11 5 11 5-11Z" />
                <path d="M12 3a5 5 0 0 0-5 5v3h10V8a5 5 0 0 0-5-5Z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-black text-slate-100 tracking-tight block">
                Helados Roberto
              </span>
              <span className="text-xs text-slate-400">
                Distribuidora de productos envasados sellados de fábrica
              </span>
            </div>
          </div>

          {/* Enlaces */}
          <nav className="flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#catalogo" className="hover:text-white transition-colors">
              Productos
            </a>
            <a href="#informacion" className="hover:text-white transition-colors">
              Información y Envíos
            </a>
          </nav>

        </div>

        {/* Legales */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>
            © {currentYear} Helados Roberto. Todos los derechos reservados.
          </p>
          <p className="text-slate-400">
            Precios y stock sujetos a disponibilidad de fábrica.
          </p>
        </div>
      </div>
    </footer>
  );
}