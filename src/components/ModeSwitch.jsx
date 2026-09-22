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
          className="relative z-10 flex-1 py-2.5 px-3 sm:px-6 rounded-xl transition-colors duration-200 text-center flex flex-col items-center justify-center cursor-pointer"
        >
          <span
            className={`text-xs sm:text-sm font-black tracking-tight leading-tight transition-colors duration-200 ${
              mode === 'menor' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Por menor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-1 flex items-center gap-1.5 transition-colors duration-200 ${
              mode === 'menor' ? 'text-sky-200' : 'text-slate-500'
            }`}
          >
            {/* Ícono Local / Tienda */}
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.65c0 .414.336.75.75.75Z"
              />
            </svg>
            <span>Retiro en local</span>
          </span>
        </button>

        {/* Opción Por Mayor */}
        <button
          type="button"
          onClick={() => setMode('mayor')}
          className="relative z-10 flex-1 py-2.5 px-3 sm:px-6 rounded-xl transition-colors duration-200 text-center flex flex-col items-center justify-center cursor-pointer"
        >
          <span
            className={`text-xs sm:text-sm font-black tracking-tight leading-tight transition-colors duration-200 ${
              mode === 'mayor' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Por mayor
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-1 flex items-center gap-1.5 transition-colors duration-200 ${
              mode === 'mayor' ? 'text-sky-200' : 'text-slate-500'
            }`}
          >
            {/* Ícono Reparto / Logística */}
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75m0-11.25H3.375"
              />
            </svg>
            <span>Reparto a comercios</span>
          </span>
        </button>

      </div>
    </div>
  );
}