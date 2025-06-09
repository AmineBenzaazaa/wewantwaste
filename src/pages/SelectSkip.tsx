import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SkipGrid } from '@/components/steps/SelectSkip/SkipGrid';
import { Stepper } from '@/components/common/Stepper';
import { FooterNav } from '@/components/common/FooterNav';
import { skips } from '@/data/skips';
import { useSkipSelectionContext } from '@/context/SkipSelectionContext';

const SelectSkipPage: React.FC = () => {
  const { selectedSkip, setSelectedSkip } = useSkipSelectionContext();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedSkip) navigate('/permit-check');
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Stepper */}
      <header className="px-4 pt-6">
        <Stepper currentStep="Select Skip" />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-4  w-full">
        <h1 className="text-2xl font-bold">Select Your Skip</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
          Select the skip size that best suits your needs
        </p>

        <SkipGrid
          skips={skips}
          selectedSkip={selectedSkip}
          onSelect={setSelectedSkip}
        />
      </main>

      {/* Footer Navigation */}
      <FooterNav
        onBack={handleBack}
        onContinue={handleContinue}
        isContinueEnabled={!!selectedSkip}
        selectedSkip={selectedSkip}
      />
    </div>
  );
};

export default SelectSkipPage;
