import { useEffect, useState } from 'react'
import { THEMES } from '../hooks/useTheme'
export default function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  useEffect(() => { const c = () => setOpen(false); document.addEventListener('click', c); return () => document.removeEventListener('click', c) }, [])
  return (
    <div className="theme">
      <button className="icon-btn" aria-label="Change theme" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>☀</button>
      {open && <div className="menu">{THEMES.map(([id, label, color]) => (
        <button key={id} className={id === theme ? 'sel' : ''} onClick={() => { setTheme(id); setOpen(false) }}><i style={{ background: color }} />{label}</button>
      ))}</div>}
    </div>
  )
}
