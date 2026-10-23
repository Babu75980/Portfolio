import { experience } from '../data/experience'
import { education } from '../data/profile'
import PageHead from '../components/PageHead'
export default function Experience() {
  return (
    <div className="wrap">
      <PageHead title="Experience" sub="Three years of building production software." />
      <div className="timeline">{experience.map(e => (
        <div className="card rv" key={e.company}>
          <h3>{e.title} · {e.company}</h3><div className="mono accent">{e.period} · {e.place}</div>
          <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
        </div>))}</div>
      <h2 className="sec">Education</h2>
      <div className="card rv"><h3>{education.degree}</h3><p className="muted">{education.field}, {education.college}<br />{education.period} · CGPA {education.cgpa}</p></div>
    </div>
  )
}
