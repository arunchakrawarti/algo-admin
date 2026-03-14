import React from 'react';
import { Link2 } from 'lucide-react';

const ManageBroker = () => {
  const brokers = [
    { name: 'Angel One', color: 'bg-[#EB5757]', shape: 'triangle' },
    { name: 'Upstox', color: 'bg-[#7B61FF]', shape: 'circle' },
    { name: 'Zerodha', color: 'bg-[#438AFE]', shape: 'circle' },
    { name: 'Groww', color: 'bg-[#00D09C]', shape: 'circle' },
    { name: 'Dhan', color: 'bg-[#F2994A]', shape: 'circle' },
  ];

  return (
    <div className="w-full space-y-6 mt-5">
    
      <div className="bg-[var(--color-white)] rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-[#1e293b] font-semibold text-base mb-6">Select Broker</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 bg-[var(--color-white)] hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 mb-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300
                ${broker.shape === 'triangle' ? 'clip-triangle' : 'rounded-full'} 
                ${broker.color}`}
              >
                {broker.shape === 'triangle' && (
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white/20" />
                )}
              </div>
              
              <span className="text-[#334155] font-medium text-sm text-center">
                {broker.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[var(--color-white)] rounded-xl border border-gray-200 shadow-sm py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-100 blur-xl opacity-50 rounded-full"></div>
          <div className="relative w-16 h-16 bg-[var(--color-white)] rounded-full flex items-center justify-center border border-blue-100">
            <Link2 className="text-blue-600 w-8 h-8 rotate-45" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-[#1e293b] font-bold text-xl tracking-tight">
            Select a broker to connect
          </h3>
          <p className="text-[var(--color-gray-400)] text-sm max-w-sm mx-auto">
            Choose a broker from the list above to configure your integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageBroker;