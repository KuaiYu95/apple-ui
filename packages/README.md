# Packages layout (planned)

This directory is reserved for a future monorepo-style split:

- `ui`: core React components (current contents from `src/components`, `src/hooks`, `src/theme`)
- `system`: system-level pages and shells (current contents from `src/system`)
- `tokens`: design tokens (current contents from `src/theme/tokens.ts` and CSS variables)
- `utils`: shared utilities and hooks

For now, the published package still builds from `src/index.ts`. The folders
here act as a migration target and documentation of the intended structure.

