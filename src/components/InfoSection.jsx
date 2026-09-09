import { useEffect, useRef, useState } from 'react';

// Función para calcular el estado en el instante exacto del montaje (09:00 a 23:00 hs)
const getInitialOpenState = () => {
  const now = new Date();
  const currentDecimalHour = now.getHours() + now.getMinutes() / 60;
  return currentDecimalHour >= 9 && currentDecimalHour < 23;
};

function InfoCardReveal({ children, delay = "0ms" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal-item h-full" style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
}

export default function InfoSection() {
  const [isOpen, setIsOpen] = useState(getInitialOpenState);

  useEffect(() => {
    const checkSchedule = () => {
      setIsOpen(getInitialOpenState());
    };

    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  // Enlace exacto con el pin DMS idéntico al iframe
  const mapsExactUrl = "https://www.google.com/maps/place/32%C2%B058'42.5%22S+68%C2%B046'26.0%22W/@-32.978364,-68.773889,19z";

  return (
    <section id="informacion" className="mt-20 pt-12 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold tracking-wide mb-3 shadow-xs">
          <svg 
            className="w-3.5 h-3.5 text-sky-700 stroke-current fill-none stroke-[2] shrink-0" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
          <span>ATENCIÓN DIRECTA, DISTRIBUCIÓN Y RETIRO RÁPIDO</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
          Información y entregas
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Coordinación rápida para retiros y despachos sin demoras.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* TARJETA 1: Ubicación & Mapa */}
        <InfoCardReveal delay="0ms">
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                    <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Punto de ubicación y distribución</h4>
                    <p className="text-xs text-slate-500">Retiros coordinados previamente por WhatsApp</p>
                  </div>
                </div>

                <a
                  href={mapsExactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  <span>Abrir ubicación en Maps</span>
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>

              {/* Iframe con la nueva URL exacta */}
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
                <iframe
                  title="Ubicación Roberto Helados"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1673.481764471394!2d-68.77510303566592!3d-32.97836400790596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDU4JzQyLjUiUyA2OMKwNDYnMjYuMCJX!5e0!3m2!1ses!2sar!4v1788976559662!5m2!1ses!2sar"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Botón táctil para celular */}
              <div className="mt-3 sm:hidden">
                <a
                  href={mapsExactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  <span>Abrir ubicación en Google Maps</span>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Envíos a domicilio en la zona</span>
              <span className="font-bold text-slate-800">Consultar por el radio de entrega</span>
            </div>
          </div>
        </InfoCardReveal>

        {/* TARJETA 2: Horarios */}
        <InfoCardReveal delay="100ms">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                    <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Horarios de atención</h4>
                    <p className="text-xs text-slate-500">Respuesta rápida de pedidos</p>
                  </div>
                </div>

                {isOpen ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Abierto
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Cerrado
                  </span>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-semibold text-slate-700">Todos los días</span>
                  <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    08:00 — 23:00 hs
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 mt-4 leading-relaxed">
              Para pedidos mayoristas recomendamos encargar con anticipación.
            </p>
          </div>
        </InfoCardReveal>

        {/* TARJETA 3: Medios de pago */}
        <InfoCardReveal delay="150ms">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Formas de pago</h4>
                  <p className="text-xs text-slate-500">Opciones simples y seguras</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center sm:flex-col sm:text-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18c0 .55-.45 1-1 1s-1-.45-1-1v-1.07c-2.02-.38-3.5-2.03-3.5-4.03 0-.55.45-1 1-1s1 .45 1 1c0 1.25.92 2.28 2.14 2.45.2.03.36.05.53.05.8 0 1.45-.48 1.71-1.19.34-.94-.28-1.92-1.37-2.19l-1.35-.33c-2.09-.52-3.32-2.31-2.9-4.39.37-1.85 1.95-3.18 3.74-3.32V4c0-.55.45-1 1-1s1 .45 1 1v1.07c1.88.36 3.29 1.86 3.48 3.73.05.55-.36 1.03-.91 1.08-.55.06-1.03-.36-1.09-.91-.12-1.12-.97-2-2.15-2-.22 0-.44.03-.66.08-.88.22-1.46.99-1.37 1.86.09.84.77 1.46 1.63 1.67l1.35.33c2.09.52 3.32 2.31 2.9 4.39-.36 1.81-1.87 3.12-3.63 3.32z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Mercado Pago</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center sm:flex-col sm:text-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <polyline points="17 1 21 5 17 9"/>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                      <polyline points="7 23 3 19 7 15"/>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Transferencia</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center sm:flex-col sm:text-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <rect width="20" height="12" x="2" y="6" rx="2"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Efectivo</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 mt-4 leading-relaxed">
              El medio de pago final se confirma por WhatsApp al momento de pactar la entrega o retiro con el vendedor.
            </p>
          </div>
        </InfoCardReveal>

        {/* TARJETA 4: Cadena de frío */}
        <InfoCardReveal delay="200ms">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7.5 4.27 9 5.15"/>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Cadena de frío sellada</h4>
                  <p className="text-xs text-slate-500">Garantía térmica continua</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Todos los productos salen directamente del freezer a temperatura controlada. Los envíos se realizan en conservadoras para evitar descongelamiento y asegurar que mantenga la consistencia durante el viaje.
              </p>
            </div>

            <div className="mt-4 p-3 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-2">
              <span className="text-sky-900 font-bold text-xs">Garantía:</span>
              <span className="text-xs text-slate-700">Productos sellados.</span>
            </div>
          </div>
        </InfoCardReveal>

      </div>
    </section>
  );
}