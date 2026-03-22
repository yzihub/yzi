'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const E = [0.16, 1, 0.3, 1] as const
const CYAN = '#00F0FF'
const T1 = '#E6EAF0'
const T2 = '#9AA3AD'

const PRODUCTS = [
  {
    index: '01',
    name: 'YZI-OS',
    desc: 'Sistema operacional de vendas com CRM, atendimento e condução de leads via WhatsApp',
    href: '/yzi-os',
  },
  {
    index: '02',
    name: 'SHOWRUNNER',
    desc: 'Sistema para produção audiovisual com organização de projetos e fluxo de produção',
    href: '/showrunner',
  },
  {
    index: '03',
    name: 'POLITICAL-HUB',
    desc: 'Sistema para campanhas com monitoramento, leads e gestão de comunicação',
    href: '/political',
  },
]

export function HubProductsSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative py-40 px-8"
      style={{ background: '#050507', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="mx-auto max-w-5xl space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: E }}
          className="space-y-5"
        >
          <span
            className="font-mono text-[10px] uppercase block"
            style={{ color: CYAN, letterSpacing: '0.2em' }}
          >
            [ Produtos ]
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-semibold"
            style={{ color: T1, letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            Produtos construídos sobre a mesma infraestrutura
          </h2>
        </motion.div>

        {/* 3-column product grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }}
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.index} product={p} delay={i * 0.08} col={i} />
          ))}
        </div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: E }}
          className="font-mono text-xs uppercase"
          style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.14em' }}
        >
          Todos operam sobre a mesma base de dados, automação e controle.
        </motion.p>

      </div>
    </section>
  )
}

function ProductCard({
  product,
  delay,
  col,
}: {
  product: typeof PRODUCTS[0]
  delay: number
  col: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: E }}
      style={{ borderRight: col < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
    >
      <Link
        href={product.href}
        className="group flex flex-col justify-between p-10 h-full"
        style={{
          background: '#0A0A0D',
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          transition: 'background 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = '#111115'
          el.style.boxShadow = `inset 0 0 0 1px ${CYAN}1A`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = '#0A0A0D'
          el.style.boxShadow = 'none'
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-auto">
          <span
            className="font-mono text-[9px]"
            style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.1em' }}
          >
            {product.index}
          </span>
          <motion.span
            className="font-mono text-xs opacity-0 group-hover:opacity-100"
            style={{ color: CYAN }}
            initial={false}
            animate={{}}
          >
            →
          </motion.span>
        </div>

        {/* Content */}
        <div className="space-y-4 mt-12">
          <h3
            className="font-mono text-base font-semibold"
            style={{ color: T1, letterSpacing: '0.06em' }}
          >
            {product.name}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: T2 }}
          >
            {product.desc}
          </p>
        </div>

        {/* Hover accent */}
        <div
          className="mt-8 h-px w-0 group-hover:w-8"
          style={{
            background: CYAN,
            opacity: 0.4,
            transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </Link>
    </motion.div>
  )
}
