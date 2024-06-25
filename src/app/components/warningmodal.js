'use client';
import React, { useState, useEffect } from 'react';

export default function WarningModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem('hasSeenWarning');
    if (hasSeenWarning) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoNotRemind = () => {
    localStorage.setItem('hasSeenWarning', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
      <div className="bg-black p-6 rounded shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">癫痫警告</h2>
        <p className="mb-4 text-white">
          本网站包含闪光灯，可能不适合对光敏性癫痫或其他病症的人群。
        </p>
        <p className="mb-4 text-white">
          建议观众谨慎观看。
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleDoNotRemind}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            不再提醒我
          </button>
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded text-white hover-gradient-amber-4"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
