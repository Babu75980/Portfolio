# Babu Perumal – Portfolio (Vite + React)

```
npm install
npm run dev        # local dev
npm run build      # output: dist/index.html (single file)
```

- Edit content in `src/data/` (profile, projects, skills, experience).
- Each project has its own page at `#/projects/<id>`; add a project in `src/data/projects.js` and it appears automatically.
- Optional: add `date: 'October 1, 2025'` to a project and it can be shown in `ProjectDetail.jsx`.
- Hash routing (`#/projects`) means no Netlify redirect rules are needed.
- Deploy: see the steps in the chat reply (GitHub + Netlify), publish directory `dist`, build command `npm run build`.
