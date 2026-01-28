import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col h-full group">
      {/* Image Area - Clean, floating effect */}
      <div className="relative h-48 w-full flex items-center justify-center mb-4 p-2 transition-transform duration-300 group-hover:scale-105">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>
      
      {/* Content Area - Left aligned with border accent */}
      <div className="pl-3 border-l-2 border-brand-primary flex flex-col gap-1">
        <h3 className="font-bold text-brand-primary text-sm uppercase tracking-wide leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[10px] leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <div className="text-xl font-bold text-brand-text mt-1">
          {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
