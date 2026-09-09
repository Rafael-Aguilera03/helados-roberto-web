export default function FloatingWA({ phone = "5492610000000" }) {
  const directMessage = encodeURIComponent("¡Hola! Quería hacer una consulta sobre los helados envasados.");
  const url = `https://wa.me/${phone}?text=${directMessage}`;

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-5 right-5 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir o consultar por WhatsApp"
        className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_8px_25px_rgba(5,150,105,0.35)] hover:shadow-[0_12px_30px_rgba(5,150,105,0.45)] transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping" />
          <svg className="w-6 h-6 fill-current relative" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </div>
        
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">Atención directa</span>
          <span className="text-sm font-black tracking-tight mt-0.5">Realiza tu consulta</span>
        </div>
      </a>
    </aside>
  );
}