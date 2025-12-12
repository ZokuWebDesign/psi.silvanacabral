'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image"

const QUOTES = [
  '/assets/vectors/quote1.svg',
  '/assets/vectors/quote2.svg',
  '/assets/vectors/quote3.svg',
  '/assets/vectors/quote4.svg',
  '/assets/vectors/quote5.svg',
];

export const CrawlingBanner: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);

  useEffect(() => {
    // Get the last shown quote index from localStorage
    const lastQuoteIndexStr = localStorage.getItem('lastQuoteIndex');
    let lastQuoteIndex = lastQuoteIndexStr ? parseInt(lastQuoteIndexStr, 10) : -1;

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * QUOTES.length);
    } while (newIndex === lastQuoteIndex && QUOTES.length > 1);

    setCurrentQuote(QUOTES[newIndex]);
    localStorage.setItem('lastQuoteIndex', newIndex.toString());
  }, []);

  if (!currentQuote) {
    return (
      <div className="relative w-full h-[110px] overflow-hidden">
        <div className="absolute transform inset-0 bg-[#165953]" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[110px] overflow-hidden">

      {/* background layer */}
      <div className="absolute transform inset-0 bg-[#165953]" />

      {/* banner */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ pointerEvents: 'none' }}
      >
      </div>

      {/* scrolling quote */}
      <div className="absolute w-[5000px] h-[110px] transform inset-0 flex items-center">
        <div
          className="w-[5000px] h-[60px] animate-marquee"
          style={{ willChange: 'transform' }}
        >
          <Image src={currentQuote} alt="quote" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
};

export default CrawlingBanner;
