import { useState } from 'react'
import { profile } from '../data/profile'
import PageHead from '../components/PageHead'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { location.href = `mailto:${profile.email}` } }
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const send = () => { location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry')}&body=${encodeURIComponent(`${f.msg}\n\n— ${f.name} (${f.email})`)}` }
  return (
    <div className="wrap">
      <PageHead title="Contact" sub="Have a role or project in mind? Let's talk." />
      <div className="grid2">
        <div className="card rv"><p><b>Email</b><br /><a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a> <button className="copy" onClick={copy}>{copied ? 'Copied ✓' : 'Copy'}</button></p><p><b>Phone</b><br />{profile.phone}</p><p><b>Location</b><br />{profile.location}</p>
          <div className="row"><a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="btn solid" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a></div></div>
        <div className="card rv" style={{ '--d': '120ms' }}><input aria-label="Your name" placeholder="Your name" value={f.name} onChange={on('name')} /><input aria-label="Your email" type="email" placeholder="Your email" value={f.email} onChange={on('email')} /><textarea aria-label="Message" rows="4" placeholder="Message" value={f.msg} onChange={on('msg')} /><button className="btn solid" onClick={send}>Send message</button></div>
      </div>
    </div>
  )
}
