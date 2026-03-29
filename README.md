# ⚡ Avengers Calculator

> **Stark Industries — Mark XLVII Combat Calculator**
> A full-stack calculator app with an Avengers-themed UI, scientific operations, and a clean FastAPI + Next.js architecture.

---

## 🛠️ Tech Stack

| Layer      | Technology                            |
|------------|---------------------------------------|
| Backend    | Python 3.11, FastAPI, Uvicorn         |
| Frontend   | Next.js 14, TypeScript, Tailwind CSS  |
| Testing    | pytest (backend), Jest + RTL (frontend) |
| Container  | Docker, docker-compose                |

---

## ✨ Features

- **Basic operations** — Add, Subtract, Multiply, Divide, Modulo, Power
- **Scientific mode** — sin, cos, tan (degrees), √, ln, log₁₀ (toggle panel)
- **Avengers UI** — Dark navy background, gold arc reactor glow, blue display, Orbitron font
- **Error handling** — Division by zero, invalid inputs returned with clear messages
- **Fully tested** — 30 backend + 11 frontend tests

---

## 🚀 Quick Start

### Docker (recommended)

```bash
git clone https://github.com/Mr-Vikas111/AI-Agent-Orchestration.git
cd AI-Agent-Orchestration/stranger-things-calculator

docker compose up --build
```

- Frontend → http://localhost:3000
- Backend API → http://localhost:8000
- Health check → http://localhost:8000/health

### Local development

**Backend**
```bash
cd stranger-things-calculator/backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend**
```bash
cd stranger-things-calculator/frontend
npm install
npm run dev
```

---

## 📡 API Reference

### `POST /api/calculate`

```json
{
  "operation": "add",
  "a": 10,
  "b": 5
}
```

**Supported operations:**

| Operation | Symbol | Description              | Unary? |
|-----------|--------|--------------------------|--------|
| `add`     | +      | Addition                 | No     |
| `subtract`| −      | Subtraction              | No     |
| `multiply`| ×      | Multiplication           | No     |
| `divide`  | ÷      | Division                 | No     |
| `modulo`  | %      | Modulo (remainder)       | No     |
| `power`   | ^      | Exponentiation           | No     |
| `sin`     | sin    | Sine (degrees)           | Yes    |
| `cos`     | cos    | Cosine (degrees)         | Yes    |
| `tan`     | tan    | Tangent (degrees)        | Yes    |
| `sqrt`    | √      | Square root              | Yes    |
| `log`     | ln     | Natural logarithm        | Yes    |
| `log10`   | log    | Base-10 logarithm        | Yes    |

**Response:**
```json
{
  "result": 15.0,
  "operation": "add",
  "a": 10,
  "b": 5
}
```

**Error (422):**
```json
{ "detail": "Division by zero is not allowed in the Upside Down" }
```

### `GET /health`
```json
{ "status": "alive", "message": "The lights are on" }
```

---

## 🧪 Running Tests

**Backend (pytest)**
```bash
cd stranger-things-calculator/backend
python3 -m pytest tests/ -v
# 30 tests, 0 failures
```

**Frontend (Jest)**
```bash
cd stranger-things-calculator/frontend
npm test
# 11 tests, 0 failures
```

---

## 📁 Project Structure

```
stranger-things-calculator/
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI app, CORS, /health
│   │   ├── api/routes/
│   │   │   └── calculator.py        # POST /api/calculate
│   │   ├── services/
│   │   │   └── calculator_service.py # Pure calculation logic
│   │   └── schemas/
│   │       └── calculator.py        # Pydantic v2 models
│   ├── tests/
│   │   └── test_calculator.py       # 30 pytest tests
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── app/
│   │   ├── globals.css              # Avengers theme, animations
│   │   └── page.tsx                 # App entry point
│   ├── components/
│   │   ├── Calculator.tsx           # Stateful calculator logic
│   │   ├── Display.tsx              # Expression + result display
│   │   └── Button.tsx               # Themed button (4 variants)
│   ├── lib/
│   │   └── api.ts                   # Backend API client
│   ├── __tests__/                   # Jest + RTL tests
│   └── Dockerfile
└── docker-compose.yml
```

---

## 🔐 Environment Variables

| Variable              | Default                  | Description              |
|-----------------------|--------------------------|--------------------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000`  | Backend API base URL     |

> ⚠️ Never hardcode secrets. Use environment variables only.

---

## 🤖 Multi-Agent Architecture

This project was built using a **GitHub Copilot multi-agent orchestration** system:

| Agent        | Role                                      |
|--------------|-------------------------------------------|
| Orchestrator | Breaks tasks, assigns to agents           |
| Backend      | FastAPI service, schemas, routes          |
| Frontend     | Next.js UI, components, API client        |
| Tester       | pytest + Jest test suites                 |
| Reviewer     | Code quality, security checks             |
| DevOps       | Docker, CI/CD workflows                   |

---

## 📄 License

MIT
