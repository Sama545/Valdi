import React from 'react';

export default function ProductInfo({ selectedProduct }) {
  if (!selectedProduct) {
    return (
      <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Verdant Essence</h1>
        <p className="text-green-700 mb-4">Premium Green Perfume Collection</p>
        <p className="text-gray-700 text-sm">
          Hover over any perfume bottle to discover our exquisite collection of nature-inspired fragrances.
          Each scent captures the essence of lush gardens and fresh botanicals.
        </p>
        <div className="mt-4 pt-4 border-t border-green-200">
          <p className="text-xs text-gray-600">
            🖱️ Click and drag to explore the store<br/>
            🔍 Scroll to zoom in/out
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md transform transition-all duration-300">
      <h2 className="text-2xl font-bold text-green-800 mb-2">{selectedProduct.name}</h2>
      <p className="text-3xl font-bold text-green-600 mb-4">${selectedProduct.price}</p>
      <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-700 w-24">Notes:</span>
          <span className="text-sm text-gray-600">{selectedProduct.notes}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-700 w-24">Volume:</span>
          <span className="text-sm text-gray-600">{selectedProduct.volume}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-700 w-24">Type:</span>
          <span className="text-sm text-gray-600">{selectedProduct.type}</span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
}
