import React from "react";

// Premium background sparkles
const SparklesBg = () => (
  <div className="absolute top-6 left-6 pointer-events-none select-none opacity-40">
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large Star */}
      <path
        d="M45 10 Q45 45 10 45 Q45 45 45 80 Q45 45 80 45 Q45 45 45 10 Z"
        fill="#A67B56"
        className="animate-[sparkle_3s_ease-in-out_infinite]"
      />
      {/* Medium Star */}
      <path
        d="M105 35 Q105 48 92 48 Q105 48 105 61 Q105 48 118 48 Q105 48 105 35 Z"
        fill="#A67B56"
        className="animate-[sparkle_4s_ease-in-out_infinite_1s]"
      />
      {/* Small Star */}
      <path
        d="M70 85 Q70 92 63 92 Q70 92 70 99 Q70 92 77 92 Q70 92 70 85 Z"
        fill="#A67B56"
        className="animate-[sparkle_2.5s_ease-in-out_infinite_0.5s]"
      />
    </svg>
  </div>
);

export default function App() {
  return (
    <div className="min-h-svh max-h-svh h-svh bg-brand-brown/95 flex items-center justify-center p-0 relative overflow-hidden select-none">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-cream/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-swiggy/3 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Mobile Screen Card Container */}
      <main className="w-full max-w-[440px] min-h-svh max-h-svh h-svh bg-[#2E1A0C] sm:border-x sm:border-brand-cream/10 sm:shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col justify-between py-6 sm:py-10 px-8 relative overflow-hidden">
        {/* Animated Background Sparkles inside the card */}
        <SparklesBg />

        {/* Top Branding Section with Image Logos */}
        <header className="flex flex-col items-center pt-2 sm:pt-6 z-10">
          <img
            src="/logo-1.png"
            alt="Beryàn Co. Logo Icon"
            className="h-14 sm:h-20 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
          <img
            src="/logo-2.png"
            alt="Beryàn Co."
            className="h-7 sm:h-9 w-auto object-contain mt-2"
          />
        </header>

        {/* Center Prompt & Actions */}
        <section className="flex flex-col items-center my-auto py-4 w-full z-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream leading-[1.2] tracking-wide font-normal max-w-xs text-center mb-6 sm:mb-8 select-text">
            Order Now
            <br />
            On
          </h2>

          <div className="w-full flex flex-col gap-3 sm:gap-4">
            {/* Swiggy Button */}
            <a
              href="https://www.swiggy.com/city/bangalore/beryan-co-whitefield-rest1400787"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tap-effect group w-full h-14 sm:h-18 bg-brand-cream hover:bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,110,0,0.15)] focus:outline-none focus:ring-4 focus:ring-brand-swiggy/40 cursor-pointer"
            >
              <img
                src="/swiggy.png"
                alt="Swiggy"
                className="h-6 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-1 px-2">
              <div className="h-[1px] bg-brand-cream/15 flex-grow"></div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-cream/40 font-bold select-none whitespace-nowrap">
                or order via
              </span>
              <div className="h-[1px] bg-brand-cream/15 flex-grow"></div>
            </div>

            {/* Zomato Button */}
            <a
              href="https://link.zomato.com/xqzv/rshare?id=143303464675b9b4d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tap-effect group w-full h-14 sm:h-18 bg-brand-cream hover:bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(203,28,43,0.15)] focus:outline-none focus:ring-4 focus:ring-brand-zomato/40 cursor-pointer"
            >
              <img
                src="/zomato.png"
                alt="Zomato"
                className="h-5.5 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center pt-2 pb-1 z-10">
          <p className="text-[11px] tracking-[0.1em] text-brand-cream/35 font-light">
            &copy; 2026 BeryanCo. All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}
