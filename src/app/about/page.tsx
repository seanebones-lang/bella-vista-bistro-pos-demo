'use client';

// LEGAL NOTICE - PROPRIETARY SOFTWARE DEMONSTRATION
// This is a demonstration version of proprietary software owned by Sean McDonnell (2025).
// This demo is provided for evaluation purposes only. A valid license must be obtained
// prior to any production use, testing, or deployment. No part of this system or its
// code may be used, copied, modified, or distributed without explicit written permission
// from the owner.

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  CheckCircle,
  Users,
  TrendingUp,
  Package,
  Smartphone,
  ChefHat,
  BarChart3,
  Settings,
  Clock,
  Shield,
  Zap,
  Star,
  Award,
  Building2,
  Utensils,
  Coffee,
  ShoppingBag,
  Truck,
  Calculator,
  Bell,
  Eye,
  Target,
  Rocket,
  Heart,
  Globe,
  ExternalLink
} from 'lucide-react';

export default function About() {
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
                <Globe className="h-6 w-6 text-blue-400 mr-2" />
                <h1 className="text-2xl font-bold text-white">Complete System Overview</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-900 text-blue-300 border-blue-700">
                Enterprise Solution
              </Badge>
              <a
                href="https://bizbot.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit BizBot</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legal Notice Section */}
        <div className="mb-12">
          <Card className="bg-red-900/20 border-red-700 border-2">
            <CardHeader>
              <CardTitle className="text-red-300 flex items-center">
                <Shield className="h-6 w-6 text-red-400 mr-2" />
                IMPORTANT LEGAL NOTICE - PROPRIETARY SOFTWARE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-red-200 font-semibold">
                  This is a demonstration version of proprietary software owned by Sean McDonnell (2025).
                </p>
                <p className="text-red-200">
                  This demo is provided for <strong>evaluation purposes only</strong>. A valid license must be obtained prior to any production use, testing, or deployment.
                </p>
                <p className="text-red-200 font-semibold">
                  No part of this system or its code may be used, copied, modified, or distributed without explicit written permission from the owner.
                </p>
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-700">
                  <p className="text-red-100 text-sm">
                    <strong>For licensing inquiries:</strong> Contact the system owner for proper licensing and usage permissions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bella Vista Bistro Restaurant POS System
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8">
            A comprehensive, enterprise-grade restaurant management solution designed for modern food service operations.
            Built with cutting-edge technology to streamline operations, enhance customer experience, and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-900 text-green-300">Multi-Location Support</Badge>
            <Badge className="bg-blue-900 text-blue-300">Cloud-Based</Badge>
            <Badge className="bg-purple-900 text-purple-300">AI-Powered</Badge>
            <Badge className="bg-orange-900 text-orange-300">Real-Time Sync</Badge>
          </div>
        </div>

        {/* What This System Is */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Target className="h-6 w-6 text-blue-400 mr-2" />
                What This System Is
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-200 text-lg">
                The Bella Vista Bistro Restaurant POS System is a complete, integrated restaurant management platform
                that combines point-of-sale functionality with comprehensive business intelligence, inventory management,
                and customer relationship tools.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Core Architecture</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Microservices-based backend architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      React/Next.js frontend with TypeScript
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      PostgreSQL database with Prisma ORM
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Real-time WebSocket communication
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Technology Stack</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Node.js/Express backend with TypeScript
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Next.js 15 with App Router
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Tailwind CSS for responsive design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Vercel for global deployment
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Who It's For */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Users className="h-6 w-6 text-green-400 mr-2" />
                Who This System Is For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Utensils className="h-5 w-5 text-orange-400 mr-2" />
                      Full-Service Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Fine dining establishments, casual dining restaurants, and family-style eateries
                      requiring comprehensive order management and customer service tools.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Coffee className="h-5 w-5 text-blue-400 mr-2" />
                      Quick-Service Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Fast food chains, coffee shops, and quick-service establishments
                      needing rapid order processing and efficient operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <ShoppingBag className="h-5 w-5 text-purple-400 mr-2" />
                      Retail Food Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Delis, bakeries, food trucks, and retail food operations
                      requiring inventory management and sales tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Truck className="h-5 w-5 text-green-400 mr-2" />
                      Multi-Location Chains
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Restaurant chains and franchises needing centralized management,
                      standardized processes, and location-specific analytics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Building2 className="h-5 w-5 text-yellow-400 mr-2" />
                    Enterprise Operations
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Large-scale food service operations, hotels, casinos, and institutional
                      food services requiring enterprise-grade solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Rocket className="h-5 w-5 text-red-400 mr-2" />
                    Growing Businesses
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Restaurants planning expansion, new locations, or digital transformation
                      initiatives requiring scalable technology solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What It Does */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                What This System Does
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg mb-8">
                This comprehensive restaurant POS system transforms traditional restaurant operations by integrating
                all aspects of food service management into a unified, intelligent platform that enhances efficiency,
                customer satisfaction, and business profitability.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">Operational Excellence</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Streamlines order processing from customer placement to kitchen completion
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Manages inventory levels with automated reordering and waste reduction
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Provides real-time communication between front-of-house and kitchen staff
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Integrates payment processing with multiple payment methods and providers
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">Business Intelligence</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Generates comprehensive sales reports and performance analytics
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Forecasts demand and optimizes inventory levels using AI algorithms
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Tracks customer preferences and behavior patterns
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Identifies trends and opportunities for menu optimization
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Every Feature in Detail */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                Every Feature in Detail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8">
                {/* POS Terminal */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <ShoppingBag className="h-6 w-6 text-blue-400 mr-2" />
                      POS Terminal - Complete Point-of-Sale Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        The POS Terminal provides a comprehensive interface for restaurant staff to manage all aspects
                        of customer orders, payments, and service operations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Core Features:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Intuitive touchscreen interface</li>
                            <li>• Menu item customization and modifiers</li>
                            <li>• Table management and seating</li>
                            <li>• Split checks and multiple payments</li>
                            <li>• Real-time order status updates</li>
                            <li>• Receipt printing and digital receipts</li>
                            <li>• Cash drawer management</li>
                            <li>• Employee time tracking</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Advanced Capabilities:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Offline mode support</li>
                            <li>• Customer loyalty program integration</li>
                            <li>• Gift card processing</li>
                            <li>• Multi-language support</li>
                            <li>• Customizable UI themes</li>
                            <li>• Barcode scanning</li>
                            <li>• Kitchen printer integration</li>
                            <li>• Real-time inventory updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Online Ordering */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Smartphone className="h-6 w-6 text-green-400 mr-2" />
                      Online Ordering - Customer-Facing Digital Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        A modern, responsive web application that allows customers to browse menus,
                        place orders, and complete transactions digitally.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Customer Features:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Interactive menu with images and descriptions</li>
                            <li>• Real-time availability updates</li>
                            <li>• Customizable order options</li>
                            <li>• Guest checkout and account creation</li>
                            <li>• Multiple payment methods</li>
                            <li>• Order tracking and notifications</li>
                            <li>• Delivery and pickup scheduling</li>
                            <li>• Loyalty rewards integration</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Business Benefits:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Increased order volume</li>
                            <li>• Reduced wait times</li>
                            <li>• Lower labor costs</li>
                            <li>• Customer data collection</li>
                            <li>• Marketing opportunities</li>
                            <li>• 24/7 ordering capability</li>
                            <li>• Contactless transactions</li>
                            <li>• Reduced order errors</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Kitchen Display System */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <ChefHat className="h-6 w-6 text-orange-400 mr-2" />
                      Kitchen Display System - Real-Time Order Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        A specialized display system designed for kitchen environments that provides
                        real-time order information and streamlines food preparation workflows.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Kitchen Operations:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Real-time order notifications</li>
                            <li>• Priority-based order queuing</li>
                            <li>• Preparation time tracking</li>
                            <li>• Ingredient availability alerts</li>
                            <li>• Order completion confirmation</li>
                            <li>• Multi-station coordination</li>
                            <li>• Sound and visual notifications</li>
                            <li>• Touch-optimized interface</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Efficiency Features:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Order bumping and rerouting</li>
                            <li>• Preparation time analytics</li>
                            <li>• Staff performance tracking</li>
                            <li>• Equipment status monitoring</li>
                            <li>• Recipe integration</li>
                            <li>• Waste tracking</li>
                            <li>• Peak hour predictions</li>
                            <li>• Automated timing alerts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Dashboard */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <BarChart3 className="h-6 w-6 text-purple-400 mr-2" />
                      Analytics Dashboard - Business Intelligence Platform
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        A comprehensive analytics platform that provides deep insights into restaurant
                        performance, customer behavior, and operational efficiency.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Performance Analytics:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Real-time sales tracking</li>
                            <li>• Revenue and profit analysis</li>
                            <li>• Customer traffic patterns</li>
                            <li>• Menu item performance</li>
                            <li>• Staff productivity metrics</li>
                            <li>• Peak hour identification</li>
                            <li>• Trend analysis and forecasting</li>
                            <li>• Comparative period analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">AI-Powered Insights:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Demand forecasting</li>
                            <li>• Menu optimization suggestions</li>
                            <li>• Pricing strategy recommendations</li>
                            <li>• Customer preference analysis</li>
                            <li>• Inventory optimization</li>
                            <li>• Staffing requirement predictions</li>
                            <li>• Marketing opportunity identification</li>
                            <li>• Operational efficiency scoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Inventory Management */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Package className="h-6 w-6 text-yellow-400 mr-2" />
                      Inventory Management - Intelligent Stock Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        An intelligent inventory management system that automates stock tracking,
                        optimizes ordering, and prevents waste through predictive analytics.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Core Inventory Features:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Real-time stock level monitoring</li>
                            <li>• Automated reordering alerts</li>
                            <li>• Supplier management</li>
                            <li>• Cost tracking and analysis</li>
                            <li>• Waste and spoilage tracking</li>
                            <li>• Recipe ingredient mapping</li>
                            <li>• Multi-location inventory sync</li>
                            <li>• Barcode scanning integration</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">AI Optimization:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Demand forecasting algorithms</li>
                            <li>• Optimal order quantities</li>
                            <li>• Seasonal trend analysis</li>
                            <li>• Supplier performance scoring</li>
                            <li>• Price optimization suggestions</li>
                            <li>• Waste reduction strategies</li>
                            <li>• Inventory turnover optimization</li>
                            <li>• Automated procurement scheduling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Administration Panel */}
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Settings className="h-6 w-6 text-gray-400 mr-2" />
                      Administration Panel - Complete System Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        A comprehensive administrative interface for managing all aspects of the restaurant
                        operation, from menu configuration to user permissions and system settings.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">System Management:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• User role and permission management</li>
                            <li>• Menu creation and modification</li>
                            <li>• Location and station configuration</li>
                            <li>• Payment method setup</li>
                            <li>• Tax and discount configuration</li>
                            <li>• System backup and recovery</li>
                            <li>• API key and integration management</li>
                            <li>• Audit logging and compliance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Business Configuration:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Business hours and scheduling</li>
                            <li>• Loyalty program setup</li>
                            <li>• Marketing campaign management</li>
                            <li>• Customer data management</li>
                            <li>• Financial reporting configuration</li>
                            <li>• Integration with third-party services</li>
                            <li>• Custom branding and theming</li>
                            <li>• Multi-language support setup</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Use the Demo */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Eye className="h-6 w-6 text-blue-400 mr-2" />
                How to Use This Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-white">1. Explore Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Navigate through each section of the demo to understand the full capabilities:
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• <strong>POS Terminal</strong> - Experience the staff interface</li>
                        <li>• <strong>Online Ordering</strong> - Try the customer experience</li>
                        <li>• <strong>Kitchen Display</strong> - See real-time order management</li>
                        <li>• <strong>Analytics</strong> - Explore business intelligence</li>
                        <li>• <strong>Inventory</strong> - Manage stock and suppliers</li>
                        <li>• <strong>Administration</strong> - Configure system settings</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-white">2. Test Interactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Interact with the system to see how it works in practice:
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Add items to cart in POS terminal</li>
                        <li>• Place orders in online ordering</li>
                        <li>• Update order status in kitchen display</li>
                        <li>• View analytics and reports</li>
                        <li>• Manage inventory levels</li>
                        <li>• Configure admin settings</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-white">3. Evaluate Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Consider how this system would benefit your operation:
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Improved operational efficiency</li>
                        <li>• Enhanced customer experience</li>
                        <li>• Better inventory management</li>
                        <li>• Data-driven decision making</li>
                        <li>• Scalable for business growth</li>
                        <li>• Reduced operational costs</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-semibold text-white mb-4">Demo Limitations</h3>
                  <p className="text-gray-300">
                    This demo showcases the user interface and functionality but operates with mock data.
                    In a production environment, the system would connect to real payment processors,
                    inventory systems, and customer databases for complete functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Helps Businesses */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
                How This System Helps Your Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="h-5 w-5 text-blue-400 mr-2" />
                      Operational Efficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Reduces order processing time by up to 60% and eliminates manual errors
                      through automated workflows and real-time synchronization.
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Faster table turnover</li>
                      <li>• Reduced wait times</li>
                      <li>• Accurate order fulfillment</li>
                      <li>• Streamlined kitchen operations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Bell className="h-5 w-5 text-green-400 mr-2" />
                    Customer Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Improves customer experience through faster service, accurate orders,
                    and personalized interactions based on data-driven insights.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Faster service delivery</li>
                    <li>• Accurate order fulfillment</li>
                    <li>• Personalized recommendations</li>
                    <li>• Loyalty program integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 text-purple-400 mr-2" />
                    Data-Driven Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Provides actionable insights for menu optimization, staffing decisions,
                    and marketing strategies to drive revenue growth.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Menu performance analysis</li>
                    <li>• Customer behavior insights</li>
                    <li>• Peak hour optimization</li>
                    <li>• Marketing effectiveness</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Package className="h-5 w-5 text-yellow-400 mr-2" />
                    Cost Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Optimizes inventory management and reduces waste through predictive
                    analytics and automated reordering systems.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Reduced food waste</li>
                    <li>• Optimized inventory levels</li>
                    <li>• Better supplier negotiations</li>
                    <li>• Lower operational costs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 text-red-400 mr-2" />
                    Risk Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Provides compliance tools, audit trails, and security features
                    to protect business operations and customer data.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• PCI compliance for payments</li>
                    <li>• Data security and encryption</li>
                    <li>• Audit trails and logging</li>
                    <li>• Backup and disaster recovery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Rocket className="h-5 w-5 text-orange-400 mr-2" />
                    Scalability & Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Supports business expansion with multi-location management,
                    standardized processes, and scalable architecture.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Multi-location support</li>
                    <li>• Standardized operations</li>
                    <li>• Cloud-based scalability</li>
                    <li>• Franchise management tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

        {/* Business Types */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Building2 className="h-6 w-6 text-orange-400 mr-2" />
                Business Types This System Serves
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Utensils className="h-5 w-5 text-blue-400 mr-2" />
                      Fine Dining Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      High-end establishments requiring sophisticated order management,
                      wine inventory tracking, and premium customer service features.
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Wine list management</li>
                      <li>• Reservation integration</li>
                      <li>• Premium pricing tiers</li>
                      <li>• VIP customer management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Coffee className="h-5 w-5 text-green-400 mr-2" />
                      Quick Service Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Fast-paced operations needing rapid order processing,
                      drive-thru integration, and high-volume transaction handling.
                    </p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Drive-thru integration</li>
                      <li>• Combo meal management</li>
                      <li>• High-volume processing</li>
                      <li>• Mobile ordering focus</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <ShoppingBag className="h-5 w-5 text-purple-400 mr-2" />
                      Food Retail Operations
                    </CardTitle>
                  </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Delis, bakeries, and specialty food retailers requiring
                    inventory management and customer loyalty programs.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Bakery production tracking</li>
                    <li>• Deli counter management</li>
                    <li>• Specialty item inventory</li>
                    <li>• Customer loyalty programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Truck className="h-5 w-5 text-yellow-400 mr-2" />
                    Multi-Unit Operations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Restaurant chains and franchises needing centralized management,
                    standardized processes, and location-specific analytics.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Centralized menu management</li>
                    <li>• Cross-location reporting</li>
                    <li>• Standardized training</li>
                    <li>• Brand consistency tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building2 className="h-5 w-5 text-red-400 mr-2" />
                    Institutional Food Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Hotels, casinos, hospitals, and schools requiring large-scale
                    food service management and nutritional compliance.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Nutritional tracking</li>
                    <li>• Large-scale production</li>
                    <li>• Compliance reporting</li>
                    <li>• Multi-venue coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Heart className="h-5 w-5 text-pink-400 mr-2" />
                    Specialty Operations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Breweries, wineries, food trucks, and catering services
                    requiring specialized inventory and service management.
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Craft beer inventory</li>
                    <li>• Wine program management</li>
                    <li>• Mobile operation support</li>
                    <li>• Event catering tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Restaurant Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the complete restaurant management solution with real-time ordering,
                intelligent inventory management, and comprehensive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://bizbot.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 border border-orange-600 transition-colors inline-flex items-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get Started with BizBot
                </a>
                <Link
                  href="/"
                  className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors"
                >
                  Back to Demo
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
