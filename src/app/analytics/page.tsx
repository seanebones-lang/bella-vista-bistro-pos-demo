'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  ArrowLeft,
  Calendar,
  BarChart3,
  Target,
  Clock
} from 'lucide-react';

// Mock analytics data
const salesData = [
  { day: 'Mon', sales: 2400, orders: 45 },
  { day: 'Tue', sales: 1398, orders: 32 },
  { day: 'Wed', sales: 9800, orders: 89 },
  { day: 'Thu', sales: 3908, orders: 67 },
  { day: 'Fri', sales: 4800, orders: 78 },
  { day: 'Sat', sales: 3800, orders: 65 },
  { day: 'Sun', sales: 4300, orders: 72 }
];

const topItems = [
  { name: 'Margherita Pizza', sales: 89, revenue: 1335 },
  { name: 'Grilled Salmon', sales: 67, revenue: 1273 },
  { name: 'Caesar Salad', sales: 54, revenue: 486 },
  { name: 'Chocolate Cake', sales: 43, revenue: 301 },
  { name: 'House Wine', sales: 38, revenue: 304 }
];

const orderTypes = [
  { type: 'Dine-in', count: 156, percentage: 45 },
  { type: 'Takeout', count: 98, percentage: 28 },
  { type: 'Delivery', count: 93, percentage: 27 }
];

const hourlyData = [
  { hour: '11 AM', orders: 12 },
  { hour: '12 PM', orders: 18 },
  { hour: '1 PM', orders: 25 },
  { hour: '2 PM', orders: 22 },
  { hour: '3 PM', orders: 15 },
  { hour: '4 PM', orders: 8 },
  { hour: '5 PM', orders: 35 },
  { hour: '6 PM', orders: 42 },
  { hour: '7 PM', orders: 38 },
  { hour: '8 PM', orders: 28 },
  { hour: '9 PM', orders: 18 },
  { hour: '10 PM', orders: 12 }
];

export default function AnalyticsDashboard() {
  const totalSales = salesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalSales / totalOrders;

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
                <BarChart3 className="h-6 w-6 text-blue-400 mr-2" />
                <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-900 text-blue-300 border-blue-700">
                Business Intelligence
              </Badge>
              <div className="text-sm text-gray-300">
                <Calendar className="h-4 w-4 inline mr-1" />
                Last 7 days
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSales.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8.2%</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+3.1%</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Peak Hour</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7-8 PM</div>
              <p className="text-xs text-muted-foreground">
                42 orders peak
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Sales Trend</CardTitle>
              <CardDescription>Revenue and order count over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.map((day) => (
                  <div key={day.day} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${(day.orders / Math.max(...salesData.map(d => d.orders))) * 100}%` }}
                        />
                        <span className="text-sm text-gray-600">{day.orders} orders</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div
                          className="h-2 bg-green-500 rounded-full"
                          style={{ width: `${(day.sales / Math.max(...salesData.map(d => d.sales))) * 100}%` }}
                        />
                        <span className="text-sm text-gray-600">${day.sales}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Order Types Distribution</CardTitle>
              <CardDescription>Breakdown of order types this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderTypes.map((type) => (
                  <div key={type.type} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-600">{type.type}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div
                          className="h-3 bg-purple-500 rounded-full"
                          style={{ width: `${type.percentage}%` }}
                        />
                        <span className="text-sm text-gray-600">{type.count} orders</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">{type.percentage}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hourly Activity and Top Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hourly Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Hourly Order Activity</CardTitle>
              <CardDescription>Order volume throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hourlyData.map((hour) => (
                  <div key={hour.hour} className="flex items-center space-x-4">
                    <div className="w-16 text-sm text-gray-600">{hour.hour}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div
                          className="h-2 bg-orange-500 rounded-full"
                          style={{ width: `${(hour.orders / Math.max(...hourlyData.map(h => h.orders))) * 100}%` }}
                        />
                        <span className="text-sm text-gray-600">{hour.orders} orders</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Selling Items */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Items</CardTitle>
              <CardDescription>Best performing menu items this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topItems.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.sales} sold</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">${item.revenue}</div>
                      <div className="text-xs text-gray-500">revenue</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span>AI-Powered Insights</span>
              </CardTitle>
              <CardDescription>
                Machine learning analysis of your restaurant performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-medium text-gray-900 mb-2">Peak Performance Prediction</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Based on historical data, Saturday evenings show 35% higher order volume.
                  Consider scheduling additional staff for 6-9 PM on weekends.
                </p>
                <Badge className="bg-blue-100 text-blue-800">High Confidence</Badge>
              </div>

              <div className="p-4 bg-white rounded-lg border border-green-100">
                <h4 className="font-medium text-gray-900 mb-2">Menu Optimization Suggestion</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Grilled Salmon has 23% higher profit margin than average menu items.
                  Consider featuring it more prominently or increasing its price point.
                </p>
                <Badge className="bg-green-100 text-green-800">Actionable</Badge>
              </div>

              <div className="p-4 bg-white rounded-lg border border-yellow-100">
                <h4 className="font-medium text-gray-900 mb-2">Inventory Alert</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Current tomato inventory will be depleted in 2 days based on usage patterns.
                  Consider placing an order to avoid stockouts.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">Urgent</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Performance Summary</CardTitle>
              <CardDescription>Key performance indicators for the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98.2%</div>
                  <div className="text-sm text-gray-600">Payment Success Rate</div>
                  <div className="text-xs text-green-600 mt-1">Above industry average</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.7</div>
                  <div className="text-sm text-gray-600">Average Customer Rating</div>
                  <div className="text-xs text-blue-600 mt-1">Excellent service quality</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">12.3%</div>
                  <div className="text-sm text-gray-600">Cost Efficiency</div>
                  <div className="text-xs text-purple-600 mt-1">Improved from last week</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
