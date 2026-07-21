---
name: Velocore High-Performance System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#181c1d'
  surface-container: '#1c2021'
  surface-container-high: '#272b2c'
  surface-container-highest: '#313536'
  on-surface: '#e0e3e4'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e4'
  inverse-on-surface: '#2d3132'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#dae2fd'
  on-primary: '#283044'
  primary-container: '#bec6e0'
  on-primary-container: '#4a5268'
  inverse-primary: '#565e74'
  secondary: '#ffffff'
  on-secondary: '#2b3400'
  secondary-container: '#cdf200'
  on-secondary-container: '#5a6c00'
  tertiary: '#dee3e6'
  on-tertiary: '#2b3133'
  tertiary-container: '#c1c7ca'
  on-tertiary-container: '#4d5355'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3e465c'
  secondary-fixed: '#cdf200'
  secondary-fixed-dim: '#b3d400'
  on-secondary-fixed: '#181e00'
  on-secondary-fixed-variant: '#3f4c00'
  tertiary-fixed: '#dee3e6'
  tertiary-fixed-dim: '#c2c7ca'
  on-tertiary-fixed: '#171d1e'
  on-tertiary-fixed-variant: '#42484a'
  background: '#101415'
  on-background: '#e0e3e4'
  surface-variant: '#313536'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-mobile: 16px
  container-margin-desktop: 48px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system is engineered for a premium, high-performance athletic and fintech-hybrid environment. It targets a demographic that values precision, speed, and reliability. The aesthetic is "Technical Luxury"—combining the raw energy of sports performance with the polished sophistication of modern SaaS.

The visual direction utilizes a **Corporate Modern** foundation infused with **High-Contrast** accents. By leveraging a deep, near-black environment punctuated by a vibrant "Lime" accent, the UI evokes an emotional response of urgency and elite capability. The interface remains grounded through structured layouts and professional typography, ensuring the user feels in control while being motivated by the energetic color pops.

## Colors

The palette is anchored in a dark, immersive environment to reduce eye strain and emphasize premium quality.

- **Surface (#101415):** The foundation. A deep, desaturated charcoal that provides a high-contrast base for content.
- **Primary (#bec6e0):** A sophisticated Lavender Blue used for structural elements, secondary actions, and iconography. It adds a layer of "trust" and "calm" to the interface.
- **Accent/CTA (#cdf200):** A high-visibility "Lime" green. This is reserved strictly for primary calls to action, progress indicators, and critical highlights to draw immediate attention.
- **Secondary Surfaces (#23292b):** Used for cards and input fields to create subtle depth against the main background.

## Typography

This design system employs a dual-typeface strategy to balance impact with legibility.

- **Montserrat (Headlines):** Used in Bold and Semi-Bold weights. Its geometric structure provides the "sporty" and "energetic" feel required for high-level information hierarchy.
- **Inter (Body & UI):** Chosen for its exceptional readability on screens. It handles data-heavy layouts and small labels with a neutral, systematic precision.

For mobile devices, large headlines scale down to ensure content remains above the fold without sacrificing the bold brand character. All labels use slightly increased letter-spacing to maintain clarity against the dark background.

## Layout & Spacing

The system follows a **Mobile-First, Fluid Grid** philosophy based on an 8px square grid. 

- **Mobile:** A 4-column layout with 16px side margins. Elements are primarily stacked to favor vertical scrolling and thumb-reach.
- **Desktop:** A 12-column grid with a maximum content width of 1280px. 
- **Rhythm:** Generous white space (or "dark space") is prioritized to prevent the UI from feeling cluttered, reinforcing the premium feel. Use `stack-lg` (32px) for separating major sections and `stack-md` (16px) for internal component spacing.

## Elevation & Depth

In this dark-mode environment, depth is communicated through **Tonal Layers** rather than heavy shadows.

- **Level 0 (Base):** `#101415` - The primary canvas.
- **Level 1 (Cards/Surfaces):** `#1d2122` - Used for primary content containers. Features a subtle 1px border of `#ffffff10` (Low-contrast outline) to define edges.
- **Level 2 (Overlays/Popovers):** `#2b3032` - Used for menus and modals. These utilize **Ambient Shadows**: a soft, deep-black shadow with a 20px blur and 0.4 opacity to lift them off the Level 1 surface.

Interactive elements should use a subtle glow effect (box-shadow with the primary or accent color at 10% opacity) when hovered to simulate active energy.

## Shapes

The design system utilizes **Rounded** geometry (8px / 0.5rem base) to soften the aggressive nature of the high-contrast color palette. 

- **Standard Elements:** 8px radius (Buttons, Input Fields, Small Cards).
- **Large Containers:** 16px radius (Hero sections, Dashboard widgets).
- **Interactive Pills:** Fully rounded (Chips, Tags).

This specific radius balances the "technical" precision of sharp corners with the "friendly/reliable" nature of rounded forms.

## Components

### Buttons
- **Primary:** Background: `#cdf200` (Lime), Text: `#101415`. Bold Montserrat. On tap/hover: scale(0.98) and a subtle lime outer glow.
- **Secondary:** Border: 2px `#bec6e0`, Text: `#bec6e0`. Transparent background.
- **Tertiary:** Text: `#e0e3e5`. No border or background unless hovered.

### Cards
Cards use the Level 1 Surface (`#1d2122`) with an 8px or 16px radius. Padding should be generous (24px). Micro-interactions: Cards should lift slightly (-4px Y-axis) on hover with an increased shadow spread.

### Input Fields
- **Default:** Background: `#23292b`, Border: 1px transparent, Text: `#e0e3e5`.
- **Focus:** Border: 1px `#cdf200`. The label should float or be clearly defined in `label-sm`.

### Lists & Navigation
List items should be separated by a subtle `#ffffff05` divider. Navigation items use Inter `label-md` with 12px vertical padding for touch-friendly mobile targets.

### Selection Controls
- **Checkboxes/Radios:** Use the Primary Lavender (`#bec6e0`) for the "Off" state and Accent Lime (`#cdf200`) for the "On" state.
- **Chips:** Small, pill-shaped containers with `#bec6e020` background and `#bec6e0` text for categorization.