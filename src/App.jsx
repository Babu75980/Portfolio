import Header from './components/Header'
import Backdrop from './components/Backdrop'
import BackToTop from './components/BackToTop'
import useRoute from './hooks/useRoute'
import useTheme from './hooks/useTheme'
import { useReveal, useScroll, useSpotlight } from './hooks/useEffects'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
const pages = { '': Home, projects: Projects, experience: Experience, skills: Skills, about: About, contact: Contact }
export default function App() {
  const route = useRoute(); const [theme, setTheme] = useTheme(); const sc = useScroll()
  useReveal(); useSpotlight()
  const [base, id] = route.split('/')
  const page = base === 'projects' && id ? <ProjectDetail id={id} /> : (() => { const P = pages[base] || Home; return <P /> })()
  return (<><Backdrop /><Header route={route} theme={theme} setTheme={setTheme} progress={sc.p} top={sc.top} /><main key={route} className="page">{page}</main><footer>© 2026 Babu Perumal · Chennai, India</footer><BackToTop show={sc.far} /></>)
}
