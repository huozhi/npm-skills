# npm-skills

A collection of skills for AI coding agents focused on npm library setup and best practices.

## Installation

```bash
npx add-skill huozhi/npm-skills
```

## Available Skills

### npm-library-setup

Comprehensive guidance on setting up npm libraries with `package.json`, with a preference for ES Modules (ESM).

**Use when:**
- "Set up an npm package"
- "Create a new npm library"
- "Configure package.json for ESM"
- "Set up a TypeScript npm package"
- "Create a React component library"
- "Set up dual package (CJS + ESM)"

**Features:**
- ✅ ESM-first approach with `"type": "module"`
- ✅ Modern `exports` field (no deprecated `module` field)
- ✅ Bunchee for fast, zero-config bundling
- ✅ Vitest for modern testing
- ✅ TypeScript support
- ✅ React component library support
- ✅ Optional dual package (CJS + ESM) support

**Categories covered:**
- Basic package setup with ESM
- Package.json configuration
- ESM syntax and patterns
- Building and testing
- TypeScript package setup
- React component libraries
- Dual package setup (optional)
- Best practices

**Requirements:**
- Node.js >= 20 (oldest currently-maintained LTS)
- npm or compatible package manager


## Usage

Skills are automatically available once installed. The agent will use them when relevant tasks are detected.

**Examples:**

```
Set up an npm package for me
```

```
Create a TypeScript npm library with ESM
```

```
Set up a React component library
```

```
Configure package.json for dual package (CJS + ESM)
```

## Skill Structure

Each skill contains:

* `SKILL.md` - Instructions for the agent
* `references/` - Detailed guides and documentation
* `examples/` - Complete working examples (optional)

## License

MIT
