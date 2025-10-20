'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ChefHat,
  Clock,
  CheckCircle,
  AlertCircle,
  Package,
  ArrowLeft,
  Timer,
  Users,
  TrendingUp
} from 'lucide-react';

// Mock order data
interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  notes?: string;
  modifiers?: string[];
}

interface Order {
  id: string;
  orderNumber: string;
  status: 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED';
  items: OrderItem[];
  customerName?: string;
  orderType: 'DINE_IN' | 'TAKEOUT' | 'DELIVERY';
  createdAt: string;
  estimatedTime?: number;
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'BV-001',
    status: 'PREPARING',
    items: [
      { id: '1', name: 'Margherita Pizza', quantity: 1, notes: 'Extra cheese' },
      { id: '2', name: 'Caesar Salad', quantity: 1 }
    ],
    customerName: 'John Smith',
    orderType: 'DINE_IN',
    createdAt: '2024-01-15T18:30:00Z',
    estimatedTime: 12
  },
  {
    id: '2',
    orderNumber: 'BV-002',
    status: 'READY',
    items: [
      { id: '3', name: 'Grilled Salmon', quantity: 1, modifiers: ['No lemon'] },
      { id: '4', name: 'Chocolate Cake', quantity: 2 }
    ],
    customerName: 'Sarah Johnson',
    orderType: 'TAKEOUT',
    createdAt: '2024-01-15T18:25:00Z',
    estimatedTime: 8
  },
  {
    id: '3',
    orderNumber: 'BV-003',
    status: 'PENDING',
    items: [
      { id: '1', name: 'Margherita Pizza', quantity: 2 },
      { id: '5', name: 'House Wine', quantity: 1, notes: 'Red wine' }
    ],
    customerName: 'Mike Davis',
    orderType: 'DELIVERY',
    createdAt: '2024-01-15T18:20:00Z',
    estimatedTime: 15
  }
];

export default function KitchenDisplay() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, status: newStatus }
        : order
    ));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-900 text-yellow-300 border-yellow-700';
      case 'PREPARING': return 'bg-blue-900 text-blue-300 border-blue-700';
      case 'READY': return 'bg-green-900 text-green-300 border-green-700';
      case 'COMPLETED': return 'bg-green-900 text-green-300 border-green-700';
      default: return 'bg-gray-800 text-gray-200 border-gray-600';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'PENDING': return <Clock className="h-4 w-4" />;
      case 'PREPARING': return <Timer className="h-4 w-4" />;
      case 'READY': return <CheckCircle className="h-4 w-4" />;
      case 'COMPLETED': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getOrderTypeIcon = (type: Order['orderType']) => {
    switch (type) {
      case 'DINE_IN': return <Users className="h-4 w-4" />;
      case 'TAKEOUT': return <Package className="h-4 w-4" />;
      case 'DELIVERY': return <TrendingUp className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}m ago`;
    } else {
      const hours = Math.floor(diffMinutes / 60);
      return `${hours}h ago`;
    }
  };

  const pendingOrders = orders.filter(order => order.status === 'PENDING').length;
  const preparingOrders = orders.filter(order => order.status === 'PREPARING').length;
  const readyOrders = orders.filter(order => order.status === 'READY').length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-200 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Demo</span>
              </Link>
              <div className="flex items-center">
                <ChefHat className="h-6 w-6 text-orange-500 mr-2" />
                <h1 className="text-2xl font-bold text-white">Kitchen Display System</h1>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{pendingOrders}</div>
                <div className="text-xs text-gray-400">PENDING</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{preparingOrders}</div>
                <div className="text-xs text-gray-400">PREPARING</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{readyOrders}</div>
                <div className="text-xs text-gray-400">READY</div>
              </div>
              <div className="text-sm text-gray-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getStatusColor(order.status)}`}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(order.status)}
                        <span>{order.status}</span>
                      </div>
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-200">
                      <div className="flex items-center space-x-1">
                        {getOrderTypeIcon(order.orderType)}
                        <span>{order.orderType.replace('_', ' ')}</span>
                      </div>
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-400">#{order.orderNumber}</div>
                    <div className="text-xs text-gray-400">{formatTime(order.createdAt)}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-start justify-between p-2 bg-gray-700 rounded">
                      <div className="flex-1">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-sm text-gray-200">Qty: {item.quantity}</div>
                        {item.notes && (
                          <div className="text-xs text-yellow-300 mt-1">Note: {item.notes}</div>
                        )}
                        {item.modifiers && item.modifiers.length > 0 && (
                          <div className="text-xs text-blue-300 mt-1">
                            Modifiers: {item.modifiers.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Info */}
                {order.customerName && (
                  <div className="text-sm text-gray-200">
                    <strong>Customer:</strong> {order.customerName}
                  </div>
                )}

                {/* Estimated Time */}
                {order.estimatedTime && (
                  <div className="text-sm text-gray-200">
                    <strong>Est. Time:</strong> {order.estimatedTime} minutes
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  {order.status === 'PENDING' && (
                    <Button
                      onClick={() => updateOrderStatus(order.id, 'PREPARING')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      size="sm"
                    >
                      <Timer className="h-4 w-4 mr-1" />
                      Start Preparing
                    </Button>
                  )}

                  {order.status === 'PREPARING' && (
                    <Button
                      onClick={() => updateOrderStatus(order.id, 'READY')}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      size="sm"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Mark Ready
                    </Button>
                  )}

                  {order.status === 'READY' && (
                    <Button
                      onClick={() => updateOrderStatus(order.id, 'COMPLETED')}
                      className="flex-1 bg-gray-600 hover:bg-gray-700"
                      size="sm"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Complete
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kitchen Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Avg Prep Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">12.5 min</div>
              <p className="text-xs text-gray-400">-2.1 min from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Orders Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">23</div>
              <p className="text-xs text-gray-400">+5 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Peak Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">7-8 PM</div>
              <p className="text-xs text-gray-400">18 orders</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">Staff Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">4/6</div>
              <p className="text-xs text-gray-400">Kitchen crew</p>
            </CardContent>
          </Card>
        </div>

        {/* Kitchen Alerts */}
        <div className="mt-8">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
                <span>Kitchen Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-900/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">Low Stock Alert</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  Tomatoes (2 left)
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Timer className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">Rush Hour Warning</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Peak hours approaching
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-900/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">System Status</span>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  All systems operational
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
