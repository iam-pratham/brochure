import React from 'react';

const GridProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center gap-2 h-full border border-gray-100 shadow-sm relative overflow-hidden">
      
      {/* Image Area - Expanded to prevent clip */}
      <div className="w-full h-28 flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-w-full max-h-full object-contain drop-shadow-md rounded-xl"
        />
      </div>

      {/* Content - Center Aligned */}
      <div className="w-full text-center z-10 flex flex-col items-center justify-center gap-1">
        
        <h3 className="font-bold text-brand-text text-sm leading-snug w-full truncate px-1 text-center">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 text-[10px] text-brand-muted uppercase tracking-wider w-full text-center">
            <span>500g</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Pack</span>
        </div>

        <div className="text-brand-primary font-bold text-lg leading-none w-full text-center">
          {product.price}
        </div>
      </div>
    </div>
  );
};

export default GridProductCard;
