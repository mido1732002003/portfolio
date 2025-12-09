# Real-Time Sentiment Analysis Dashboard

Build a real-time sentiment analysis dashboard that monitors and visualizes public opinion from various text sources with live updating charts and insights.

---

## Project Overview

Create an interactive dashboard that:
1. Analyzes text sentiment (Positive/Negative/Neutral)
2. Displays real-time visualizations and trends
3. Allows users to input custom text or analyze preset topics
4. Shows historical trends and patterns

---

## Tech Stack

- **Frontend**: React + Vite, Recharts or Chart.js for visualizations
- **Backend**: Python + FastAPI with WebSocket support
- **AI**: Mistral AI or Hugging Face transformers for sentiment
- **Database**: SQLite or PostgreSQL for storing results
- **Real-time**: WebSocket for live updates

---

## Features Required

### 1. Text Analysis Input
- Single text input for quick analysis
- Batch text upload (CSV/JSON)
- Real-time typing analysis with debounce

### 2. Sentiment Detection
- Classify as Positive, Negative, or Neutral
- Confidence score (0-100%)
- Emotion detection (Happy, Sad, Angry, Surprised, etc.)
- Key phrase extraction

### 3. Live Dashboard Visualizations
- Pie chart: Sentiment distribution
- Line chart: Sentiment trend over time
- Bar chart: Emotion breakdown
- Word cloud: Most common positive/negative words
- Gauge: Overall sentiment score

### 4. History & Trends
- Save analysis history
- Filter by date range
- Compare different time periods
- Export data as CSV

### 5. Demo Mode
- Pre-loaded sample datasets
- Simulated real-time data stream
- Interactive walkthrough

---

## UI/UX Requirements

- Dark theme with accent colors for sentiments:
  - Green for Positive
  - Red for Negative  
  - Gray/Yellow for Neutral
- Responsive grid layout for widgets
- Smooth animations for chart updates
- Glassmorphism cards for metrics

---

## API Endpoints

```
POST /api/analyze - Analyze single text
POST /api/batch - Analyze multiple texts
GET /api/history - Get analysis history
GET /api/trends - Get sentiment trends
WS /ws/stream - WebSocket for real-time updates
```

---

## File Structure

```
sentiment-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Charts/
│   │   │   ├── Dashboard/
│   │   │   └── Input/
│   │   ├── hooks/
│   │   └── services/
│   └── package.json
├── backend/
│   ├── api/
│   ├── ml/
│   ├── database/
│   └── requirements.txt
└── README.md
```

---

## Implementation Notes

- Use a lightweight sentiment model for fast responses
- Implement WebSocket heartbeat for connection health
- Add caching layer for repeated analyses
- Include sample datasets for demo purposes
- Optimize chart rendering for smooth animations

---

## Dashboard Layout

```
┌─────────────────────────────────────────────────────┐
│  Sentiment Analysis Dashboard          [Demo Mode]  │
├─────────────────────────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐ │
│ │ Overall     │ │ Positive    │ │ Texts Analyzed  │ │
│ │ Score: 72%  │ │ 45%         │ │ 1,234           │ │
│ └─────────────┘ └─────────────┘ └─────────────────┘ │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────┐ ┌─────────────────────────┐ │
│ │   Trend Line Chart  │ │   Sentiment Pie Chart   │ │
│ │   ~~~~~~~~~~~~~~~~  │ │      ◉ Positive         │ │
│ │   ~~~~~~~~~~~~~~~~  │ │      ◉ Negative         │ │
│ └─────────────────────┘ └─────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │  Input: [Enter text to analyze...        ] [Go] │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## Deliverables

1. Full-stack application with real-time updates
2. Interactive dashboard with multiple chart types
3. Demo mode with sample data
4. Documented API
5. Add to portfolio with live demo link
