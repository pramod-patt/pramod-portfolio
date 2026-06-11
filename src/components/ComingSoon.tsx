export default function ComingSoon() {
  const projects = [
    'AI document chat demo',
    'React + Azure Functions sample app',
    'Azure OpenAI / RAG project',
    'Azure architecture notes',
    'Blog posts about cloud, AI, and software engineering'
  ]

  return (
    <section id="coming-soon" className="coming-soon-section">
      <div className="container">
        <h2>Coming Soon</h2>
        <p className="section-subtitle">Portfolio roadmap</p>
        <ul className="coming-soon-list">
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
