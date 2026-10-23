import { useState } from 'react'
import { projects } from '../data/projects'
import PageHead from '../components/PageHead'
export default function Projects() {
  const [f, setF] = useState('All')
  const list = projects.filter(p => f === 'All' || p.type === f)
  return (
    <div className="wrap">
      <PageHead title="Projects" sub="Showcasing impactful projects and technical achievements." />
      <div className="segment" role="tablist">{['All', 'Personal', 'Professional'].map(t => <button key={t} role="tab" aria-selected={f === t} className={f === t ? 'on' : ''} onClick={() => setF(t)}>{t}</button>)}</div>
      <div className="grid3" key={f}>{list.map((p, i) => (
        <article className="card project rv" style={{ '--d': i * 90 + 'ms' }} key={p.id}>
          <div className="thumb" style={{ '--h': p.hue }}><span>{p.title.split(' – ')[0]}</span></div>
          <h3>{p.title}</h3><p className="muted clamp">{p.summary}</p>
          <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
          <div className="foot"><a className="btn solid" href={`#/projects/${p.id}`}>Read more ›</a><span className="badge" title={p.type}>{p.type[0]}</span></div>
        </article>))}</div>
    </div>
  )
}
