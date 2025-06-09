import React from 'react';
import type { Skip } from '@/data/skips';
import { SkipCard } from './SkipCard';

interface SkipGridProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelect: (skip: Skip) => void;
}

export const SkipGrid: React.FC<SkipGridProps> = ({
  skips,
  selectedSkip,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
