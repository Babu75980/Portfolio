import { useEffect, useState } from 'react'
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches
// Reveal elements with .rv as they scroll into view (also catches elements added later).
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    if (!('IntersectionObserver' in window) || reduced()) { document.querySelectorAll('.rv').forEach(e => e.classList.add('in')); document.documentElement.classList.add('noanim'); return }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    const scan = () => document.querySelectorAll('.rv:not(.in)').forEach(e => io.observe(e))
    scan(); const mo = new MutationObserver(scan); mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
// Scroll progress (0-1) and "scrolled past hero" flag
export function useScroll() {
  const [s, setS] = useState({ p: 0, far: false, top: true })
  useEffect(() => {
    let raf = 0
    const f = () => { raf = 0; const h = document.documentElement.scrollHeight - innerHeight; setS({ p: h > 0 ? Math.min(1, scrollY / h) : 0, far: scrollY > 600, top: scrollY < 8 }) }
    const on = () => { if (!raf) raf = requestAnimationFrame(f) }
    f(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on) }
  }, [])
  return s
}
// Cursor-follow spotlight on cards (sets --mx/--my)
export function useSpotlight() {
  useEffect(() => {
    if (!matchMedia('(hover: hover)').matches) return
    const m = e => { const c = e.target.closest && e.target.closest('.card'); if (!c) return; const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px') }
    document.addEventListener('mousemove', m, { passive: true }); return () => document.removeEventListener('mousemove', m)
  }, [])
}
export function useTypewriter(words, speed = 55, hold = 1700) {
  const [t, setT] = useState(reduced() ? words[0] : '')
  useEffect(() => {
    if (reduced()) return
    let i = 0, j = 0, del = false, id
    const tick = () => {
      const w = words[i]; j += del ? -1 : 1; setT(w.slice(0, j))
      let d = del ? speed / 2 : speed
      if (!del && j === w.length) { del = true; d = hold } else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 350 }
      id = setTimeout(tick, d)
    }
    id = setTimeout(tick, 600); return () => clearTimeout(id)
  }, [])
  return t
}
// Count up when scrolled into view
export function useCountUp(ref, to, ms = 1200) {
  const [v, setV] = useState(reduced() ? to : 0)
  useEffect(() => {
    if (reduced() || !ref.current) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect()
      const t0 = performance.now(); const step = t => { const k = Math.min(1, (t - t0) / ms); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(step) }
      requestAnimationFrame(step)
    }, { threshold: 0.4 }); io.observe(ref.current); return () => io.disconnect()
  }, [])
  return v
}
