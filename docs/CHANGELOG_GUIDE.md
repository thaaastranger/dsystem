# Changelog Maintenance Guide

This guide explains how to maintain changelogs for components in the design system.

## Overview

We maintain changelogs in two places:
1. **Component Pages** - In-app changelogs visible to users in the Changelog tab
2. **CHANGELOG.md** - Root-level file tracking all changes across the project

## When to Update Changelogs

Update changelogs whenever you:
- Add a new component or feature
- Change existing functionality
- Fix bugs
- Update styling or tokens
- Deprecate or remove features

## Change Types

Use these standardized types:

| Type | Color | Use Case | Example |
|------|-------|----------|---------|
| **Added** | Green | New features, components, or props | "Added error state to Input component" |
| **Changed** | Blue | Updates to existing functionality | "Changed button padding from 8px to 12px" |
| **Fixed** | Yellow | Bug fixes | "Fixed focus outline on disabled buttons" |
| **Removed** | Red | Removed features or deprecations | "Removed deprecated size prop" |
| **Security** | Red | Security fixes | "Fixed XSS vulnerability in Input component" |

## How to Add Component Changelog Entries

### Step 1: Update the Component Page

Find the changelog array in the component's page file and add a new entry:

**Example for Button component** (`src/App.tsx`):

```typescript
{
  date: '2026-02-09',
  version: 'v1.3.0',
  changes: [
    { type: 'Added', description: 'New size prop (small, medium, large)' },
    { type: 'Changed', description: 'Updated hover state transition timing' },
    { type: 'Fixed', description: 'Fixed icon alignment in RTL mode' },
  ],
}
```

**Example for Input component** (`src/pages/InputDetailPage.tsx`):

```typescript
{
  date: '2026-02-09',
  version: 'v1.2.0',
  changes: [
    { type: 'Added', description: 'Character counter support' },
    { type: 'Changed', description: 'Improved error message styling' },
  ],
}
```

### Step 2: Update CHANGELOG.md

Add entries to the root `CHANGELOG.md` file:

```markdown
## [1.3.0] - 2026-02-09

### Added
- New size prop for Button component (small, medium, large)
- Character counter support for Input component

### Changed
- Updated Button hover state transition timing
- Improved Input error message styling

### Fixed
- Fixed Button icon alignment in RTL mode
```

## Versioning Guidelines

We follow [Semantic Versioning](https://semver.org/):

- **Major (x.0.0)**: Breaking changes
  - Removing props
  - Changing prop types
  - Major API changes

- **Minor (1.x.0)**: New features (backwards compatible)
  - Adding new props
  - Adding new components
  - New functionality

- **Patch (1.1.x)**: Bug fixes (backwards compatible)
  - Fixing bugs
  - Minor styling adjustments
  - Documentation updates

## Date Format

Always use ISO 8601 format: `YYYY-MM-DD`

Example: `2026-02-08`

## Tips

1. **Be Specific**: Instead of "Updated styles", write "Updated button padding from 8px to 12px"
2. **User-Focused**: Write for developers using the component, not internal implementation details
3. **Group Related Changes**: Multiple related changes can be one entry
4. **Keep It Concise**: One line per change, clear and actionable

## Commit Messages

When committing changelog updates, use this format:

```bash
git commit -m "docs: Update changelog for Button v1.3.0

- Added size prop support
- Changed hover transition timing
- Fixed RTL icon alignment"
```

## Example Workflow

1. Make changes to a component
2. Update component's changelog array with new entry
3. Update root CHANGELOG.md
4. Build and test
5. Commit with descriptive message
6. Push changes

## Questions?

If you're unsure about versioning or how to describe a change, refer to:
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- Existing changelog entries for examples
