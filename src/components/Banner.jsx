import { profile } from '../data/profile'
// Visual cover for a project (no screenshots needed): brand-tinted glow blobs, project name, tagline and tags
export default function Banner({ p }) {
  const [name, sub] = p.title.split(' – ')
  return (
    <div className="banner" style={{ '--h': p.hue }}>
      <i className="blob b1" /><i className="blob b2" />
      <div className="bn-in">
        <div className="bn-logo"><span className="ring">✓</span><b>{name}</b></div>
        <p>{sub || p.summary.split('. ')[0]}</p>
        <div className="bn-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
      <small>© {new Date().getFullYear()} {profile.name} · Case study</small>
    </div>
  )
}
