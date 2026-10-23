import { useEffect, useState } from 'react'
const read = () => location.hash.replace(/^#\/?/, '')
// Hash router. Clicks on #/ links are handled in state too, so it also works inside embedded previews.
export default function useRoute() {
  const [route, setRoute] = useState(read())
  useEffect(() => {
    const go = r => { setRoute(r); window.scrollTo(0, 0) }
    const onHash = () => go(read())
    const onClick = e => {
      const a = e.target.closest && e.target.closest('a[href^="#/"]')
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return
      e.preventDefault()
      const r = a.getAttribute('href').replace(/^#\/?/, '')
      try { if (location.hash !== '#/' + r) location.hash = '/' + r } catch {}
      go(r)
    }
    addEventListener('hashchange', onHash); document.addEventListener('click', onClick)
    return () => { removeEventListener('hashchange', onHash); document.removeEventListener('click', onClick) }
  }, [])
  return route
}
