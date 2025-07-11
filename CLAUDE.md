# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 church website for Royalhouse Chapel SLM (South London Mission), built with React 19, TypeScript, and Tailwind CSS. The site uses shadcn/ui components and follows the App Router pattern.

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Component Library**: shadcn/ui components in `components/ui/`
- **Custom Components**: Page-specific components in `components/`
- **Styling**: Tailwind CSS with custom church-themed color palette
- **Package Manager**: pnpm (has pnpm-lock.yaml)

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `components/ui/` - shadcn/ui component library
- `lib/` - Utility functions (mainly `utils.ts` for cn() helper)
- `hooks/` - Custom React hooks
- `public/` - Static assets
- `styles/` - Global CSS styles

### Church-Specific Features
- Custom color palette with royal-blue and accent-gold themes
- Church-focused pages: about, services, connect, contact, give
- Component structure for: hero sections, service times, ministries, giving impact

### Styling System
- Tailwind CSS with custom church color palette
- CSS variables for theming
- shadcn/ui component styling patterns
- Custom animations (fadeInUp, accordion animations)

### Import Patterns
- Path aliases configured: `@/*` maps to root directory
- Components imported from `@/components/`
- Utils imported from `@/lib/utils`
- UI components from `@/components/ui/`

### Next.js Configuration Notes
- Build errors and ESLint errors are ignored during builds
- Images are unoptimized
- TypeScript strict mode enabled

# WSL Environment Limitations & Workarounds

## What Claude CAN Do in WSL:
- ✅ File operations (read, write, edit files)
- ✅ Code development and modifications  
- ✅ Build & compile (`npm run build`, `npm install`)
- ✅ Local git operations (`git add`, `git commit`, `git status`, `git diff`)
- ✅ Basic Linux commands within WSL
- ✅ Start development servers (though may timeout)

## What Claude CANNOT Do - Requires Separate Bash Session:
- ❌ Git push to remote repositories (`git push origin main`)
- ❌ Interactive commands requiring user input
- ❌ Network authentication (GitHub login, SSH keys, tokens)
- ❌ Long-running dev servers without timeouts
- ❌ Browser operations or interactions
- ❌ External tool installations requiring admin rights

## Commands to Run in Separate Bash Session:
```bash
# Git operations with remote repositories
git push origin main
git pull origin main

# Authentication setup
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com" 
gh auth login

# Interactive installations
npm create next-app@latest
npx create-react-app
```

## Screenshot Sharing in WSL:
- ❌ Direct upload/paste doesn't work in WSL
- ✅ Save screenshots to: `C:\Users\tabit\Downloads\`
- ✅ Reference by filename: "Check styling-issue.png in Downloads"
- ✅ Use full path: `/mnt/c/Users/tabit/Downloads/screenshot.png`

Example: "Analyze this screenshot: C:\Users\tabit\Downloads\styling-issue-2025-07-11.png"

## Workflow:
1. **Claude handles**: Development, coding, file management, local git
2. **User handles**: Remote git operations, authentication, screenshots
3. **Screenshots**: Save to Downloads, reference by filename for analysis
