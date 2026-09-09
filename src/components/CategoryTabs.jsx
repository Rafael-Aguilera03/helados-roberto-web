export default function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <button
        type="button"
        onClick={() => onSelectCategory('todas')}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
          selectedCategory === 'todas'
            ? 'bg-slate-900 text-white shadow-sm'
            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
        }`}
      >
        Todos
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            selectedCategory === cat.id
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}