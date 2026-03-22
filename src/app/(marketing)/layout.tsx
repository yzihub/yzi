import type { Metadata } from 'next'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { MarketingNav } from '@/components/marketing/MarketingNav'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { FloatingFAB } from '@/components/marketing/FloatingFAB'

export const metadata: Metadata = {
  title: 'YZIHUB - Sistema operacional de crescimento com IA',
  description:
    'Estrutura que organiza dados, tráfego, leads e decisões em uma única operação contínua.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${GeistSans.variable} min-h-screen flex flex-col w-full relative overflow-x-hidden`}
      style={{ background: '#0a0a0e' }}
    >
      <MarketingNav />
      <div className="flex-1">{children}</div>
      <MarketingFooter />
      <FloatingFAB />

      {/* Unicorn Studio */}
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
      />
      <Script id="unicorn-init" strategy="afterInteractive">{`
        (function() {
          function tryInit() {
            if (window.UnicornStudio) { window.UnicornStudio.init(); }
            else { setTimeout(tryInit, 100); }
          }
          tryInit();
        })();
      `}</Script>

      {/* Animate on scroll observer */}
      <Script id="animate-on-scroll" strategy="afterInteractive">{`
        (function() {
          if (window.__inViewIO) return;
          window.__inViewIO = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                window.__inViewIO.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
          function init() {
            document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
              window.__inViewIO.observe(el);
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
          } else { init(); }
        })();
      `}</Script>

      {/* Aura counter animation */}
      <Script id="aura-counter" strategy="afterInteractive">{`
        (function() {
          if (window.__auraChartAnimInit) return;
          window.__auraChartAnimInit = true;
          setInterval(function() {
            document.querySelectorAll('.js-aura-number').forEach(function(el) {
              var val = parseFloat(el.innerText) || 0;
              val += (Math.random() * 0.3);
              el.innerText = val.toFixed(1);
            });
            document.querySelectorAll('.js-aura-number-sm').forEach(function(el) {
              var val = parseFloat(el.innerText) || 0;
              val += (Math.random() * 0.1);
              el.innerText = val.toFixed(1);
            });
          }, 300);
        })();
      `}</Script>

      {/* YZI reveal observer */}
      <Script id="yzi-reveal" strategy="afterInteractive">{`
        (function() {
          var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
              if (e.isIntersecting) {
                var el = e.target;
                var delay = 0;
                if (el.classList.contains('yzi-enter-d2')) delay = 100;
                if (el.classList.contains('yzi-enter-d3')) delay = 200;
                if (el.classList.contains('yzi-enter-d4')) delay = 300;
                setTimeout(function() { el.classList.add('is-visible'); }, delay);
                io.unobserve(el);
              }
            });
          }, { threshold: 0.12 });
          function init() {
            document.querySelectorAll('.yzi-reveal').forEach(function(el) { io.observe(el); });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
          } else { init(); }
        })();
      `}</Script>
    </div>
  )
}
