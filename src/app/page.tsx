'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChefHat,
  ShoppingCart,
  TrendingUp,
  Package,
  Settings,
  Smartphone,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bella Vista Bistro</h1>
                <p className="text-sm text-gray-600">Complete Restaurant POS System Demo</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Live Demo
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Restaurant Management Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our comprehensive POS system featuring online ordering, inventory management,
            real-time kitchen display, AI-powered analytics, and seamless payment processing.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/pos" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>POS Terminal</CardTitle>
                </div>
                <CardDescription>
                  Full-featured point-of-sale interface with menu management, order processing, and payment handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Real-time order processing
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ordering" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Online Ordering</CardTitle>
                </div>
                <CardDescription>
                  Customer-facing ordering interface with menu browsing, cart management, and checkout flow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Zap className="h-4 w-4 mr-1" />
                  Mobile-optimized experience
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kitchen" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <ChefHat className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Kitchen Display</CardTitle>
                </div>
                <CardDescription>
                  Real-time kitchen display system showing incoming orders with priority queuing and status updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Live order updates
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/analytics" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Analytics Dashboard</CardTitle>
                </div>
                <CardDescription>
                  Business intelligence with sales analytics, inventory forecasting, and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  AI-powered insights
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/inventory" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Package className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>Inventory Management</CardTitle>
                </div>
                <CardDescription>
                  Stock level tracking, automated reordering, and supplier management with low-stock alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="h-4 w-4 mr-1" />
                  Automated alerts
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Settings className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle>Administration</CardTitle>
                </div>
                <CardDescription>
                  System configuration, user management, menu editing, and operational settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Settings className="h-4 w-4 mr-1" />
                  Complete control
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* System Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;200ms</div>
              <div className="text-sm text-gray-600">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Concurrent Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">&lt;5s</div>
              <div className="text-sm text-gray-600">Order Processing</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Restaurant Operations?</h3>
          <p className="text-lg mb-6 opacity-90">
            Experience the complete restaurant management solution with real-time ordering,
            intelligent inventory management, and comprehensive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pos"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Try POS Terminal
            </Link>
            <Link
              href="/ordering"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Customer Ordering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
