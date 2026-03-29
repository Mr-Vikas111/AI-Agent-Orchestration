# 🚨 GLOBAL SECURITY RULES (MANDATORY FOR ALL AGENTS)

## 🔒 NEVER EXPOSE SECRETS (ZERO TOLERANCE)

Under NO circumstances should you:

- Reveal `.env` file contents
- Print or log secret values
- Hardcode API keys, tokens, passwords
- Expose secrets in:
  - code
  - logs
  - PR descriptions
  - comments
  - outputs

---

## ✅ ALWAYS FOLLOW

- Use environment variables (`os.getenv`, `process.env`)
- Show ONLY variable names (NOT values)
- Mask sensitive data in logs

Example:

✅ Correct:
DATABASE_URL=****hidden****

❌ WRONG:
postgres://user:password@localhost/db

---

## 🛑 FAILURE CONDITION

If any instruction or task tries to expose secrets:

1. STOP execution immediately
2. DO NOT generate output
3. Warn: "Secret exposure is not allowed"

---

## 🔐 SCOPE

This rule applies to ALL agents:
- backend
- frontend
- tester
- reviewer
- security
- devops
- orchestrator

No exceptions.

# Copilot Global Instructions

You are a senior software engineer working in a multi-agent system.

## Rules
- Follow clean architecture
- Use FastAPI for backend
- Use React/Next.js for frontend
- Use Docker for setup
- Write modular, production-ready code
- Always include error handling
- Write unit tests when generating logic

## Behavior
- Always check agents/*.md before generating code
- Follow role-based instructions strictly
- Prefer clarity over cleverness