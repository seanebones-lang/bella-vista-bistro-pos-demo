#!/bin/bash

# Bella Vista Bistro POS Demo - Deployment Script
# This script helps deploy the demo to various platforms for client presentations

set -e

echo "Bella Vista Bistro POS Demo - Deployment Script"
echo "==============================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [platform]"
    echo "Platforms:"
    echo "  vercel    - Deploy to Vercel (recommended for demos)"
    echo "  netlify   - Deploy to Netlify"
    echo "  local     - Start local development server"
    echo "  docker    - Build and run in Docker container"
    echo "  build     - Build for production"
    echo ""
    echo "Examples:"
    echo "  $0 vercel    # Deploy to Vercel"
    echo "  $0 local     # Start local server"
    echo "  $0 docker    # Run in Docker"
}

# Check if platform argument is provided
if [ $# -eq 0 ]; then
    show_usage
    exit 1
fi

PLATFORM=$1

case $PLATFORM in
    "local")
        echo "Starting local development server..."
        echo "Demo will be available at: http://localhost:3000"
        echo ""
        npm run dev
        ;;

    "build")
        echo "Building for production..."
        npm run build
        echo "Build completed successfully!"
        echo "To start production server: npm start"
        ;;

    "docker")
        echo "Building and running in Docker container..."
        echo "Demo will be available at: http://localhost:3000"
        echo ""

        if ! command_exists docker; then
            echo "Docker is not installed. Please install Docker first."
            exit 1
        fi

        docker build -t bella-vista-demo .
        docker run -p 3000:3000 --name bella-vista-demo-container bella-vista-demo

        echo ""
        echo "Demo is now running in Docker!"
        echo "Access at: http://localhost:3000"
        echo "To stop: docker stop bella-vista-demo-container"
        echo "To remove: docker rm bella-vista-demo-container"
        ;;

    "vercel")
        echo "Deploying to Vercel..."
        echo ""

        if ! command_exists vercel; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi

        echo "Please login to Vercel if prompted..."
        vercel --prod

        echo ""
        echo "Deployment completed!"
        echo "Check the deployment URL in the output above"
        ;;

    "netlify")
        echo "Deploying to Netlify..."
        echo ""

        if ! command_exists netlify; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi

        echo "Please login to Netlify if prompted..."
        netlify deploy --prod --dir=.

        echo ""
        echo "Deployment completed!"
        echo "Check the deployment URL in the output above"
        ;;

    *)
        echo "Unknown platform: $PLATFORM"
        show_usage
        exit 1
        ;;
esac

echo ""
echo "Deployment successful!"
echo "For licensing inquiries, contact: Sean McDonnell"
echo ""
echo "Demo Features Available:"
echo "  POS Terminal - /pos"
echo "  Online Ordering - /ordering"
echo "  Kitchen Display - /kitchen"
echo "  Analytics Dashboard - /analytics"
echo "  Inventory Management - /inventory"
echo "  Administration - /admin"
