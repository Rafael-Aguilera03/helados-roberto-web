export default function ModeSwitch({ mode, setMode }) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center gap-1.5 shadow-inner max-w-sm w-full border border-slate-300/70">
        {/* Opción Por Menor */}
        <button
          type="button"
          onClick={() => setMode('menor')}
          className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 text-center flex flex-col items-center justify-center ${
            mode === 'menor'
              ? 'bg-sky-800 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
          }`}
        >
          <span className="text-xs sm:text-sm font-black tracking-tight leading-tight">
            Por menor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 ${
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
          className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 text-center flex flex-col items-center justify-center ${
            mode === 'mayor'
              ? 'bg-sky-800 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/40'
          }`}
        >
          <span className="text-xs sm:text-sm font-black tracking-tight leading-tight">
            Por mayor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 ${
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