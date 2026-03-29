# Color Specification

Last updated: 2026-03-29

## Design Direction

This product uses a dark-first visual system for a Solana meme trading app. The brand green is used for identity and primary emphasis, but it is intentionally separated from market semantic colors so the interface does not overload a single color with multiple meanings.

Core principles:
- Brand green is for brand recognition, primary CTA, selected states, and key accents.
- Market up/down colors are semantic colors and should not reuse the brand green directly.
- Dark backgrounds should feel deep and calm, not pure black and not neon-heavy.
- The system should work consistently across app and web.

## Core Palette

### Brand
- `brand.primary`: `#7CFF5B`
- `brand.hover`: `#92FF73`
- `brand.pressed`: `#69E94B`
- `brand.soft`: `#1C2A1A`

Usage:
- App icon foreground
- Logo
- Primary buttons
- Active tabs
- Selected filters
- Key highlights

### Background
- `bg.base`: `#0E1211`
- `bg.elevated`: `#151A19`
- `bg.card`: `#1A201E`
- `bg.overlay`: `#0A0D0C`

Usage:
- `bg.base` for app/page background
- `bg.elevated` for top bars, sheets, side panels
- `bg.card` for cards, modules, widgets
- `bg.overlay` for modal backdrops and deep layers

### Border And Surface Support
- `border.subtle`: `#202725`
- `border.default`: `#27302D`
- `border.strong`: `#34403C`
- `divider`: `#1B2220`

### Text
- `text.primary`: `#F3F6F4`
- `text.secondary`: `#A6B2AD`
- `text.tertiary`: `#6F7C76`
- `text.disabled`: `#4C5753`
- `text.onBrand`: `#081006`

## Semantic Colors

### Market Semantics
These are intentionally separate from the brand green.

- `market.up`: `#22C55E`
- `market.up.soft`: `#123321`
- `market.down`: `#FF5C7A`
- `market.down.soft`: `#34141D`

Usage:
- PnL positive/negative
- Candle up/down
- Price change percentages
- Gain/loss badges

### Status Semantics
- `status.warning`: `#F6C445`
- `status.warning.soft`: `#3A2C11`
- `status.info`: `#5AA7FF`
- `status.info.soft`: `#12263E`
- `status.success`: `#18C37E`
- `status.success.soft`: `#103125`

Usage:
- Warning for risky actions, slippage alerts, irreversible flows
- Info for neutral system state and education
- Success for confirmations, completed actions, successful submissions

## Why Brand Green And Market Green Are Split

`#7CFF5B` has a strong yellow bias and works very well as a brand color. That same energy makes it less ideal as the universal market-up color because it can blur the distinction between brand emphasis and trading meaning.

Decision:
- Keep `#7CFF5B` as the main brand color.
- Use `#22C55E` or `#18C37E` for positive market semantics.
- Use `#F6C445` as a secondary hot accent for warnings, highlights, or speculative moments, not as the main brand replacement.

## Recommended Usage Rules

### Use Brand Green For
- Primary CTA
- Selected navigation states
- Brand moments and onboarding highlights
- Core action emphasis
- Logo and identity elements

### Do Not Use Brand Green For
- Profit/loss indicators by default
- Candle chart rise state
- Every interactive element on a page
- Small secondary metadata

### Use Yellow Accent For
- Hot pairs
- Trending tags
- Risk indicators
- Attention moments that are not errors

Recommended yellow accent:
- `accent.heat`: `#D9FF3D`
- `accent.heat.soft`: `#30390F`

This gives you a slightly more speculative, meme-friendly energy without turning the whole product into a neon wall.

## Suggested Ratios

For a typical dark screen:
- 70% to 80% neutral dark surfaces
- 10% to 15% text and UI structure
- 5% to 10% brand green accents
- 3% to 8% semantic colors depending on market data density

If the screen starts looking "too green," the issue is usually not the palette. It is usually overuse of the brand accent.

## Starter Token Set

### Design Tokens
```text
bg/base         #0E1211
bg/elevated     #151A19
bg/card         #1A201E
border/default  #27302D
text/primary    #F3F6F4
text/secondary  #A6B2AD
brand/primary   #7CFF5B
brand/hover     #92FF73
brand/pressed   #69E94B
market/up       #22C55E
market/down     #FF5C7A
warning         #F6C445
info            #5AA7FF
accent/heat     #D9FF3D
```

### CSS Variables
```css
:root {
  --bg-base: #0E1211;
  --bg-elevated: #151A19;
  --bg-card: #1A201E;
  --bg-overlay: #0A0D0C;

  --border-subtle: #202725;
  --border-default: #27302D;
  --border-strong: #34403C;

  --text-primary: #F3F6F4;
  --text-secondary: #A6B2AD;
  --text-tertiary: #6F7C76;
  --text-disabled: #4C5753;
  --text-on-brand: #081006;

  --brand-primary: #7CFF5B;
  --brand-hover: #92FF73;
  --brand-pressed: #69E94B;
  --brand-soft: #1C2A1A;

  --market-up: #22C55E;
  --market-up-soft: #123321;
  --market-down: #FF5C7A;
  --market-down-soft: #34141D;

  --status-warning: #F6C445;
  --status-warning-soft: #3A2C11;
  --status-info: #5AA7FF;
  --status-info-soft: #12263E;
  --status-success: #18C37E;
  --status-success-soft: #103125;

  --accent-heat: #D9FF3D;
  --accent-heat-soft: #30390F;
}
```

## Final Recommendation

If you want a single practical rule to carry into both app and web:
- Use `#7CFF5B` as the brand and primary-action color.
- Use `#22C55E` as the market-up color.
- Use `#F6C445` or `#D9FF3D` sparingly for hot attention moments.
- Build everything on `#0E1211` as the base dark background.

This gives you a system that feels branded, readable, and suitable for a trading product without semantic color conflicts.
