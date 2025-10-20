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
  Zap,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Bella Vista Bistro</h1>
                <p className="text-sm text-gray-200">Complete Restaurant POS System Demo</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                About System
              </Link>
              <Badge variant="outline" className="bg-green-900 text-green-300 border-green-700">
                Live Demo
              </Badge>
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

      {/* Featured Documentation Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>New: Comprehensive System Documentation</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Complete System Overview & Documentation
            </h2>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Detailed explanation of what this system is, who it's for, every feature, how to use the demo,
              business benefits, and technical specifications. Perfect for prospective buyers and evaluators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Read Complete Documentation</span>
              </Link>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Everything you need to know about this system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Restaurant Management Solution
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience our comprehensive POS system featuring online ordering, inventory management,
            real-time kitchen display, AI-powered analytics, and seamless payment processing.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/pos" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">POS Terminal</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Full-featured point-of-sale interface with menu management, order processing, and payment handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <Clock className="h-4 w-4 mr-1" />
                  Real-time order processing
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ordering" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-900 rounded-lg">
                    <Smartphone className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Online Ordering</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Customer-facing ordering interface with menu browsing, cart management, and checkout flow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <Zap className="h-4 w-4 mr-1" />
                  Mobile-optimized experience
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kitchen" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-900 rounded-lg">
                    <ChefHat className="h-6 w-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Kitchen Display</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Real-time kitchen display system showing incoming orders with priority queuing and status updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <Clock className="h-4 w-4 mr-1" />
                  Live order updates
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/analytics" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-900 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Analytics Dashboard</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Business intelligence with sales analytics, inventory forecasting, and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  AI-powered insights
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/inventory" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-900 rounded-lg">
                    <Package className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">Inventory Management</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Stock level tracking, automated reordering, and supplier management with low-stock alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <Shield className="h-4 w-4 mr-1" />
                  Automated alerts
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin" className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-700 rounded-lg">
                    <Settings className="h-6 w-6 text-gray-200" />
                  </div>
                  <CardTitle className="text-white">Administration</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  System configuration, user management, menu editing, and operational settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-200">
                  <Settings className="h-4 w-4 mr-1" />
                  Complete control
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* System Features */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-8 mb-16 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">System Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-200">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;200ms</div>
              <div className="text-sm text-gray-200">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-200">Concurrent Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">&lt;5s</div>
              <div className="text-sm text-gray-200">Order Processing</div>
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
              className="bg-gray-700 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 border border-orange-600 transition-colors"
            >
              Try POS Terminal
            </Link>
            <Link
              href="/ordering"
              className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors"
            >
              Customer Ordering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
