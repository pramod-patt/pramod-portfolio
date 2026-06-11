export default function CurrentFocus() {
  const focusAreas = [
    'Building AI-enabled portfolio projects',
    'Exploring Azure OpenAI and RAG-based solutions',
    'Sharing engineering notes, demos, and architecture learnings'
  ]

  return (
    <section id="focus" className="focus-section">
      <div className="container">
        <h2>Current Focus</h2>
        <p className="section-subtitle">What I'm working on right now</p>
        <ul className="focus-list">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
