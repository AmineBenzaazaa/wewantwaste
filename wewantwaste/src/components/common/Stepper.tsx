import React from 'react';

const steps = [
  'Postcode',
  'Waste Type',
  'Select Skip',
  'Permit Check',
  'Choose Date',
  'Payment',
];

interface StepperProps {
  currentStep: string;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
      {steps.map((step, index) => {
        const isActive = step === currentStep;
        const isCompleted = steps.indexOf(currentStep) > index;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center text-xs min-w-[80px]">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-[10px] font-bold mb-1 ${
                  isCompleted ? 'bg-green-500' : isActive ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                {isCompleted ? '✓' : index + 1}
              </div>

              <span
                className={`text-[11px] text-center whitespace-nowrap ${
                  isActive ? 'text-indigo-600 font-semibold' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>

            {/* Add line between steps except after last step */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-grow h-[1px] mt-3 ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
