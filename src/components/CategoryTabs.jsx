export default function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-1 scrollbar-none">
      <button
        type="button"
        onClick={() => onSelectCategory('todas')}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
          selectedCategory === 'todas'
            ? 'bg-sky-900 text-white shadow-sm ring-1 ring-sky-950/20 scale-[1.02]'
            : 'bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50/80 shadow-2xs'
        }`}
      >
        Todos
      </button>

      {categories.map((cat) => {
        const isActive = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-sky-900 text-white shadow-sm ring-1 ring-sky-950/20 scale-[1.02]'
                : 'bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50/80 shadow-2xs'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}