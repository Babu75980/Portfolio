import { useEffect, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { profile } from '../data/profile'
export const TABS = ['projects', 'experience', 'skills', 'about', 'contact']
export default function Header({ route, theme, setTheme, progress, top }) {
  const [open, setOpen] = useState(false)
  const cur = route.split('/')[0]
  useEffect(() => setOpen(false), [route])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => { document.body.style.overflow = ''; removeEventListener('keydown', k) } }, [open])
  return (
    <header className={'header' + (top ? '' : ' scrolled') + (open ? ' open' : '')}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="wrap nav">
        <a className="brand" href="#/">{profile.name}</a>
        <nav id="mainnav" aria-label="Main">{TABS.map(t => <a key={t} href={`#/${t}`} className={cur === t ? 'on' : ''} aria-current={cur === t ? 'page' : undefined}>{t[0].toUpperCase() + t.slice(1)}</a>)}
          <a className="gh-m" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav>
        <a className="pill gh" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <button className="icon-btn burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mainnav" onClick={() => setOpen(o => !o)}><span /><span /><span /></button>
      </div>
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
    </header>
  )
}
