import React from 'react';
import BrochurePage from './components/BrochurePage';
import { products } from './data';

function App() {
  // Split products into chunks of 7
  const itemsPerPage = 7;
  const page1Products = products.slice(0, itemsPerPage);
  const page2Products = products.slice(itemsPerPage, itemsPerPage * 2);

  return (
    <div className="min-h-screen bg-gray-200 py-12 flex flex-col items-center gap-12 print:bg-white print:p-0 print:gap-0">
      <BrochurePage products={page1Products} pageNumber={1} />
      <BrochurePage products={page2Products} pageNumber={2} />
      
      {/* Print Instructions - Hidden in Print */}
      <div className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs text-sm text-gray-600 print:hidden">
        <p className="mb-2 font-semibold text-brand-text">Preview Mode</p>
        <p>Press <kbd className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">Cmd/Ctrl + P</kbd> to save as PDF.</p>
        <p className="mt-2 text-xs opacity-75">Designed for A4 (794px × 1123px)</p>
      </div>
    </div>
  );
}

export default App;
