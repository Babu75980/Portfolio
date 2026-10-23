import { profile } from '../data/profile'
import { tech } from '../data/skills'
import TechIcon, { iconKey } from '../components/TechIcon'
export default function About() {
  return (
    <div className="wrap about">
      <span className="pill">● A little about me</span>
      <h1 className="big">Turning complex requirements into dependable systems.</h1>
      <p className="lead">I’m Babu Perumal, a Java Full Stack engineer in Chennai. I build microservices, secure APIs and Angular interfaces that hold up in production.</p>
      <div className="two rv">
        <div className="prose">
          <p>I graduated in Electronics and Communication Engineering in 2024 and joined Finytive in November 2023, where I’ve worked on a multi-tenant CRM and workforce platforms end to end: schema design, event-driven services, secure APIs, UI and AWS deployments.</p>
          <p>I care about tenant isolation, predictable performance and well-tested code. I also use AI coding assistants for debugging, refactoring and optimization while keeping ownership of the design.</p>
          <div className="row"><a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="btn solid" href="#/contact">Get in touch ↗</a></div>
        </div>
        <aside>
          <div className="stat2">{profile.stats.map(([a, b]) => <div className="card" key={a}><b>{a}</b><span className="muted">{b}</span></div>)}</div>
          <div className="card"><h3>What I bring to the table</h3>{profile.bring.map(([i, t, d]) => <div className="bring" key={t}><div className="ico sm">{i}</div><div><b>{t}</b><p className="muted">{d}</p></div></div>)}</div>
        </aside>
      </div>
      <div className="card tech rv"><h3>Technologies I work with</h3><div className="tags">{tech.map(t => <span className="tag" key={t}>{iconKey(t) && <TechIcon name={t} size={15} />}{t}</span>)}</div></div>
      <blockquote className="rv">“{profile.quote}”</blockquote>
    </div>
  )
}
