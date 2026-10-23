import { useRef } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { useTypewriter, useCountUp } from '../hooks/useEffects'
import TechIcon from '../components/TechIcon'
import photo from '../assets/profile.jpg'
const roles = ['Java Full Stack Engineer', 'Spring Boot microservices', 'Event-driven systems with Kafka', 'Angular & React interfaces']
const marquee = ['java', 'springboot', 'spring', 'kafka', 'postgres', 'redis', 'springsecurity', 'angular', 'react', 'typescript', 'docker', 'aws', 'jenkins', 'junit', 'git']
function Stat({ to, suffix = '', label }) { const r = useRef(null); const v = useCountUp(r, to); return <div className="card stat" ref={r}><b>{v}{suffix}</b><span className="muted">{label}</span></div> }
export default function Home() {
  const role = useTypewriter(roles)
  return (<>
    <section className="hero wrap">
      <div>
        <span className="pill s" style={{ '--i': 0 }}><i className="dot" /> Available for new opportunities</span>
        <h1 className="s" style={{ '--i': 1 }}>Hi, I’m {profile.name}.<br />I build scalable backends and clean UIs.</h1>
        <p className="role s mono" style={{ '--i': 2 }} aria-label={roles[0]}><span className="accent">&gt;</span> {role}<i className="caret" /></p>
        <p className="s lead" style={{ '--i': 3 }}>{profile.intro}</p>
        <div className="row s" style={{ '--i': 4 }}>
          <a className="btn solid" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          <a className="btn" href="#/projects">View projects</a>
          <a className="btn" href="#/contact">Get in touch</a>
        </div>
      </div>
      <img className="photo" src={photo} alt={profile.name} />
    </section>
    <section className="wrap stats">
      <Stat to={3} suffix="+" label="Years of enterprise experience" /><Stat to={projects.length} label="Featured projects" /><Stat to={skills.length} label="Core skills" />
    </section>
    <section className="marq rv" aria-label="Technologies">
      <div className="track">{[0, 1].map(k => <div className="grp" key={k} aria-hidden={k === 1}>{marquee.map(m => <span key={m + k}><TechIcon name={m} size={34} /></span>)}</div>)}</div>
    </section>
  </>)
}
