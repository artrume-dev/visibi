# GEO Intelligence Platform

AI-powered GEO analytics and competitive intelligence platform for tracking brand presence across ChatGPT, Claude, Gemini, and Perplexity.

## 🚀 Features

- **Multi-Engine Testing**: Simulate queries across ChatGPT, Claude, Gemini, and Perplexity
- **Performance Analytics**: Track mention rates, positioning, sentiment, and citations
- **Competitive Intelligence**: Monitor competitors and identify opportunities
- **Real-time Alerts**: Get notified of competitive threats and sentiment changes
- **Content Optimization**: AI-powered recommendations for better GEO performance

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **AI Integration**: OpenAI SDK, Anthropic SDK, Vercel AI SDK
- **Testing**: Vitest, React Testing Library, Playwright
- **Code Quality**: ESLint, Prettier, Husky, Commitlint

## 📋 Prerequisites

- Node.js 20+
- PostgreSQL database
- OpenAI API key (and optional keys for Claude, Gemini, Perplexity)

## 🏃 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Edit `.env.local` with your database credentials and API keys.

3. **Set up the database**:
   ```bash
   npm run db:push
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode with UI
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio

## 🎯 Development Status

### Phase 0: Foundation ✅ COMPLETE
- [x] Project initialization
- [x] Database schema
- [x] UI components setup
- [x] Testing framework
- [x] Landing page
- [x] Dashboard layout

### Next Steps (Phase 1)
- [ ] Authentication system
- [ ] Query simulation engine
- [ ] OpenAI integration
- [ ] Response analysis

See documentation files for detailed roadmap.

---

Built with ❤️ for the AI-first future
