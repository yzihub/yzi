'use client'

export function MarketingFooter() {
  return (
    <footer className="flex-1 flex flex-col lg:pt-32 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950/80 w-full z-10 pt-32 pr-6 pb-16 pl-6 relative items-center">
      <div className="w-full max-w-[1180px] mx-auto flex flex-col">
        <div className="w-full mb-12 overflow-hidden">
          <h2 className="text-[13vw] md:text-[14vw] lg:text-[150px] xl:text-[165px] leading-[0.75] uppercase select-none lg:text-left font-bold tracking-tighter text-center w-full text-neutral-100 font-geist">
            YZIHUB
          </h2>
        </div>

        <div className="w-full h-px bg-neutral-800 mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 w-full mb-16">
          <div className="flex flex-col gap-4 col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400 font-geist">Product</p>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">Features</a>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">Solution</a>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">Integração</a>
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400 font-geist">Resources</p>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">FAQ</a>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">Testimonials</a>
            <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">Support</a>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-start-4 lg:col-start-6 items-start md:items-end">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400 font-geist">Connect</p>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">YouTube</a>
              <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">X (Twitter)</a>
              <a className="text-base transition-colors hover:text-neutral-50 text-neutral-600 font-geist" href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <div className="flex gap-6 order-2 md:order-1">
            <a className="transition-colors hover:text-neutral-300 font-geist" href="#">Privacy Policy</a>
            <a className="transition-colors hover:text-neutral-300 font-geist" href="#">Terms of Service</a>
          </div>
          <div className="text-center md:text-right order-1 md:order-2 font-geist">
            © 2026 YZIHUB. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
