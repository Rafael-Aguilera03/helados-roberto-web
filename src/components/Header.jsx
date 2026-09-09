import { useState } from 'react';

export default function Header({ isOpen = true }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Marca */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
            <svg 
              className="w-5 h-5 stroke-current fill-none stroke-[2]" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m7 11 5 11 5-11Z" />
              <path d="M12 3a5 5 0 0 0-5 5v3h10V8a5 5 0 0 0-5-5Z" />
            </svg>
          </div>
          <div>
            <span className="text-base font-black tracking-tight leading-none block text-white">
              Roberto Helados
            </span>
            <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider block mt-0.5">
              Distribuidora de Envasados
            </span>
          </div>
        </a>

        {/* Navegación y estado en escritorio */}
        <div className="flex items-center gap-5">
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300 tracking-wider uppercase">
            <a href="#catalogo" className="hover:text-white transition-colors">
              Catálogo
            </a>
            <a href="#informacion" className="hover:text-white transition-colors">
              Información
            </a>
          </nav>

          {/* Badge de estado */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200">
            <span className="relative flex h-2 w-2">
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-400' : 'bg-rose-500'}`} />
            </span>
            <span>{isOpen ? 'Tomando pedidos' : 'Cerrado'}</span>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-800 active:bg-slate-700 transition-colors focus:outline-none"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Menú mobile desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 flex flex-col gap-2 shadow-xl">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 mb-2">
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-rose-500'}`} />
            <span>{isOpen ? 'Abierto • Tomando pedidos' : 'Cerrado temporalmente'}</span>
          </div>
          
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2.5 rounded-xl font-bold text-sm text-slate-100 hover:bg-slate-800 transition-colors flex items-center justify-between"
          >
            <span>Catálogo de Productos</span>
            <svg className="w-4 h-4 text-sky-400 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </a>

          <a
            href="#informacion"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2.5 rounded-xl font-bold text-sm text-slate-100 hover:bg-slate-800 transition-colors flex items-center justify-between"
          >
            <span>Información, Envíos y Pagos</span>
            <svg className="w-4 h-4 text-sky-400 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>
      )}
    </header>
  );
}