
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductPreviewModal from './components/ProductPreviewModal';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePreviewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsPreviewOpen(true);
  };

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const popularProducts = PRODUCTS.filter(p => p.isSale || !p.isFeatured);

  return (
    <div className="min-h-screen">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />

        {/* Featured Section */}
        <section className="px-4 md:px-8 py-16 max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Products from Featured Shops</h2>
            <a href="#" className="text-sm font-bold text-pastel-green hover:underline">Explore Products</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
                onPreview={handlePreviewProduct}
              />
            ))}
          </div>
        </section>

        {/* Popular Section */}
        <section className="px-4 md:px-8 py-16 max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Popular Templates</h2>
            <a href="#" className="text-sm font-bold text-pastel-green hover:underline">Explore Templates</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {popularProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
                onPreview={handlePreviewProduct}
              />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemoveItem={handleRemoveFromCart}
      />

      <ProductPreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Chat Trigger Mock */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-[#48bdb2] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
