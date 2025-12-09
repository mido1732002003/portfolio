# AI Resume Analyzer & Job Matcher

Build a full-stack AI-powered resume analysis platform that helps job seekers improve their CVs and match them with suitable job positions.

---

## Project Overview

Create a web application where users can:
1. Upload their resume (PDF or text)
2. Get AI-powered analysis and improvement suggestions
3. Paste a job description and see how well their resume matches
4. Receive actionable recommendations to improve their match score

---

## Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Python + FastAPI
- **AI**: Mistral AI API (or OpenAI) for text analysis
- **File Processing**: PyPDF2 or pdfplumber for PDF extraction
- **Deployment**: Railway or Vercel

---

## Features Required

### 1. Resume Upload & Parsing
- Accept PDF and plain text uploads
- Extract text content from PDFs
- Parse and identify sections (Experience, Education, Skills, etc.)

### 2. AI Resume Analysis
- Analyze resume quality and structure
- Check for common issues (too long, missing sections, weak action verbs)
- Provide a score out of 100
- Give specific improvement suggestions

### 3. Job Description Matching
- Text input for job description
- Calculate match percentage between resume and job
- Highlight matching skills and keywords
- Show missing keywords that should be added

### 4. Recommendations Dashboard
- Visual score display with progress indicators
- Categorized suggestions (Critical, Important, Nice-to-have)
- Before/after examples for improvements

---

## UI/UX Requirements

- Dark theme matching portfolio style
- Clean, modern interface
- Drag-and-drop file upload
- Real-time analysis with loading states
- Mobile responsive

---

## API Endpoints

```
POST /api/upload - Upload resume file
POST /api/analyze - Analyze resume content
POST /api/match - Match resume with job description
GET /api/suggestions/{analysis_id} - Get improvement suggestions
```

---

## File Structure

```
resume-analyzer/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   └── package.json
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   └── requirements.txt
└── README.md
```

---

## Implementation Notes

- Use chunking for long resumes before sending to AI
- Implement rate limiting for API calls
- Cache analysis results to avoid re-processing
- Add export functionality for recommendations (PDF/Markdown)

---

## Deliverables

1. Working web application with all features
2. Clean, documented code
3. README with setup instructions
4. Add to portfolio with live demo link
