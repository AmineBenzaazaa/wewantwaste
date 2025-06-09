import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Skip } from '@/data/skips';

interface SkipSelectionContextType {
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
}

const SkipSelectionContext = createContext<SkipSelectionContextType | undefined>(undefined);

export const SkipSelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <SkipSelectionContext.Provider value={{ selectedSkip, setSelectedSkip }}>
      {children}
    </SkipSelectionContext.Provider>
  );
};

export const useSkipSelectionContext = () => {
  const context = useContext(SkipSelectionContext);
  if (!context) {
    throw new Error('useSkipSelectionContext must be used within SkipSelectionProvider');
  }
  return context;
};