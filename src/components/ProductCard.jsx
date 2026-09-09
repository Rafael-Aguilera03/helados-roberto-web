import { useEffect, useRef, useState } from 'react';

export default function ProductCard({ product, index = 0 }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

// Un escalonado suave por fila con tope de 180ms
const staggeredDelay = `${(index % 3) * 80}ms`;

  return (
    <article
      ref={cardRef}
      style={{ transitionDelay: staggeredDelay }}
      className="product-card-reveal bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Contenedor de imagen con fallback visual */}
        <div className="relative w-full aspect-square rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center mb-4">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-900 text-white shadow-sm">
              {product.badge}
            </span>
          )}

          {/* Efecto esqueleto mientras descarga */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          )}

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-contain p-4 transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        </div>

        {/* Título y detalles */}
        <h3 className="font-bold text-slate-900 text-base leading-snug">
          {product.name}
        </h3>

        {product.unit && (
          <p className="text-xs font-semibold text-sky-700 mt-1">
            {product.unit}
          </p>
        )}

        {product.flavors && (
          <p className="text-xs text-slate-500 mt-1">
            {product.flavors}
          </p>
        )}

        {product.description && (
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>

      {/* Pie de precio */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-baseline justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Precio
        </span>
        <span className="text-xl font-black text-slate-900">
          {formattedPrice}
        </span>
      </div>
    </article>
  );
}