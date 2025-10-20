'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingCart,
  Plus,
  Minus,
  Clock,
  MapPin,
  Phone,
  Star,
  ChefHat,
  Truck,
  CreditCard,
  ArrowLeft,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

// Mock menu data
const menuItems = [
  { id: '1', name: 'Margherita Pizza', price: 14.99, category: 'Pizza', description: 'Fresh mozzarella, tomato sauce, basil', rating: 4.8, image: '/pizza.jpg' },
  { id: '2', name: 'Caesar Salad', price: 8.99, category: 'Salads', description: 'Romaine lettuce, parmesan, croutons, Caesar dressing', rating: 4.6, image: '/salad.jpg' },
  { id: '3', name: 'Grilled Salmon', price: 18.99, category: 'Mains', description: 'Atlantic salmon with lemon herb butter', rating: 4.9, image: '/salmon.jpg' },
  { id: '4', name: 'Chocolate Cake', price: 6.99, category: 'Desserts', description: 'Rich chocolate cake with vanilla ice cream', rating: 4.7, image: '/cake.jpg' },
  { id: '5', name: 'House Wine', price: 7.99, category: 'Beverages', description: 'Red or white wine selection', rating: 4.5, image: '/wine.jpg' },
  { id: '6', name: 'Garlic Bread', price: 4.99, category: 'Appetizers', description: 'Fresh baked bread with garlic butter', rating: 4.4, image: '/bread.jpg' },
];

const categories = ['all', ...new Set(menuItems.map(item => item.category))];

interface CartItem {
  menuItem: typeof menuItems[0];
  quantity: number;
  notes?: string;
}

export default function OnlineOrdering() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    orderType: 'pickup' as 'pickup' | 'delivery'
  });
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'CASH'>('CARD');
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const getDeliveryFee = () => {
    return customerInfo.orderType === 'delivery' ? 3.99 : 0;
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getTax() + getDeliveryFee();
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;

    setIsProcessingOrder(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessingOrder(false);
      setOrderPlaced(true);

      // Reset after showing success message
      setTimeout(() => {
        setOrderPlaced(false);
        setCart([]);
        setCustomerInfo({ name: '', phone: '', email: '', address: '', orderType: 'pickup' });
      }, 3000);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">
              Your order #{Math.floor(Math.random() * 10000)} has been confirmed.
              {customerInfo.orderType === 'delivery'
                ? ' Estimated delivery time: 25-35 minutes.'
                : ' You can pick up your order in 15-20 minutes.'}
            </p>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Demo
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Demo</span>
              </Link>
              <div className="flex items-center">
                <ChefHat className="h-6 w-6 text-orange-500 mr-2" />
                <h1 className="text-2xl font-bold text-white">Bella Vista Bistro</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                About System
              </Link>
              <Badge variant="outline" className="bg-green-900 text-green-300 border-green-700">
                Online Ordering
              </Badge>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-1" />
                Open until 10 PM
              </div>
              <a
                href="https://bizbot.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>BizBot</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            {/* Restaurant Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Bella Vista Bistro</h2>
                  <p className="text-gray-600">Authentic Italian Cuisine</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-gray-500">(127 reviews)</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  123 Main Street, Downtown
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1" />
                  Free delivery over $25
                </div>
              </div>
            </div>

            {/* Order Type Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-medium mb-4">Order Type</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCustomerInfo({...customerInfo, orderType: 'pickup'})}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    customerInfo.orderType === 'pickup'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="h-4 w-4 inline mr-2" />
                  Pickup (15-20 min)
                </button>
                <button
                  onClick={() => setCustomerInfo({...customerInfo, orderType: 'delivery'})}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    customerInfo.orderType === 'delivery'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Truck className="h-4 w-4 inline mr-2" />
                  Delivery (25-35 min)
                  {customerInfo.orderType === 'delivery' && <span className="block text-xs">+$3.99</span>}
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                      <span className="text-4xl">🍕</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                      <span className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                      <Button
                        onClick={() => addToCart(item)}
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart & Checkout Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Your Order
              </h2>

              {/* Cart Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.menuItem.name}</h4>
                        <p className="text-xs text-gray-600">${item.menuItem.price.toFixed(2)} each</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Customer Info */}
              {cart.length > 0 && (
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium">Contact Information</h3>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  {customerInfo.orderType === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Delivery Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      required
                    />
                  )}
                </div>
              )}

              {/* Payment Method */}
              {cart.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Payment Method</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPaymentMethod('CARD')}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'CARD'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700'
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
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Cash
                    </button>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              {cart.length > 0 && (
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span>${getTax().toFixed(2)}</span>
                  </div>
                  {getDeliveryFee() > 0 && (
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span>${getDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>${getFinalTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}

              {/* Place Order Button */}
              <Button
                onClick={handlePlaceOrder}
                disabled={cart.length === 0 || isProcessingOrder || !customerInfo.name || !customerInfo.phone || (customerInfo.orderType === 'delivery' && !customerInfo.address)}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  cart.length === 0 || isProcessingOrder || !customerInfo.name || !customerInfo.phone || (customerInfo.orderType === 'delivery' && !customerInfo.address)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isProcessingOrder ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Place Order</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
