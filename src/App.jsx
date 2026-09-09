import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ModeSwitch from './components/ModeSwitch';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import InfoSection from './components/InfoSection';
import FloatingWA from './components/FloatingWA';
import Footer from './components/Footer';
import { products } from './data/products';

export default function App() {
  const [mode, setMode] = useState('menor');
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const whatsappNumber = "5492617035400";

  // Mapeo amigable para las etiquetas de los botones de filtro
  const categoryLabels = {
    // Modo Menor
    'palitos-conos': 'Palitos y Conos',
    'potes-bocaditos': 'Potes y Bocaditos',
    'postres-alfajores': 'Postres y Alfajores',
    'baldes-familiares': 'Baldes Familiares',
    // Modo Mayor
    'cajas-impulsivas': 'Cajas Impulsivas',
    'baldes-10l': 'Baldes 10 Lts',
    'baldes-comerciales': 'Baldes 2L a 5L',
    'packs-postres': 'Packs Postres y Alfajores',
  };

  // Orden predefinido para que los tabs aparezcan siempre en secuencia lógica
  const categoryOrder = [
    'palitos-conos',
    'potes-bocaditos',
    'postres-alfajores',
    'baldes-familiares',
    'cajas-impulsivas',
    'baldes-10l',
    'baldes-comerciales',
    'packs-postres',
  ];

  const modeProducts = products.filter((p) => p.mode === mode);

  // Obtener categorías únicas presentes en el modo actual y ordenarlas según categoryOrder
  const uniqueCategories = Array.from(new Set(modeProducts.map((p) => p.category)));
  const sortedCategories = uniqueCategories.sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  const availableCategories = sortedCategories.map((catId) => ({
    id: catId,
    label: categoryLabels[catId] || catId,
  }));

  const displayedProducts = selectedCategory === 'todas'
    ? modeProducts
    : modeProducts.filter((p) => p.category === selectedCategory);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setSelectedCategory('todas');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-sky-200 selection:text-sky-900">
      <Header />

      <div className="animate-hero">
        <Hero />
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-20" id="catalogo">
        <div className="pt-10 border-t border-slate-200 flex flex-col items-center gap-5 mb-8">
          <ModeSwitch mode={mode} setMode={handleModeChange} />
          <CategoryTabs 
            categories={availableCategories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product, idx) => (
            <ProductCard 
              key={`${product.id}-${mode}-${selectedCategory}`} 
              product={product} 
              index={idx}
            />
          ))}
        </div>

        <InfoSection />
      </main>

      <Footer />
      <FloatingWA phone={whatsappNumber} />
    </div>
  );
}