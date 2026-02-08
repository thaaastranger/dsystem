# Changelog

All notable changes to this design system will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## How to Update

When making changes to components:

1. Update the component's changelog array in its page file
2. Add an entry here in this file
3. Use these change types:
   - **Added** for new features
   - **Changed** for changes in existing functionality
   - **Deprecated** for soon-to-be removed features
   - **Removed** for now removed features
   - **Fixed** for any bug fixes
   - **Security** for vulnerability fixes

## [Unreleased]

## [1.2.0] - 2026-02-08

### Added
- Changelog tabs for Button and Input components with version history
- Comprehensive changelog tracking system
- Foundation page with all 171 design tokens
- Tab-based navigation for Foundation page (Spacing, Border Radius, Typography, Colors, Component Tokens)
- Semantic tokens and state layers in Colors tab
- Complete component token documentation showing all tokens used by each component

### Changed
- Reorganized Foundation page token tabs for better clarity
- Moved semantic tokens from Component Tokens tab to Colors tab
- Moved state layer tokens from Component Tokens tab to Colors tab
- Expanded Component Tokens tab to show ALL tokens (spacing, border radius, typography, colors) per component

## [1.1.0] - 2026-02-08

### Added
- Specs tab with comprehensive token documentation for Button component
- Specs tab with comprehensive token documentation for Input component
- Token references in Component Tokens tab of Foundation page
- Navigation support for sidebar and breadcrumb
- Foundation page integration with clickable sidebar navigation

### Changed
- Updated all icons from emoji to Lucide React icons
- Improved sidebar navigation with active states and click handlers

## [1.0.0] - 2026-02-08

### Added
- Initial Button component with three variants (Filled, Outlined, Ghost)
- Initial Input component with label, helper text, and icons
- Panel component for application layout
- ComponentCard for components gallery
- Token-driven design system with 171 tokens
- Components gallery page as main landing page
- Complete token system (spacing, border radius, typography, colors, semantic, component-specific)
- Icon support for Button (left and right positions)
- Icon support for Input (leading and trailing positions)
- Multiple input types (text, email, password, number, search)
- Error states with custom messages
- Disabled states for all components
- Hover, active, and focus states
- Vercel deployment configuration

---

## Component-Specific Changes

### Button Component

#### v1.2.0 - 2026-02-08
- Added: Specs tab with token documentation
- Added: Token references in Foundation page
- Changed: Icons updated to Lucide React

#### v1.1.0 - 2026-02-08
- Added: Navigation support
- Added: Foundation page integration

#### v1.0.0 - 2026-02-08
- Added: Initial implementation with Filled, Outlined, and Ghost variants
- Added: Icon support (left/right positions)
- Added: Disabled state
- Added: Token-driven styling

### Input Component

#### v1.1.0 - 2026-02-08
- Added: Specs tab with token documentation
- Added: Token references in Foundation page

#### v1.0.0 - 2026-02-08
- Added: Initial implementation
- Added: Label and helper text
- Added: Leading and trailing icons
- Added: Error state with custom messages
- Added: Disabled state
- Added: Multiple input types
- Added: Token-driven styling
