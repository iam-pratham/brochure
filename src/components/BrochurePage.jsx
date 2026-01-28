import React from 'react';
import { Leaf } from 'lucide-react';
import HeroProductCard from './HeroProductCard';
import GridProductCard from './GridProductCard';

const BrochurePage = ({ products, pageNumber }) => {
  // Logic to split products: 
  // 1st product is Hero
  // Rest 6 are Grid
  const heroProduct = products[0];
  const gridProducts = products.slice(1, 7); // Take next 6

  return (
    <div className="brochure-page flex flex-col bg-brand-bg relative overflow-hidden p-8">
      
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6 px-4">
        {/* Brand Group (Left) */}
        <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/30 overflow-hidden relative">
                  {/* Leaf Icon from Lucide */}
                  <Leaf className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm scale-150"></div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-tight text-brand-text leading-none">ABHIDNYA</span>
                    <span className="text-[10px] tracking-[0.2em] text-brand-muted uppercase">Organic Essentials</span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-200"></div>

            {/* Tagline Title */}
            <div>
                 <h1 className="font-script text-3xl text-brand-primary whitespace-nowrap">Nature's Finest Selection</h1>
            </div>
        </div>

        {/* Right Info (Right) */}
        <div className="flex items-center justify-end gap-6">
            <div className="flex flex-col text-right">
                <span className="text-[10px] text-brand-muted uppercase tracking-wider">Visit Us</span>
                <span className="text-xs font-bold text-brand-text">Shop A 403, Omkar Residency,<br/>Gangapur Road, Nashik-422013</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <div className="flex flex-col text-right">
                <span className="text-[10px] text-brand-muted uppercase tracking-wider">Contact</span>
                <span className="text-xs font-bold text-brand-text">+91 98765 43210</span>
            </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow w-full h-full rounded-[3rem] bg-brand-surface/50 p-8 flex gap-8 border border-gray-50/50 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
            
            {/* Background Decoration (Gradient Leaks) */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Left Column: Hero Product (40% width) */}
            <div className="w-[38%] h-full relative z-10">
                {heroProduct && <HeroProductCard product={heroProduct} />}
            </div>

            {/* Right Column: Grid Products (62% width) */}
            <div className="w-[62%] flex flex-col relative z-10">
                <div className="flex justify-between items-end mb-8 px-2">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-8 h-[2px] bg-brand-primary"></span>
                            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">New Arrivals</span>
                        </div>
                        <h2 className="font-bold text-3xl text-brand-text">Explore Our Collection</h2>
                    </div>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-3 gap-5 h-full content-start">
                    {gridProducts.map(product => (
                        <div key={product.id} className="h-[210px]"> 
                            <GridProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Page Number aligned inside the container */}
            <div className="absolute bottom-8 right-8 text-brand-text font-bold text-sm bg-white/90 backdrop-blur-sm py-2 px-6 rounded-full shadow-sm border border-gray-100 z-20">
              Page 0{pageNumber}
            </div>
      </div>
    </div>
  );
};

export default BrochurePage;
