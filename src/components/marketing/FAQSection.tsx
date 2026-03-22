'use client'

import { useState } from 'react'

const PlusIcon = () => (
  <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
)

const faqs = [
  {
    question: 'Isso é um chatbot?',
    answer: 'Não. A YZI é a interface de um sistema operacional que estrutura sua operação inteira, do diagnóstico ao fechamento. Chatbot é uma ferramenta. O YZI-OS é o sistema que organiza tudo ao redor.',
    defaultOpen: true,
  },
  {
    question: 'Preciso trocar minhas ferramentas?',
    answer: 'Não. O YZI-OS conecta e organiza o que você já usa. A mudança não é de ferramenta, é de estrutura. Você continua usando o que funciona, mas agora dentro de um sistema que opera de forma coordenada.',
    defaultOpen: false,
  },
  {
    question: 'Funciona com WhatsApp?',
    answer: 'Sim. Com estabilidade, rastreabilidade e controle total da operação. O WhatsApp é o canal. O YZI-OS é o sistema que conduz cada conversa com contexto e intenção, do primeiro contato ao fechamento.',
    defaultOpen: false,
  },
  {
    question: 'Isso serve para meu tipo de negócio?',
    answer: 'Se você tem leads, operação e crescimento, sim. O YZI-OS foi construído para qualquer operação que dependa de converter atenção em resultado, independente do setor ou tamanho.',
    defaultOpen: false,
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer: 'Depende da complexidade da sua operação, mas a estrutura começa a operar rapidamente. O diagnóstico inicial é feito na primeira sessão e os primeiros fluxos ficam ativos em poucos dias.',
    defaultOpen: false,
  },
  {
    question: 'O que acontece depois que o sistema está no ar?',
    answer: 'O sistema opera continuamente. Você acompanha os dashboards, os leads fluem pelo pipeline, as decisões acontecem com contexto e a operação evolui com base em dados reais, sem depender de quem lembra.',
    defaultOpen: false,
  },
]

const itemDelays = ['delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-5']

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(faq.defaultOpen ?? false)
  return (
    <div
      className={`scroll-animate ${itemDelays[index]} w-full border border-white/[0.05] rounded-[20px] shadow-[0_2px_14px_-4px_rgba(0,0,0,0.5)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-colors duration-300 bg-neutral-900/40 backdrop-blur-sm overflow-hidden`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between cursor-pointer text-base md:text-lg font-medium font-geist outline-none p-5 lg:p-6 text-neutral-50 text-left"
      >
        {faq.question}
        <span className={`transition-transform duration-300 ml-4 shrink-0 flex items-center justify-center text-neutral-500 ${open ? 'rotate-45' : ''}`}>
          <PlusIcon />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="text-base font-geist leading-relaxed px-5 lg:px-6 pb-5 lg:pb-6 pr-8 lg:pr-12 pt-0 text-neutral-400">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="flex flex-col w-full z-10 relative items-center">
      <div className="flex-1 flex flex-col lg:pt-16 bg-neutral-950/80 w-full z-10 pt-16 pr-6 pb-16 pl-6 relative items-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none bg-emerald-400/10" />

        {/* FAQ Badge */}
        <div className="blur-animate inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.05] mb-6 shadow-sm relative z-10 bg-neutral-900/50">
          <span className="text-xs font-medium uppercase font-geist tracking-widest text-neutral-400">FAQ</span>
        </div>

        <h2 className="scroll-animate md:text-4xl lg:text-5xl leading-[1.15] text-3xl font-medium text-neutral-50 tracking-tight font-geist">
          Perguntas frequentes
        </h2>

        <p className="scroll-animate delay-1 text-base md:text-lg font-geist max-w-[600px] text-center mb-16 relative z-10 leading-relaxed text-neutral-500">
          Tudo o que você precisa saber sobre o sistema. Não encontrou o que procura?{' '}
          <a className="text-emerald-500 transition-colors hover:text-emerald-400" href="#">Fale com a nossa equipe</a>.
        </p>

        <div className="flex flex-col gap-3 z-10 w-full max-w-[800px] relative">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
