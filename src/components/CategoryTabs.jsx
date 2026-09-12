export default function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-2 px-4 sm:px-0 scrollbar-none touch-pan-x">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-sky-900 text-white shadow-sm ring-1 ring-sky-950/20 scale-[1.02]'
                  : 'bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50/80 shadow-2xs'
              }`}
            >
              <span>{cat.label}</span>
              {typeof cat.count === 'number' && (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-black leading-none transition-colors ${
                    isActive
                      ? 'bg-white text-sky-950 shadow-2xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}