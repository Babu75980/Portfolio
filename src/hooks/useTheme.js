import { useEffect, useState } from 'react'
export const THEMES = [['dark', 'Dark', '#05070f'], ['light', 'Light', '#f6f7fb'], ['retro', 'Retro', '#b4451f'], ['cyberpunk', 'Cyberpunk', '#fcee0a'], ['aurora', 'Aurora', '#5af2b0'], ['synthwave', 'Synthwave', '#ff71ce']]
export default function useTheme() {
  const [theme, setTheme] = useState(() => { try { const t = localStorage.getItem('theme'); return THEMES.some(x => x[0] === t) ? t : 'dark' } catch { return 'dark' } })
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme) } catch {} }, [theme])
  return [theme, setTheme]
}
