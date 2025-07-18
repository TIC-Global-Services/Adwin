'use client';
import React, { useState } from 'react';

const Forms: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'service' | 'warranty'>('service');

  const handleFormToggle = (formName: 'service' | 'warranty') => {
    setActiveForm(formName);
  };

  return (
    <div className='flex flex-col items-center justify-center py-[45px]'>
      <div className='flex flex-row items-center justify-center gap-7 '>
        <button
          onClick={() => handleFormToggle('service')}
          className={`px-6 py-3 rounded-full cursor-pointer transition duration-200 ${activeForm === 'service'
              ? 'bg-[#ECFCE8] text-[#005F20] hover:bg-[#d6f5cd]'
              : 'bg-transparent text-[#4A4A4A] border border-[#D2D2D2] hover:bg-[#F8F8F8]'
            }`}
        >
          Book Your Service
        </button>

        <button
          onClick={() => handleFormToggle('warranty')}
          className={`px-6 py-3 rounded-full cursor-pointer transition duration-200 ${activeForm === 'warranty'
              ? 'bg-[#ECFCE8] text-[#005F20] hover:bg-[#d6f5cd]'
              : 'bg-transparent text-[#4A4A4A] border border-[#D2D2D2] hover:bg-[#F8F8F8]'
            }`}
        >
          Register your Warranty
        </button>

      </div>

      {/* Book your service */}
      {activeForm === 'service' && (
        <div className='mt-[90px]'>
        
          <p className='text-black text-[20px] max-w-lg text-center'>Online service request and tracking system for installations, maintenance, or warranty coverage.</p>
        </div>
      )}

      {/* Warranty */}
      {activeForm === 'warranty' && (
        <div>

          <p>Warranty form content</p>
        </div>
      )}
    </div>
  );
};

export default Forms;
