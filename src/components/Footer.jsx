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
                {/* Cuerpo del palito de helado */}
                <path d="M18 8a6 6 0 0 0-12 0v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8Z" />
                {/* Hendidura clásica */}
                <path d="M10 7v4" />
                {/* Palito de madera */}
                <path d="M10 18v3a2 2 0 0 0 4 0v-3" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-black text-slate-100 tracking-tight block">
                Helados Roberto
              </span>
              <span className="text-xs text-slate-400">
                Distribuidora de helados Lomoro
              </span>
            </div>
          </div>

          {/* Enlaces */}
          <nav className="flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#catalogo" className="hover:text-white transition-colors">
              Catálogo
            </a>
            <a href="#informacion" className="hover:text-white transition-colors">
              Información
            </a>
          </nav>

        </div>

        {/* Disclaimer de marcas */}
        <div className="pt-6 pb-4 border-b border-slate-900">
          <p className="text-[11px] leading-relaxed text-slate-500 text-center sm:text-left">
            <span className="font-semibold text-slate-400">Aviso legal:</span> Helados Roberto es una distribuidora y punto de reventa independiente. Todas las marcas registradas, logotipos, nombres comerciales y packagings exhibidos (incluyendo Lomoro®) pertenecen a sus respectivos fabricantes y titulares, y se muestran en este catálogo exclusivamente con fines descriptivos e informativos sobre los productos comercializados.
          </p>
        </div>

        {/* Derechos, crédito de desarrollo y condiciones */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © {currentYear} Helados Roberto. Todos los derechos reservados.
          </p>

          <p className="text-slate-400">
            Desarrollo web por{' '}
            <a 
              href="https://www.linkedin.com/in/rafael-aguilera-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors underline decoration-sky-500/30 underline-offset-2"
            >
              Rafael Aguilera
            </a>
          </p>

          <p className="text-slate-500">
            Precios y stock sujetos a disponibilidad.
          </p>
        </div>
      </div>
    </footer>
  );
}