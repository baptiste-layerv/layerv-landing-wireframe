'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const id = href.slice(1);
          const element = sectionsRef.current[id] || document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false); // Close mobile menu on navigation
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Fade-in on scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-32 border-2 border-black bg-white flex items-center justify-center font-bold">
                LAYER V
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#what-is" className="hover:underline">What is Layer V</a>
              <a href="#products" className="hover:underline">Products</a>
              <a href="#why" className="hover:underline">Why Layer V</a>
              <a href="#how-it-works" className="hover:underline">How it Works</a>
              <a href="#builders" className="hover:underline">Builders</a>
              <a href="#faq" className="hover:underline">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden border-2 border-black bg-white text-black px-4 py-2 font-semibold hover:bg-gray-100 transition-colors"
              >
                Menu
              </button>
              <button className="border-2 border-black bg-black text-white px-4 sm:px-6 py-2 font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Launch App
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden border-t-2 border-black bg-white py-4">
              <div className="flex flex-col gap-4">
                <a href="#what-is" className="hover:underline px-4">What is Layer V</a>
                <a href="#products" className="hover:underline px-4">Products</a>
                <a href="#why" className="hover:underline px-4">Why Layer V</a>
                <a href="#how-it-works" className="hover:underline px-4">How it Works</a>
                <a href="#builders" className="hover:underline px-4">Builders</a>
                <a href="#faq" className="hover:underline px-4">FAQ</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Volatility becomes yield. Leverage without liquidation.
          </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Layer V is the on-chain volatility layer. Earn premium, trade leverage, or access professional options liquidity — all self-custodial, all on-chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="border-2 border-black bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Launch App
              </button>
              <button className="border-2 border-black bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                Explore Products
              </button>
            </div>
            <div className="text-sm text-gray-600 border-t-2 border-gray-300 pt-4">
              Self-custody • On-chain settlement • Composable options
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-2 border-gray-400 p-4">
              <div className="text-xs text-gray-600 mb-1">TVL</div>
              <div className="text-2xl font-bold">—</div>
            </div>
            <div className="border-2 border-gray-400 p-4">
              <div className="text-xs text-gray-600 mb-1">Total Volume</div>
              <div className="text-2xl font-bold">—</div>
            </div>
            <div className="border-2 border-gray-400 p-4">
              <div className="text-xs text-gray-600 mb-1">Premium Paid</div>
              <div className="text-2xl font-bold">—</div>
            </div>
            <div className="border-2 border-gray-400 p-4">
              <div className="text-xs text-gray-600 mb-1">Markets Live (ETH / BTC)</div>
              <div className="text-2xl font-bold">—</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Layer V */}
      <section
        id="what-is"
        ref={(el) => {
          sectionsRef.current["what-is"] = el;
        }}
        
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The volatility infrastructure of DeFi</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Options are the largest derivatives market, yet they remain inaccessible on-chain. Layer V turns volatility into a usable primitive: yield generation, directional leverage, risk management, and composable building blocks.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section
        id="products"
        ref={(el) => {
          sectionsRef.current['products'] = el;
        }}
        className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Premium Markets Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Premium Markets</h3>
              <p className="text-gray-700 mb-4">
                Earn premium upfront with options-based structured products.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Covered Calls</li>
                <li>• Cash-Secured Puts</li>
                <li>• Defined risk</li>
                <li>• Premium paid upfront</li>
              </ul>
            </div>

            {/* Protected Leverage Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Protected Leverage</h3>
              <p className="text-gray-700 mb-4">
                Directional leverage with capped downside and no liquidation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3 simple inputs</li>
                <li>• Max loss = premium</li>
                <li>• No liquidations for buyers</li>
                <li>• 1D to 60D durations</li>
              </ul>
            </div>

            {/* Trading Terminal Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Trading Terminal</h3>
              <p className="text-gray-700 mb-4">
                Deribit-grade options access — on-chain and self-custodial.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Full options liquidity</li>
                <li>• Portfolio margin</li>
                <li>• Professional APIs</li>
                <li>• For institutions & MMs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Markets Detail */}
      <section className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Earn premium upfront. Know your risk.</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">1. Deposit ETH/BTC or stablecoins</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">2. Choose Covered Call or Cash-Secured Put</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">3. Select strike, duration, and optional leverage</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">4. Receive premium upfront; position runs to expiry</div>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Premium known upfront</li>
              <li>• Defined risk before you enter</li>
              <li>• Yield from volatility (not inflation)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Protected Leverage Detail */}
      <section className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Trade leverage without liquidation.</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Protected Leverage packages options into a simple UX: you choose 3 inputs — Layer V builds the position.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="border-2 border-black bg-white p-4">
                <div className="text-xs text-gray-600 mb-2">Notional</div>
                <div className="font-semibold">How big?</div>
              </div>
              <div className="border-2 border-black bg-white p-4">
                <div className="text-xs text-gray-600 mb-2">Duration</div>
                <div className="font-semibold">How long?</div>
              </div>
              <div className="border-2 border-black bg-white p-4">
                <div className="text-xs text-gray-600 mb-2">Mode</div>
                <div className="font-semibold">Conservative / Linear / Aggressive</div>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• No liquidation risk for buyers (max loss = premium)</li>
              <li>• No funding rates</li>
              <li>• Clear expiration; clear PnL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Layer V */}
      <section
        id="why"
        ref={(el) => {
          sectionsRef.current['why'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Layer V</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 border-black bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Composable options</h3>
            </div>
            <div className="border-2 border-black bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Unified liquidity</h3>
            </div>
            <div className="border-2 border-black bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Risk-first design</h3>
            </div>
            <div className="border-2 border-black bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Self-custody by default</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        ref={(el) => {
          sectionsRef.current['how-it-works'] = el;
        }}
        className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How it works</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="border-l-4 border-black pl-4">
              <div className="font-semibold text-lg">1. User chooses a product</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <div className="font-semibold text-lg">2. Action becomes an intent to trade options</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <div className="font-semibold text-lg">3. Orders execute via Layer V liquidity</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <div className="font-semibold text-lg">4. Portfolio risk checks validate solvency</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <div className="font-semibold text-lg">5. Trades settle on-chain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Builders Section */}
      <section
        id="builders"
        ref={(el) => {
          sectionsRef.current['builders'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Build on top of volatility.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="border-2 border-black bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Read Docs
              </button>
              <button className="border-2 border-black bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                Talk to the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Risk */}
      <section className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Security & Risk</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Portfolio-based margining</li>
              <li>• Deterministic, auditable outputs</li>
              <li>• Graceful liquidation mechanisms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        ref={(el) => {
          sectionsRef.current['faq'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-2 border-gray-400 p-6">
              <h3 className="font-bold text-lg mb-2">What is Protected Leverage?</h3>
            </div>
            <div className="border-2 border-gray-400 p-6">
              <h3 className="font-bold text-lg mb-2">Can I get liquidated?</h3>
            </div>
            <div className="border-2 border-gray-400 p-6">
              <h3 className="font-bold text-lg mb-2">Is Layer V self-custodial?</h3>
            </div>
            <div className="border-2 border-gray-400 p-6">
              <h3 className="font-bold text-lg mb-2">Who is Layer V for?</h3>
            </div>
            <div className="border-2 border-gray-400 p-6">
              <h3 className="font-bold text-lg mb-2">How do Premium Markets generate yield?</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b-2 border-black bg-black text-white fade-in opacity-0 transition-opacity duration-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Start using volatility differently.</h2>
            <button className="border-2 border-white bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
              Launch App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="h-8 w-32 border-2 border-black bg-white flex items-center justify-center font-bold mb-4 md:mb-0">
              LAYER V
            </div>
            <nav className="flex flex-wrap gap-4 justify-center md:justify-end text-sm">
              <a href="#what-is" className="hover:underline">What is Layer V</a>
              <a href="#products" className="hover:underline">Products</a>
              <a href="#why" className="hover:underline">Why Layer V</a>
              <a href="#how-it-works" className="hover:underline">How it Works</a>
              <a href="#builders" className="hover:underline">Builders</a>
              <a href="#faq" className="hover:underline">FAQ</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
