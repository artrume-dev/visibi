# 🔒 Pre-Commit Security Checklist

Before pushing to GitHub, verify these items:

## ✅ Environment Files

- [ ] `.env` is in `.gitignore` ✓
- [ ] `.env.local` is in `.gitignore` ✓
- [ ] `.env.example` exists (no secrets) ✓
- [ ] Run: `git status | grep -E "\.env"` - should ONLY show `.env.example`

## ✅ Sensitive Data Check

Run this command to verify no secrets will be committed:

```bash
# Check for sensitive files
git status --short | grep -E "\.env$|\.env\.local|\.key|secret|password"

# Should return EMPTY or only show .env.example
```

## ✅ API Keys & Secrets

Verify these are NOT in any committed files:
- [ ] OpenAI API keys (sk-...)
- [ ] Database passwords
- [ ] NextAuth secrets
- [ ] OAuth client secrets
- [ ] Any other API keys

## ✅ Database

- [ ] Migration files don't contain sensitive data
- [ ] Connection strings use environment variables only
- [ ] No hardcoded passwords in code

## ✅ Files to NEVER Commit

These should be in `.gitignore`:
```
.env
.env.local
.env*.local
*.key
*.pem
node_modules/
.next/
```

## ✅ Safe to Commit

These files ARE safe to commit:
```
✓ .env.example (template only)
✓ .gitignore
✓ README.md
✓ package.json
✓ prisma/schema.prisma
✓ All /src files
✓ All /tests files
✓ Documentation files
```

## 🚨 If You Accidentally Committed Secrets

**DO THIS IMMEDIATELY:**

1. **Revoke/Regenerate the exposed secret:**
   - OpenAI: https://platform.openai.com/api-keys
   - NextAuth: Generate new with `openssl rand -base64 32`
   - Database: Change password in database provider

2. **Remove from git history:**
   ```bash
   # WARNING: This rewrites history!
   git filter-branch --force --index-filter \
     'git rm --cached --ignore-unmatch .env .env.local' \
     --prune-empty --tag-name-filter cat -- --all
   
   # Force push
   git push origin --force --all
   ```

3. **Add proper .gitignore and recommit**

## ✅ Final Check Before Push

```bash
# 1. Check git status
git status

# 2. Verify no .env files (except .env.example)
git ls-files | grep env

# 3. Check what will be committed
git diff --cached

# 4. If all good, commit and push!
git add .
git commit -m "Initial commit: Phase 1 authentication setup"
git push origin main
```

---

**Remember:** Once something is pushed to GitHub, assume it's public forever!
