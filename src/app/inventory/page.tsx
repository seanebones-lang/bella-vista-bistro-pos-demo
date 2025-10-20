'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Package,
  AlertTriangle,
  CheckCircle,
  Plus,
  Minus,
  Search,
  ArrowLeft,
  TrendingUp,
  BarChart3,
  ExternalLink
} from 'lucide-react';

// Mock inventory data
const inventoryItems = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'Produce',
    currentStock: 12,
    minStock: 10,
    maxStock: 50,
    unit: 'lbs',
    costPerUnit: 2.50,
    lastUpdated: '2024-01-15T14:30:00Z',
    supplier: 'Local Farm Co.',
    status: 'LOW_STOCK' as const
  },
  {
    id: '2',
    name: 'Mozzarella Cheese',
    category: 'Dairy',
    currentStock: 8,
    minStock: 5,
    maxStock: 30,
    unit: 'lbs',
    costPerUnit: 4.75,
    lastUpdated: '2024-01-15T16:45:00Z',
    supplier: 'Dairy Fresh Inc.',
    status: 'LOW_STOCK' as const
  },
  {
    id: '3',
    name: 'Fresh Basil',
    category: 'Produce',
    currentStock: 25,
    minStock: 15,
    maxStock: 40,
    unit: 'bunches',
    costPerUnit: 1.25,
    lastUpdated: '2024-01-15T12:15:00Z',
    supplier: 'Herb Garden Ltd.',
    status: 'NORMAL' as const
  },
  {
    id: '4',
    name: 'Olive Oil',
    category: 'Pantry',
    currentStock: 3,
    minStock: 2,
    maxStock: 12,
    unit: 'bottles',
    costPerUnit: 12.99,
    lastUpdated: '2024-01-15T10:30:00Z',
    supplier: 'Italian Imports',
    status: 'LOW_STOCK' as const
  },
  {
    id: '5',
    name: 'Pasta Dough',
    category: 'Prepared',
    currentStock: 45,
    minStock: 20,
    maxStock: 60,
    unit: 'lbs',
    costPerUnit: 3.20,
    lastUpdated: '2024-01-15T09:00:00Z',
    supplier: 'Pasta Factory',
    status: 'NORMAL' as const
  },
  {
    id: '6',
    name: 'Atlantic Salmon',
    category: 'Seafood',
    currentStock: 15,
    minStock: 8,
    maxStock: 25,
    unit: 'lbs',
    costPerUnit: 18.50,
    lastUpdated: '2024-01-15T11:20:00Z',
    supplier: 'Ocean Fresh Seafood',
    status: 'NORMAL' as const
  }
];

const categories = ['all', ...new Set(inventoryItems.map(item => item.category))];

export default function InventoryManagement() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showLowStockOnly, setShowLowStockOnly] = useState<boolean>(false);

  const filteredItems = inventoryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLowStock = !showLowStockOnly || item.status === 'LOW_STOCK';
    return matchesCategory && matchesSearch && matchesLowStock;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LOW_STOCK': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'OUT_OF_STOCK': return 'bg-red-100 text-red-800 border-red-200';
      case 'NORMAL': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'LOW_STOCK': return <AlertTriangle className="h-4 w-4" />;
      case 'OUT_OF_STOCK': return <AlertTriangle className="h-4 w-4" />;
      case 'NORMAL': return <CheckCircle className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const updateStock = (itemId: string, operation: 'add' | 'subtract' | 'set', quantity: number) => {
    // In a real app, this would make an API call
    console.log(`Update stock: ${itemId}, ${operation}, ${quantity}`);
  };

  const lowStockItems = inventoryItems.filter(item => item.status === 'LOW_STOCK').length;
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.costPerUnit), 0);

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
                <Package className="h-6 w-6 text-green-400 mr-2" />
                <h1 className="text-2xl font-bold text-white">Inventory Management</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                About System
              </Link>
              <Badge variant="outline" className="bg-yellow-900 text-yellow-300 border-yellow-700">
                {lowStockItems} Low Stock Items
              </Badge>
              <div className="text-sm text-gray-300">
                <BarChart3 className="h-4 w-4 inline mr-1" />
                Total Value: ${totalValue.toFixed(2)}
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
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowLowStockOnly(!showLowStockOnly)}
              variant={showLowStockOnly ? "default" : "outline"}
              className={showLowStockOnly ? "bg-yellow-600 hover:bg-yellow-700" : ""}
            >
              <AlertTriangle className="h-4 w-4 mr-1" />
              Low Stock Only
            </Button>
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
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </div>
                  <Badge className={`${getStatusColor(item.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(item.status)}
                      <span>{item.status.replace('_', ' ')}</span>
                    </div>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Current Stock</div>
                    <div className="font-semibold text-lg">{item.currentStock} {item.unit}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Min Stock</div>
                    <div className="font-semibold">{item.minStock} {item.unit}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Cost per Unit</div>
                    <div className="font-semibold">${item.costPerUnit.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Total Value</div>
                    <div className="font-semibold">${(item.currentStock * item.costPerUnit).toFixed(2)}</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <div>Supplier: {item.supplier}</div>
                  <div>Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}</div>
                </div>

                {/* Stock Management */}
                <div className="flex items-center space-x-2 pt-2 border-t">
                  <Button
                    onClick={() => updateStock(item.id, 'subtract', 1)}
                    size="sm"
                    variant="outline"
                    disabled={item.currentStock <= 0}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="flex-1 text-center font-medium">{item.currentStock} {item.unit}</span>
                  <Button
                    onClick={() => updateStock(item.id, 'add', 1)}
                    size="sm"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inventory Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{inventoryItems.length}</div>
              <p className="text-xs text-gray-600">Active inventory items</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Low Stock Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{lowStockItems}</div>
              <p className="text-xs text-gray-600">Items below minimum threshold</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${totalValue.toFixed(2)}</div>
              <p className="text-xs text-gray-600">Current inventory value</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Predictions */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>AI Inventory Predictions</span>
              </CardTitle>
              <CardDescription>
                Machine learning analysis for optimal stock management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-green-100">
                  <h4 className="font-medium text-gray-900 mb-2">Reorder Recommendations</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Fresh Tomatoes</span>
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Mozzarella Cheese</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Soon</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Olive Oil</span>
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <h4 className="font-medium text-gray-900 mb-2">Usage Forecasting</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Peak Usage: 6-8 PM</span>
                      <span className="text-blue-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekly Trend</span>
                      <span className="text-green-600">+8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seasonal Adjustment</span>
                      <span className="text-purple-600">+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
