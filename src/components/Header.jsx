import { useState, useEffect } from 'react';

// Función para calcular el estado en el instante exacto del montaje
const getInitialOpenState = () => {
  const now = new Date();
  const currentDecimalHour = now.getHours() + now.getMinutes() / 60;
  // Abierto de Lunes a Lunes de 08:00 a 23:00 hs
  return currentDecimalHour >= 8 && currentDecimalHour < 23;
};

export default function Header() {
  // Inicialización sincrónica: elimina el flash de "Cerrado" al cargar
  const [isOpen, setIsOpen] = useState(getInitialOpenState);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkSchedule = () => {
      setIsOpen(getInitialOpenState());
    };

    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Marca con ícono */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
            <svg 
              className="w-5 h-5 stroke-current fill-none stroke-[2]" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Cuerpo del palito de helado */}
              <path d="M18 8a6 6 0 0 0-12 0v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8Z" />
              {/* Hendidura clásica */}
              <path d="M10 7v4" />
              {/* Palito de madera */}
              <path d="M10 18v3a2 2 0 0 0 4 0v-3" />
            </svg>
          </div>
          <div>
            <span className="text-base font-black tracking-tight leading-none block text-white">
              Helados Roberto
            </span>
            <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider block mt-0.5">
              Distribuidora de Helados Lomoro
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

          {/* Badge de estado en escritorio */}
          {isOpen ? (
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Tomando pedidos</span>
            </div>
          ) : (
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 shadow-xs">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              <span>Cerrado • Abre 08:00 hs</span>
            </div>
          )}

          {/* Botón hamburguesa animado */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl text-slate-300 hover:bg-slate-800 active:bg-slate-700 transition-colors focus:outline-none flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Menú principal"
            aria-expanded={mobileMenuOpen}
          >
            {/* Línea superior */}
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            {/* Línea media */}
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transition-opacity duration-200 ease-in-out ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Línea inferior */}
            <span
              className={`block h-0.5 w-6 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

      </div>

      {/* Menú mobile desplegable con transición suave de altura (grid-rows) y fade */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out border-slate-800 ${
          mobileMenuOpen
            ? 'grid-rows-[1fr] opacity-100 border-b shadow-xl'
            : 'grid-rows-[0fr] opacity-0 border-b-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden bg-slate-900">
          <div className="px-4 py-4 flex flex-col gap-2">
            {isOpen ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Abierto • Tomando pedidos</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 mb-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                <span>Cerrado • Abre 08:00 hs</span>
              </div>
            )}
            
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-slate-100 hover:bg-slate-800 active:bg-slate-700/60 transition-colors flex items-center justify-between"
            >
              <span>Catálogo de Productos</span>
              <svg className="w-4 h-4 text-sky-400 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
            </a>

            <a
              href="#informacion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-slate-100 hover:bg-slate-800 active:bg-slate-700/60 transition-colors flex items-center justify-between"
            >
              <span>Información, Envíos y Pagos</span>
              <svg className="w-4 h-4 text-sky-400 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}