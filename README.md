# Vue TypeScript Template

A modern, feature-rich Vue 3 template with TypeScript integration, built with best practices and developer experience in mind.

## Features

### Core Features

- Vue 3 with Composition API
- TypeScript for type safety
- Pinia for state management
- Vue Router for navigation
- Nuxt UI components

### Development Tools

- Vite for fast development
- ESLint + Prettier configuration
- Vitest for unit testing
- Cypress for E2E testing
- GitHub Actions CI/CD

### UI Features

- TailwindCSS for styling
- Dark mode support
- Responsive design
- Custom components
- Icon sets integration

### Performance

- Code splitting
- Tree shaking
- Asset optimization
- SSR ready
- PWA support

## Quick Start

1. Click "Use this template" button above or clone the repository:

```bash
git clone https://github.com/AbdulghaniKM/vue-ts-template.git my-project
cd my-project
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Project Structure

```
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Shared components
│   ├── layout/         # Layout components
│   ├── pages/          # Page components
│   ├── router/         # Vue Router configuration
│   ├── views/          # Views
│   │   └── [view]/     # a certian view
│   │       ├── components/    # view components
│   │       ├── stores/       # view state management
│   │       └── services/     # view services
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry point
│   └── style.css       # Global styles
├── public/             # Public static assets
├── .vscode/           # VS Code configuration
├── .github/           # GitHub configuration
├── components.d.ts    # Components type declarations
├── auto-imports.d.ts  # Auto-imports type declarations
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── tsconfig.node.json # Node TypeScript configuration
└── package.json       # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This template is open-sourced software licensed under the MIT license.
