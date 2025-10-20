# Bella Vista Bistro - Restaurant POS System Demo

**LEGAL NOTICE - PROPRIETARY SOFTWARE DEMONSTRATION**
This is a demonstration version of proprietary software owned by Sean McDonnell (2025). This demo is provided for evaluation purposes only. A valid license must be obtained prior to any production use, testing, or deployment. No part of this system or its code may be used, copied, modified, or distributed without explicit written permission from the owner.

## Overview

A comprehensive demonstration of a modern restaurant POS system featuring:

- **POS Terminal**: Full-featured point-of-sale interface
- **Online Ordering**: Customer-facing ordering experience
- **Kitchen Display System**: Real-time order management
- **Analytics Dashboard**: Business intelligence and reporting
- **Inventory Management**: Stock tracking and AI predictions
- **Administration Panel**: System configuration and management

## Features Demonstrated

### Core POS Features
- ✅ Menu management with categories and modifiers
- ✅ Real-time order processing and payment handling
- ✅ Customer information collection
- ✅ Tax calculation and receipt generation
- ✅ Staff interface with role-based access

### Customer Experience
- ✅ Mobile-optimized online ordering interface
- ✅ Pickup and delivery options
- ✅ Real-time order status updates
- ✅ Customer ratings and reviews
- ✅ Responsive design for all devices

### Kitchen Operations
- ✅ Real-time order display for kitchen staff
- ✅ Order status tracking (Pending → Preparing → Ready → Completed)
- ✅ Priority queuing for rush orders
- ✅ Kitchen alerts and notifications
- ✅ Staff performance metrics

### Business Intelligence
- ✅ Sales analytics and trend analysis
- ✅ Inventory forecasting with AI
- ✅ Customer behavior insights
- ✅ Revenue and performance metrics
- ✅ Peak hour identification

### Inventory Management
- ✅ Stock level tracking with alerts
- ✅ Automated reorder recommendations
- ✅ Supplier management
- ✅ Cost analysis and optimization
- ✅ Usage pattern analysis

## Technology Stack

- **Frontend**: Next.js 15.5.6 with React 18.3.1
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: Lucide React 0.460.0
- **TypeScript**: 5.9.3 for type safety
- **Build System**: Turbopack for fast development

## Quick Start

### Prerequisites
- Node.js 22+
- npm or yarn

### Installation
```bash
cd demo-app
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the demo.

### Production Build
```bash
npm run build
npm start
```

## Demo Navigation

### Home Page (`/`)
- System overview with feature cards
- Restaurant branding and information
- Navigation to all demo sections
- System capabilities summary

### POS Terminal (`/pos`)
- Full POS interface with menu browsing
- Category filtering and search
- Cart management and checkout
- Payment processing simulation
- Real-time order status

### Online Ordering (`/ordering`)
- Customer-facing ordering interface
- Menu browsing with ratings and descriptions
- Cart management and customer information
- Pickup/delivery options with pricing
- Order confirmation and status tracking

### Kitchen Display (`/kitchen`)
- Real-time kitchen order management
- Order status progression (Pending → Ready)
- Kitchen staff interface with alerts
- Performance metrics and timing
- Priority order handling

### Analytics Dashboard (`/analytics`)
- Business intelligence and reporting
- Sales trends and forecasting
- Inventory predictions and alerts
- Customer behavior analysis
- Performance metrics and KPIs

### Inventory Management (`/inventory`)
- Stock level tracking and management
- Low stock alerts and reorder recommendations
- Supplier information and cost tracking
- Usage pattern analysis
- AI-powered forecasting

### Administration (`/admin`)
- System configuration and settings
- Staff management and permissions
- Integration status and management
- Business hours and operational settings
- Third-party service configuration

## Demo Data

The demonstration includes realistic mock data for:
- Menu items with categories, prices, and descriptions
- Customer orders with various scenarios
- Inventory items with stock levels and costs
- Staff members with different roles
- Analytics data showing business trends
- System integrations and configurations

## Performance Features

- **Fast Loading**: Optimized for quick demo startup
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Live order status and inventory changes
- **Interactive Elements**: All buttons and forms are functional
- **Professional UI**: Clean, modern interface design

## Hosting Options

### Local Development
```bash
npm run dev
# Demo available at http://localhost:3000
```

### Production Deployment
```bash
npm run build
npm start
# Production server at http://localhost:3000
```

### Docker Deployment
```bash
docker build -t bella-vista-demo .
docker run -p 3000:3000 bella-vista-demo
```

## License and Usage

**IMPORTANT**: This is a demonstration version only. For production use:

1. Contact Sean McDonnell for licensing information
2. Obtain appropriate license for your business needs
3. Complete setup and configuration for your environment
4. Train staff on system usage and procedures

## Support

For licensing inquiries, technical support, or customization requests, contact the system owner.

---

**Bella Vista Bistro POS Demo** | **Version 1.0.0** | **Built with Next.js 15.5.6**
