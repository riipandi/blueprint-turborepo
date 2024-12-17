# ⚡️ Turborepo Blueprint

This is a bare minimum monorepo project template built on [Turborepo][turborepo], pre-configured 
with [Vite][vite], [React][react], [Tailwind CSS][tailwind], and [TypeScript][typescript].

## Quick Start

Run the following command:

```sh
npx tiged riipandi/blueprint-turborepo my-new-project
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite][vite] ts app
- `web`: another vanilla [vite][vite] ts app
- `@repo/ui-react`: a stub component & utility library shared by both `web` and `docs` applications
- `@repo/config-typescript`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript][typescript].

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript][typescript] for static type checking
- [Biome][biome] for code formatting and linting

<!-- link reference definition -->
[biome]: https://biomejs.dev
[react]: https://react.dev
[tailwind]: https://tailwindcss.com
[turborepo]: https://turbo.build/repo/docs
[typescript]: https://www.typescriptlang.org/
[vite]: https://vite.dev
