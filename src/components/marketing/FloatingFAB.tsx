'use client'

export function FloatingFAB() {
  return (
    <div
      id="yzi-fab-wrapper"
      style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}
    >
      <div
        id="yzi-tooltip"
        style={{
          background: 'rgba(10,10,14,0.92)',
          border: '1px solid rgba(0,201,167,0.25)',
          backdropFilter: 'blur(12px)',
          borderRadius: 12,
          padding: '10px 16px',
          fontSize: 12,
          fontFamily: 'var(--font-geist-sans), sans-serif',
          color: 'rgba(255,255,255,0.75)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.01em',
          maxWidth: 260,
          lineHeight: 1.5,
        }}
      >
        A YZI pode analisar sua operação agora
      </div>
      <a
        id="yzi-fab"
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(to bottom, #00c9a7, #009b81)',
          border: '1px solid #009b81',
          borderRadius: 9999,
          padding: '14px 22px',
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'var(--font-geist-sans), sans-serif',
          color: '#fff',
          textDecoration: 'none',
          letterSpacing: '0.01em',
          cursor: 'pointer',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Falar com a YZI
      </a>
    </div>
  )
}
