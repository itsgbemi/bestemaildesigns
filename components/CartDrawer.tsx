
import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      
      <div className={`absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={24} className="text-pastel-green" />
            Your Shopping Cart
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
              <ShoppingBag size={64} strokeWidth={1} />
              <p className="text-lg">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="text-pastel-green font-bold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{item.title}</h4>
                    <p className="text-sm text-gray-500">by {item.author}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-pastel-green">${item.price}</span>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest text-center">
              Taxes and shipping calculated at checkout
            </p>
            <button className="w-full bg-pastel-green text-white py-4 rounded-xl font-bold text-lg hover:bg-[#096a67] transition-all transform active:scale-[0.98] shadow-lg shadow-teal-100">
              CHECKOUT NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
