import { useEffect, useRef, useState } from 'react';

export default function ProductCard({ product, index = 0 }) {
  const { name, combination, description, price, image, badge } = product;
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -25px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayStyle = {
    transitionDelay: `${(index % 3) * 80}ms`,
  };

  return (
    <article
      ref={cardRef}
      style={delayStyle}
      className={`group bg-white rounded-3xl p-3.5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-sky-200 flex flex-col justify-between product-card-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {badge && (
          <span className="absolute top-2.5 left-2.5 bg-sky-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-sky-700/50">
            {badge}
          </span>
        )}
      </div>

      {/* Info y Precio */}
      <div className="pt-4 pb-2 px-1 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-base leading-snug tracking-tight">
            {name}
          </h3>

          {combination && (
            <p className="text-xs font-semibold text-sky-700 mt-1">
              {combination}
            </p>
          )}

          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Precio */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
            Precio
          </span>
          <span className="text-xl font-black text-slate-900 tracking-tight">
            ${price.toLocaleString('es-AR')}
          </span>
        </div>
      </div>
    </article>
  );
}