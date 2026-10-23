import { useState } from 'react'
import { skills, skillCats } from '../data/skills'
import PageHead from '../components/PageHead'
import TechIcon from '../components/TechIcon'
const Stars = ({ n }) => <div className="stars" role="img" aria-label={`${n} of 5`}>{[1, 2, 3, 4, 5].map(i => <span key={i} className={i <= n ? 'on' : ''} style={{ '--k': i }}>★</span>)}</div>
export default function Skills() {
  const [c, setC] = useState('All')
  const list = skills.filter(s => c === 'All' || s.cat === c)
  return (
    <div className="wrap">
      <PageHead title="Skills" sub="Key skills that define my professional identity." />
      <div className="chips" role="tablist">{skillCats.map(k => <button key={k} role="tab" aria-selected={c === k} className={c === k ? 'on' : ''} onClick={() => setC(k)}>{k}</button>)}</div>
      <div className="grid3" key={c}>{list.map((s, i) => (
        <div className="card skill rv" style={{ '--d': i * 70 + 'ms' }} key={s.name}>
          <div className="sico">{s.icon.map(k => <TechIcon key={k} name={k} size={s.icon.length > 1 ? 30 : 38} />)}</div>
          <h3>{s.name}</h3><p className="muted">{s.desc}</p><Stars n={s.n} /></div>))}</div>
    </div>
  )
}
