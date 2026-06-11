interface Role {
  title: string
  description: string
}

const roles: Role[] = [
  {
    title: 'AI Engineer',
    description: 'Exploring and building AI-enabled applications using Azure OpenAI, RAG patterns, embeddings, prompt engineering, and automation workflows.'
  },
  {
    title: 'Lead Engineer',
    description: 'Leading technical implementation, reviewing design decisions, mentoring developers, and helping teams deliver reliable software.'
  },
  {
    title: 'Engineering Manager',
    description: 'Supporting engineers through planning, mentoring, delivery coordination, performance conversations, and team growth.'
  },
  {
    title: 'Solution Architect',
    description: 'Designing end-to-end application solutions across frontend, backend, cloud services, data, security, and integrations.'
  },
  {
    title: 'Azure Solution Architect',
    description: 'Building and designing cloud solutions using Azure Functions, Azure App Service, Azure SQL, Key Vault, Application Insights, and related Azure services.'
  },
  {
    title: 'Full-Stack Developer',
    description: 'Creating modern applications using React, TypeScript, C#, .NET, REST APIs, and SQL-based systems.'
  }
]

export default function ProfessionalRoles() {
  return (
    <section id="roles" className="roles-section">
      <div className="container">
        <h2>Professional Roles</h2>
        <p className="section-subtitle">Areas of experience and expertise</p>
        <div className="roles-grid">
          {roles.map((role) => (
            <div key={role.title} className="role-card">
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
