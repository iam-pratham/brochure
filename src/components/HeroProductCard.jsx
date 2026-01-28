import React from 'react';

const HeroProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden">
      
      {/* Large Image Area */}
      <div className="w-full flex-grow bg-brand-surface rounded-[2rem] mb-6 overflow-hidden flex items-center justify-center p-8 relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-brand-text mb-2 leading-tight w-full">{product.name}</h2>
        
        <div className="flex flex-col items-center gap-3 mb-4 w-full">
            {/* Pack Size */}
            <div className="bg-brand-surface border border-brand-primary/10 rounded-lg px-4 py-1.5 shadow-sm inline-block">
                <span className="font-bold text-brand-text text-sm">1 kg Pack</span>
            </div>

            {/* Refined Tags */}
            <div className="flex justify-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-100 bg-green-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Organic</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-100 bg-green-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Gluten Free</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-100 bg-green-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Non-GMO</span>
                </div>
            </div>
        </div>
        
        <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-3 max-w-lg mx-auto">
          {product.description} Sourced directly from certified organic farms, ensuring maximum nutritional value and authentic taste for your healthy lifestyle.
        </p>

        {/* Action Button (Static Price Tag) */}
        <div className="mt-auto w-full flex justify-center">
          <div className="bg-brand-primary text-white rounded-full px-8 py-4 font-semibold text-sm flex items-center justify-center gap-4 shadow-lg w-auto min-w-[200px]">
            <span className="text-lg">{product.price}</span>
            <span className="w-1 h-4 bg-white/20 rounded-full"></span>
            <span className="uppercase tracking-widest text-xs">
                Premium Quality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductCard;
