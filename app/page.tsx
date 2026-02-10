'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(0);
  const [dropdownAutoCycle, setDropdownAutoCycle] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const dropdownOptions = ['Crypto', 'Stocks', 'Commodities', 'Indexes', '0DTE'];
  
  const faqItems = [
    {
      question: "What is Layer V?",
      answer: "Layer V is an onchain options liquidity layer turning volatility into composable products. It uses hybrid order book + RFQ execution, with self-custody and onchain settlement."
    },
    {
      question: "Which products can I use?",
      answer: "Premium Markets (earn premium upfront), Protected Leverage (liquidationless leverage), Trading Terminal (institutional-grade options)."
    },
    {
      question: "What's special about Layer V's portfolio margin?",
      answer: "Portfolio-based margining nets risk across positions (spreads/hedges) for capital efficiency, while keeping solvency controls deterministic and auditable."
    },
    {
      question: "What collateral is supported?",
      answer: "USDC/USDT settlement, ETH/BTC as core collateral in phase 1; expanding over time."
    },
    {
      question: "Do you support APIs, RFQ and subaccounts?",
      answer: "Yes—professional APIs, RFQ for competitive quotes (including multi-leg), and subaccounts for portfolio separation."
    },
    {
      question: "How are orders executed and settled? Is custody self-managed?",
      answer: "Offchain matching for speed + onchain settlement for transparency; users remain self-custodial."
    },
    {
      question: "What are the fees?",
      answer: "Maker/taker trading fees + settlement/exercise fees when applicable; no funding rates for Protected Leverage; refer to docs for current schedule."
    },
    {
      question: "Who can and can't use Layer V?",
      answer: "Availability may vary by jurisdiction; refer to Terms/Docs."
    }
  ];

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

  useEffect(() => {
    // Cycle dropdown every 2 seconds if auto-cycling is enabled
    if (!dropdownAutoCycle) return;
    
    const interval = setInterval(() => {
      setDropdownValue((prev) => (prev + 1) % dropdownOptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [dropdownOptions.length, dropdownAutoCycle]);

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
              <a href="#built-for-scale" className="hover:underline">Built for scale</a>
              <a href="#products" className="hover:underline">Products</a>
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
                <a href="#built-for-scale" className="hover:underline px-4">Built for scale</a>
                <a href="#products" className="hover:underline px-4">Products</a>
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
              Layer V is the onchain volatility layer. Earn premium, trade leverage, or access institutional-grade options — all self-custodial, all onchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border-2 border-black bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Launch App
              </button>
              <button className="border-2 border-black bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                Explore Products
              </button>
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
              <div className="text-xs text-gray-600 mb-1">Open Interest</div>
              <div className="text-2xl font-bold">—</div>
            </div>
            <div className="border-2 border-gray-400 p-4">
              <div className="text-xs text-gray-600 mb-1">Premium Paid</div>
              <div className="text-2xl font-bold">—</div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for scale */}
      <section
        id="built-for-scale"
        ref={(el) => {
          sectionsRef.current['built-for-scale'] = el;
        }}
        className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Built for scale</h2>
          <p className="text-center text-gray-700 mb-12">A modular stack that scales execution, flow, and composability.</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="text-lg">Hybrid CLOB + RFQ execution</div>
              <div className="text-lg">Native complexity-abstracted sub-products</div>
              <div className="text-lg">Composable architecture</div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img 
                  src="/layer-v-stack.svg" 
                  alt="Layer V Stack Diagram" 
                  className="w-full max-w-xs border-2 border-black"
                />
              </div>
              <div className="space-y-3 text-sm">
                <div>1. Layer V Sub-Products  — Premium Markets, Protected Leverage</div>
                <div>2. Liquidity Network — Market Makers, OTC Desk, Professional Traders</div>
                <div>3. Core Engine — Hybrid CLOB + RFQ, Risk Engine</div>
                <div>4. Chainlink CRE — Verifiable execution, Orchestration</div>
                <div>5. Settlement Layer — Smart Contracts, Collateral, Tokenization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section
        id="products"
        ref={(el) => {
          sectionsRef.current['products'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Products</h2>
          <p className="text-center text-gray-700 mb-12">Multiple product surfaces. One unified liquidity layer.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Premium Markets Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Premium Markets</h3>
              <p className="text-gray-700 mb-4">
                Earn premium upfront with options-based structured products.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Institutional-grade strategies</li>
                <li>• Risk-adjusted payoffs</li>
                <li>• Custom vault infrastructure</li>
              </ul>
              <div className="flex flex-col gap-2">
                <a href="#" className="border-2 border-black bg-black text-white px-4 py-2 text-center font-semibold hover:bg-gray-800 transition-colors text-sm">
                  Premium Markets App
                </a>
                <a href="#premium-markets" className="border-2 border-black bg-white text-black px-4 py-2 text-center font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Read More
                </a>
              </div>
            </div>

            {/* Protected Leverage Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Protected Leverage</h3>
              <p className="text-gray-700 mb-4">
                High leverage with capped downside and no liquidation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• No liquidation risk (max loss = premium paid upfront)</li>
                <li>• Access full option convexity in one click</li>
                <li>• Clear duration selection</li>
              </ul>
              <div className="flex flex-col gap-2">
                <a href="#" className="border-2 border-black bg-black text-white px-4 py-2 text-center font-semibold hover:bg-gray-800 transition-colors text-sm">
                  Protected Leverage App
                </a>
                <a href="#protected-leverage" className="border-2 border-black bg-white text-black px-4 py-2 text-center font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Read More
                </a>
              </div>
            </div>

            {/* Trading Terminal Card */}
            <div className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Trading Terminal</h3>
              <p className="text-gray-700 mb-4">
                Institutional-grade options access — onchain and self-custodial.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Hybrid order book + RFQ systems</li>
                <li>• Portfolio-based margin</li>
                <li>• Professional APIs</li>
              </ul>
              <div className="flex flex-col gap-2">
                <a href="#" className="border-2 border-black bg-black text-white px-4 py-2 text-center font-semibold hover:bg-gray-800 transition-colors text-sm">
                  Trading Terminal App
                </a>
                <a href="#trading-terminal" className="border-2 border-black bg-white text-black px-4 py-2 text-center font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Markets Detail */}
      <section
        id="premium-markets"
        ref={(el) => {
          sectionsRef.current['premium-markets'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="text-sm text-gray-600 mb-2">Premium Markets</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Earn Premium upfront.</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">1. Deposit your asset</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">2. Choose your strategy</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">3. Visualize your payoff, adjust your risk</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="font-semibold mb-2">4. Receive your premium upfront</div>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Defined risk</li>
              <li>• Options volatility-based yield</li>
              <li>• Build your custom vault strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Protected Leverage Detail */}
      <section
        id="protected-leverage"
        ref={(el) => {
          sectionsRef.current['protected-leverage'] = el;
        }}
        className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="text-sm text-gray-600 mb-2">Protected Leverage</div>
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
              <li>• Standardized trading experience, clear expiration date, convex PnL</li>
              <li>• No liquidation risk for traders (max loss = premium paid upfront)</li>
              <li>• No funding rates, no extraction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trading Terminal Detail */}
      <section
        id="trading-terminal"
        ref={(el) => {
          sectionsRef.current['trading-terminal'] = el;
        }}
        className="border-b-2 border-black fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="text-sm text-gray-600 mb-2">Trading Terminal</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Institutional-Grade Options Trading</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Portfolio Margining</h3>
                <p className="text-gray-700">
                  Capital efficiency via risk netting across positions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Embedded composability</h3>
                <p className="text-gray-700">
                  Long options can exit the system as ERC-20 tokens usable across DeFi.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Chainlink-powered Order Book</h3>
                <p className="text-gray-700">
                  Offchain matching for scalability + onchain settlement, with Chainlink CRE for verifiable execution/orchestration.
                </p>
              </div>
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
        className="border-b-2 border-black bg-gray-50 fade-in opacity-0 transition-opacity duration-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Build on top of volatility.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="border-2 border-black bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Read Docs
              </button>
              <button className="border-2 border-black bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
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
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-2 border-gray-400">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-lg pr-4">{item.question}</h3>
                  <span className="text-xl flex-shrink-0">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
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
              <a href="#built-for-scale" className="hover:underline">Built for scale</a>
              <a href="#products" className="hover:underline">Products</a>
              <a href="#builders" className="hover:underline">Builders</a>
              <a href="#faq" className="hover:underline">FAQ</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
