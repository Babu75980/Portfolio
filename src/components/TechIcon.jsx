import { icons } from '../data/icons'
import { alias } from '../data/skills'
const lum = h => { const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255); return 0.2126 * r + 0.7152 * g + 0.0722 * b }
const custom = {
  java: { hex: 'E76F00', el: <><path d="M8.5 2.5c1.4 1.6-1.4 2.6 0 4.5M12.5 1.5c1.4 1.6-1.4 2.6 0 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M4.5 9.5h11v5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4z" /><path d="M15.5 10.5h1.5a2.6 2.6 0 0 1 0 5.2h-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M3 21.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
  aws: { hex: 'FF9900', el: <><text x="12" y="12" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontWeight="800" fontSize="10.5" fill="currentColor">aws</text><path d="M3 15.5c5 3.6 13 3.6 18 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path d="M18.5 13.6l2.6 1.9-2.9 1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></> },
}
export const iconKey = n => (icons[n] || custom[n]) ? n : alias[String(n).toLowerCase()]
export default function TechIcon({ name, size = 28 }) {
  const k = iconKey(name); const ic = icons[k] || custom[k]; if (!ic) return null
  const dark = lum(ic.hex) < 0.2
  const color = dark ? 'var(--fg)' : `color-mix(in srgb, #${ic.hex} 80%, var(--fg) 20%)`
  return <svg className="ti" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color }} aria-hidden="true" focusable="false">{ic.p ? <path d={ic.p} /> : ic.el}</svg>
}
