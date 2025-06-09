import { useState } from 'react';
import type { Skip } from '@/data/skips';

export function useSkipSelection() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const selectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return {
    selectedSkip,
    selectSkip,
  };
}
