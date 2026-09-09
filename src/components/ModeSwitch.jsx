export default function ModeSwitch({ mode, setMode }) {
  return (
    <div className="flex justify-center w-full">
      <div className="relative bg-slate-200/80 p-1.5 rounded-2xl flex items-center shadow-inner max-w-2xl w-full border border-slate-300/70">
        
        {/* Indicador deslizante animado */}
        <div
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-sky-800 shadow-md transition-transform duration-300 ease-out ${
            mode === 'menor' ? 'left-1.5 translate-x-0' : 'left-1.5 translate-x-full'
          }`}
          aria-hidden="true"
        />

        {/* Opción Por Menor */}
        <button
          type="button"
          onClick={() => setMode('menor')}
          className="relative z-10 flex-1 py-2.5 px-8 rounded-xl transition-colors duration-200 text-center flex flex-col items-center justify-center cursor-pointer"
        >
          <span
            className={`text-xs sm:text-sm font-black tracking-tight leading-tight transition-colors duration-200 ${
              mode === 'menor' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Por menor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 transition-colors duration-200 ${
              mode === 'menor' ? 'text-sky-200' : 'text-slate-500'
            }`}
          >
            Consumo final
          </span>
        </button>

        {/* Opción Por Mayor */}
        <button
          type="button"
          onClick={() => setMode('mayor')}
          className="relative z-10 flex-1 py-2.5 px-8 rounded-xl transition-colors duration-200 text-center flex flex-col items-center justify-center cursor-pointer"
        >
          <span
            className={`text-xs sm:text-sm font-black tracking-tight leading-tight transition-colors duration-200 ${
              mode === 'mayor' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Por mayor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 transition-colors duration-200 ${
              mode === 'mayor' ? 'text-sky-200' : 'text-slate-500'
            }`}
          >
            Comercios
          </span>
        </button>

      </div>
    </div>
  );
}