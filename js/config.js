/**
 * Portfolio Configuration
 * Edit the values below to customize your portfolio content.
 */

const portfolioData = {
    // Owner's personal information
    owner: {
        name: "Mohamed Abdallah",
        role: "Full Stack & AI Engineer",
        tagline: "Building intelligent digital solutions that bridge creativity and technology.",
        location: "Your City, Country",
        summary: "I'm a passionate full-stack developer and AI engineer with expertise in crafting modern web applications and intelligent systems. I specialize in creating responsive, performant, and user-centric solutions using cutting-edge technologies. My focus is on combining traditional software development with AI capabilities to build innovative products."
    },

    // Contact information and social links
    contact: {
        email: "your.email@example.com",
        phone: "+1 (555) 000-0000",
        socials: [
            { name: "GitHub", url: "https://github.com/mido1732002003", iconKey: "github" },
            { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", iconKey: "linkedin" },
            { name: "Facebook", url: "https://facebook.com/yourusername", iconKey: "facebook" },
            { name: "Instagram", url: "https://instagram.com/yourusername", iconKey: "instagram" },
            { name: "WhatsApp", url: "https://wa.me/yourphonenumber", iconKey: "whatsapp" },
            { name: "Telegram", url: "https://t.me/yourusername", iconKey: "telegram" }
        ]
    },

    // Skills organized by category
    skills: [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Sass/SCSS", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
        },
        {
            category: "AI & Machine Learning",
            items: ["LangChain", "Mistral AI", "OpenAI API", "RAG Systems", "ChromaDB", "FAISS", "Computer Vision", "NLP", "Embeddings"]
        },
        {
            category: "Tools & Workflow",
            items: ["Git", "Docker", "AWS", "Vercel", "Railway", "Figma", "Jest", "CI/CD", "Agile/Scrum"]
        }
    ],

    // Portfolio projects
    projects: [
        {
            title: "AI Customer Support Chatbot",
            description: "A modern customer support chatbot with RAG architecture. Features a React chat UI, Mistral AI integration for intelligent responses, and source citations showing which documents were used for each answer.",
            tech: ["React", "Node.js", "Express", "Mistral AI", "RAG"],
            category: "AI",
            links: {
                live: "https://ai-chatbot-production-16af.up.railway.app/",
                source: "https://github.com/mido1732002003/AI-chatbot"
            }
        },
        {
            title: "Face Recognition Service",
            description: "1:N face identification system with multi-face enrollment, quality filtering, and optional liveness detection. Uses FAISS for vector indexing with GPU support and includes a web UI for easy management.",
            tech: ["Python", "FastAPI", "PostgreSQL", "FAISS", "InsightFace"],
            category: "AI",
            links: {
                source: "https://github.com/mido1732002003/face-recognition-service"
            }
        },
        {
            title: "Code RAG",
            description: "Intelligent code search and understanding tool with hybrid keyword and semantic search. AST-based code chunking for better context, supports Python, JavaScript, TypeScript, Java, C++ and more.",
            tech: ["Python", "FastAPI", "ChromaDB", "Mistral AI", "HTMX"],
            category: "AI",
            links: {
                source: "https://github.com/mido1732002003/code-rag"
            }
        },
        {
            title: "Image Caption Generator",
            description: "An intelligent application that generates descriptive captions for images using the Qwen3-VL-30B-A3B-Instruct model. Features a modern UI and seamless integration with Hugging Face for state-of-the-art vision-language capabilities.",
            tech: ["Python", "Hugging Face", "Qwen3-VL", "Railway", "Vercel"],
            category: "AI",
            links: {
                live: "https://reasonable-success-production-c17a.up.railway.app/",
                source: "https://github.com/mido1732002003/ICG"
            }
        }
    ],

    // Work experience - Update with your own experience
    experience: [
        // Add your experience here following the format:
        // {
        //   role: "Your Role",
        //   company: "Company Name",
        //   location: "City, Country",
        //   period: "Start – End",
        //   description: ["Achievement 1", "Achievement 2", "Achievement 3"]
        // }
    ]
};
