import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out after 2 seconds
    setTimeout(() => {
      setOpacity(0);
    }, 2000);
  }, []);

  if (opacity === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-[#020304] z-50 flex items-center justify-center"
      style={{
        opacity,
        transition: 'opacity 1s ease-out',
      }}
    >
      <div className="relative z-10 text-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#012677] to-blue-500 rounded-lg blur opacity-75 animate-pulse" />
          <h1 className="relative bg-[#020304] rounded-lg px-8 py-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#012677] to-blue-400">
            ScriptSolutions
          </h1>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#012677] animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-[#012677] animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 rounded-full bg-[#012677] animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}