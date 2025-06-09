import React from 'react';
import type { Skip } from '@/data/skips';

interface FooterNavProps {
  onBack: () => void;
  onContinue: () => void;
  isContinueEnabled: boolean;
  selectedSkip: Skip | null;
}

export const FooterNav: React.FC<FooterNavProps> = ({
  onBack,
  onContinue,
  isContinueEnabled,
  selectedSkip,
}) => {
  return (
    <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200 px-4 py-3 sm:px-6 shadow-[0_-2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium shadow-sm"
        >
          ← Back
        </button>

        <div className="flex-1 text-center text-sm text-gray-600">
          {selectedSkip ? (
            <span className="inline-block">
              Selected: <strong>{selectedSkip.size} yd</strong> skip @ £
              {selectedSkip.price_before_vat}
            </span>
          ) : (
            <span>Please select a skip to continue.</span>
          )}
        </div>

        <button
          onClick={onContinue}
          disabled={!isContinueEnabled}
          className={`w-full sm:w-auto px-6 py-2 rounded-lg font-semibold transition-colors shadow-sm ${
            isContinueEnabled
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue →
        </button>
      </div>
    </footer>
  );
};
