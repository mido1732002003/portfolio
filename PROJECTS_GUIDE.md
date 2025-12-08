# How to Add Your Projects

Add your projects to the `projects` array in `js/config.js`. Each project follows this format:

```javascript
{
  title: "Project Name",
  description: "A brief description of what the project does and its key features.",
  tech: ["React", "Node.js", "MongoDB"],  // Technologies used
  category: "Full-Stack",                   // Use "Frontend", "Full-Stack", or "AI"
  links: {
    live: "https://your-live-demo-url.com",
    source: "https://github.com/yourusername/project-repo"
  }
}
```

## Example Projects

```javascript
projects: [
  {
    title: "AI Chatbot Platform",
    description: "An intelligent chatbot built with RAG architecture, capable of answering questions from custom knowledge bases with high accuracy.",
    tech: ["Python", "LangChain", "OpenAI", "React", "FastAPI"],
    category: "AI",
    links: {
      live: "https://chatbot.yoursite.com",
      source: "https://github.com/yourusername/ai-chatbot"
    }
  },
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and customer analytics with real-time updates.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    category: "Full-Stack",
    links: {
      live: "https://dashboard.yoursite.com",
      source: "https://github.com/yourusername/ecommerce-dashboard"
    }
  },
  {
    title: "Portfolio Template",
    description: "A modern, responsive portfolio website with dark theme, animations, and dynamic content management.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    links: {
      live: "https://yoursite.com",
      source: "https://github.com/yourusername/portfolio"
    }
  }
]
```

## Categories

Projects are filterable by category. Use one of these:
- `"Frontend"` - Client-side only projects
- `"Full-Stack"` - Projects with both frontend and backend
- `"AI"` - AI/ML focused projects (update the filter buttons in index.html)

## Tips

1. Keep descriptions concise (1-2 sentences)
2. List 3-5 main technologies
3. Use actual URLs or placeholder URLs you'll update later
4. Add at least 3-4 projects for a balanced portfolio
