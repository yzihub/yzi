import FactoryStepper from '@/components/factory/FactoryStepper'

export default function FactoryPage() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#000000] min-h-full">
      <header className="flex flex-col gap-1">
        <h1 className="font-sans font-bold text-white text-xl tracking-widest uppercase">
          FACTORY
        </h1>
        <p className="font-mono text-xs text-[#52525b]">Provisionamento de novos clientes</p>
      </header>

      <FactoryStepper />
    </div>
  )
}
