'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingCart,
  Plus,
  Minus,
  CreditCard,
  Receipt,
  Users,
  ChefHat,
  ArrowLeft
} from 'lucide-react';

// Mock menu data
const menuItems = [
  { id: '1', name: 'Margherita Pizza', price: 14.99, category: 'Pizza', isAvailable: true },
  { id: '2', name: 'Caesar Salad', price: 8.99, category: 'Salads', isAvailable: true },
  { id: '3', name: 'Grilled Salmon', price: 18.99, category: 'Mains', isAvailable: true },
  { id: '4', name: 'Chocolate Cake', price: 6.99, category: 'Desserts', isAvailable: true },
  { id: '5', name: 'House Wine', price: 7.99, category: 'Beverages', isAvailable: true },
  { id: '6', name: 'Garlic Bread', price: 4.99, category: 'Appetizers', isAvailable: false },
];

const categories = ['all', ...new Set(menuItems.map(item => item.category))];

interface CartItem {
  menuItem: typeof menuItems[0];
  quantity: number;
  notes?: string;
}

export default function POSTerminal() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'CASH' | 'CARD'>('CARD');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (menuItem: typeof menuItems[0]) => {
    const existingItem = cart.find(item =>
      item.menuItem.id === menuItem.id
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.menuItem.id === menuItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        menuItem,
        quantity: 1,
        notes: ''
      }]);
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart(cart.map((item, i) =>
      i === index ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (item.menuItem.price * item.quantity);
    }, 0);
  };

  const getTax = () => {
    return getTotalPrice() * 0.08; // 8% tax
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getTax();
  };

  const handleProcessOrder = async () => {
    if (cart.length === 0) return;

    setIsProcessingPayment(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      alert(`Order processed successfully! Total: $${getFinalTotal().toFixed(2)}`);
      setCart([]);
      setCustomerInfo({ name: '', phone: '', email: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Demo</span>
              </Link>
              <div className="flex items-center">
                <ChefHat className="h-6 w-6 text-orange-500 mr-2" />
                <h1 className="text-xl font-bold text-white">Bella Vista Bistro POS</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                Staff Interface
              </Badge>
              <div className="text-sm text-gray-200">
                <Users className="h-4 w-4 inline mr-1" />
                Active Orders: 3
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  disabled={!item.isAvailable}
                  className={`p-4 rounded-lg text-left transition-all border ${
                    item.isAvailable
                      ? 'bg-gray-800 border-gray-700 hover:shadow-md hover:scale-105 text-white'
                      : 'bg-gray-700 border-gray-600 opacity-50 cursor-not-allowed text-gray-400'
                  }`}
                >
                  <div className="mb-2">
                    <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                    <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  {!item.isAvailable && (
                    <p className="text-red-500 text-xs">Out of Stock</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cart & Checkout Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Current Order
              </h2>

              {/* Cart Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">No items in cart</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded border border-gray-600">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-white">{item.menuItem.name}</h4>
                        <p className="text-xs text-gray-200">${item.menuItem.price.toFixed(2)} each</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-500"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-500"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Customer Info */}
              <div className="space-y-3 mb-6">
                <h3 className="font-medium">Customer Information</h3>
                <input
                  type="text"
                  placeholder="Customer Name (Optional)"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-gray-700 text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-gray-700 text-white"
                />
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPaymentMethod('CARD')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      paymentMethod === 'CARD'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-white border border-gray-600'
                    }`}
                  >
                    <CreditCard className="h-4 w-4 inline mr-1" />
                    Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('CASH')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      paymentMethod === 'CASH'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-white border border-gray-600'
                    }`}
                  >
                    Cash
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${getTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${getFinalTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Process Order Button */}
              <button
                onClick={handleProcessOrder}
                disabled={cart.length === 0 || isProcessingPayment}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  cart.length === 0 || isProcessingPayment
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isProcessingPayment ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Receipt className="h-5 w-5" />
                    <span>Process Order</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Today&apos;s Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">47</div>
              <p className="text-xs text-gray-400">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">$2,847</div>
              <p className="text-xs text-gray-400">+$234 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Avg Order Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">$60.57</div>
              <p className="text-xs text-gray-400">+$3.42 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Active Tables</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">8/16</div>
              <p className="text-xs text-gray-400">50% capacity</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
