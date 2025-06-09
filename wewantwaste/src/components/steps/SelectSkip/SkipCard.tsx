import React from 'react';
import type { Skip } from '@/data/skips';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(skip)}
      className={`
        flex flex-col justify-between rounded-xl p-6 cursor-pointer select-none transition-transform shadow-md
        hover:scale-[1.04] hover:shadow-lg
        ${isSelected ? 'ring-4 ring-indigo-500 bg-indigo-50' : 'bg-white'}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(skip);
        }
      }}
    >
      <div className="relative inline-flex items-baseline gap-2 select-none">
        <span className="text-indigo-700 font-extrabold text-[5rem] leading-none">
          {skip.size}
        </span>
        <span className="text-indigo-600 text-lg font-semibold lowercase select-none" style={{ marginTop: '0.5rem' }}>
          yard{skip.size > 1 ? 's' : ''}
        </span>
      </div>


      <div className="mt-4">
        <p className="text-gray-700 font-semibold">{skip.hire_period_days}-day hire</p>
        <p className="text-2xl font-bold mt-2">
          £{skip.price_before_vat}{' '}
          <span className="text-gray-400 text-base font-normal">+ VAT</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skip.allowed_on_road && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            On-road allowed
          </span>
        )}
        {skip.allows_heavy_waste && (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
            Heavy waste OK
          </span>
        )}
      </div>

      <button
        disabled={isSelected}
        className={`
          mt-6 py-2 rounded-lg font-semibold w-full
          transition-colors
          ${isSelected ? 'bg-indigo-600 text-white cursor-default' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}
        `}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
};