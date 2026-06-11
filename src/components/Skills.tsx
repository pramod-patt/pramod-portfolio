interface SkillCategory {
  category: string
  skills: string[]
  wide?: boolean
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'Backend & APIs',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Web API', 'REST APIs', 'Azure Functions', 'Microservices Architecture', 'Python', 'FastAPI', 'Authentication', 'Authorization']
  },
  {
    category: 'Cloud & Architecture',
    skills: [
      'Azure Static Web Apps', 'Azure App Service', 'Azure Functions', 'Azure Service Bus',
      'Azure SQL', 'Key Vault', 'Application Insights', 'Application Gateway',
      'Azure Networking', 'API Management', 'Storage Accounts', 'Private Endpoints',
      'Azure DevOps', 'AWS Knowledge', 'GCP Knowledge'
    ],
    wide: true
  },
  {
    category: 'AI',
    skills: ['Azure OpenAI', 'RAG', 'Embeddings', 'Semantic Kernel', 'Vector DB', 'LangChain', 'LangGraph', 'AI Agents', 'Prompt Engineering']
  },
  {
    category: 'AI-Assisted Development',
    skills: ['Cursor', 'Claude Code', 'GitHub Copilot', 'Google Antigravity']
  },
  {
    category: 'Data',
    skills: ['SQL Server', 'Azure SQL', 'Cosmos DB', 'Power BI', 'Azure Data Factory']
  },
  {
    category: 'Leadership',
    skills: ['Technical Leadership', 'Mentoring', 'Architecture Review', 'Engineering Management', 'Delivery Planning']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className={`skill-category${cat.wide ? ' skill-category-wide' : ''}`}>
              <h3>{cat.category}</h3>
              <div className={`skill-badges${cat.wide ? ' skill-badges-grid' : ''}`}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
