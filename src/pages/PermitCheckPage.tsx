import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '@/components/common/Stepper';
import { FooterNav } from '@/components/common/FooterNav';
import { useSkipSelectionContext } from '@/context/SkipSelectionContext';

const PermitCheckPage: React.FC = () => {
  const { selectedSkip } = useSkipSelectionContext();
  const [permitConfirmed, setPermitConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (permitConfirmed) {
      navigate('/choose-date');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="px-4 pt-6">
        <Stepper currentStep="Permit Check" />
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-3xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Permit Check</h1>

        {selectedSkip && (
          <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-indigo-800">
            Selected Skip: <strong>{selectedSkip.size} yd</strong> — £{selectedSkip.price_before_vat}
          </div>
        )}

        <p className="mb-4 text-gray-700">
          Please confirm that you have the necessary permit for placing the skip at your chosen location.
          If you need help obtaining a permit, contact your local council.
        </p>

        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={permitConfirmed}
            onChange={() => setPermitConfirmed(!permitConfirmed)}
            className="form-checkbox rounded border-gray-300 text-indigo-600"
          />
          <span>I confirm I have the necessary permit</span>
        </label>
      </main>

      <FooterNav
        onBack={handleBack}
        onContinue={handleContinue}
        isContinueEnabled={permitConfirmed}
        selectedSkip={selectedSkip}
      />
    </div>
  );
};

export default PermitCheckPage;
