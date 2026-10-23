import { useState } from 'react'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import photo from '../assets/profile.jpg'
import Banner from '../components/Banner'
import TechIcon, { iconKey } from '../components/TechIcon'
const handle = '@' + profile.github.split('/').pop()
export default function ProjectDetail({ id }) {
  const i = projects.findIndex(p => p.id === id); const p = projects[i]; const [note, setNote] = useState('')
  if (!p) return <div className="wrap detail"><a className="backlink" href="#/projects">‹ All Projects</a><div className="dbody"><h1>Project not found</h1><p className="muted">That project doesn’t exist. <a className="accent" href="#/projects">Browse all projects</a>.</p></div></div>
  const share = async () => {
    const url = location.href
    try { if (navigator.share) await navigator.share({ title: p.title, url }); else { await navigator.clipboard.writeText(url); setNote('Link copied') } } catch { setNote('Copy the address bar link') }
    setTimeout(() => setNote(''), 2200)
  }
  const prev = projects[(i + projects.length - 1) % projects.length], next = projects[(i + 1) % projects.length]
  return (
    <div className="wrap detail">
      <a className="backlink" href="#/projects"><span>‹</span> All Projects</a>
      <article className="dbody">
        <div className="kicker s" style={{ '--i': 0 }}>{p.type} project</div>
        <div className="titlerow s" style={{ '--i': 1 }}><h1>{p.title}</h1>
          <button className="icon-btn share" onClick={share} aria-label="Share this project" title="Share">⤴</button></div>
        <span className="toast" role="status">{note}</span>
        <div className="tags big s" style={{ '--i': 2 }}>{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="author s" style={{ '--i': 3 }}><img src={photo} alt="" /><div><b>{profile.name}</b><span>{handle}</span></div></div>
        <div className="s" style={{ '--i': 4 }}><Banner p={p} /></div>
        <h2 className="rv">Tech Stack</h2>
        <div className="tags big rv">{p.stack.map(t => <span className="tag" key={t}>{iconKey(t) && <TechIcon name={t} size={15} />}{t}</span>)}</div>
        <h2 className="rv">Description</h2>
        <div className="desc rv">{p.about.map(t => <p key={t}>{t}</p>)}
          <ul>{p.contributions.map(c => <li key={c}>{c}</li>)}</ul></div>
        <nav className="pn rv" aria-label="More projects">
          <a className="card" href={`#/projects/${prev.id}`}><span className="muted">‹ Previous</span><b>{prev.title}</b></a>
          <a className="card r" href={`#/projects/${next.id}`}><span className="muted">Next ›</span><b>{next.title}</b></a>
        </nav>
      </article>
    </div>
  )
}
