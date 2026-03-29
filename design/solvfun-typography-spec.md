# Solvfun Typography Spec

## 1. Typeface System

### Primary Roles
- `Space Grotesk`
  Use for headings, emphasized navigation labels, section titles, token names, hero titles, and other brand-forward text.
- `Satoshi`
  Use for UI utility text and all non-price numbers, including time, volume, market cap, percentage change, filter chips, metadata, table labels, tab support text, and bottom navigation labels.
- `Manrope`
  Use for all token price values only.

### Why This Works
- `Space Grotesk` gives Solvfun a sharper, more native-crypto identity.
- `Satoshi` keeps dense trading UI readable and stable.
- `Manrope` makes price values feel clean and premium, especially in market lists and detail screens.

### Recommended Adjustment
- Keep `Space Grotesk` out of long paragraphs and dense metadata rows.
- Keep `Manrope` restricted to actual price values only.
- If price rendering includes micro notation like `0.0₅34123`, use `Manrope` for the full price string and handle the subscript count with careful baseline treatment.

## 2. Typography Tokens

### Font Families
- `font-brand`: `"Space Grotesk", "SF Pro Display", "Helvetica Neue", sans-serif`
- `font-ui`: `"Satoshi", "SF Pro Text", "Helvetica Neue", sans-serif`
- `font-price`: `"Manrope", "SF Pro Display", "Helvetica Neue", sans-serif`

### Weights
- `Space Grotesk`
  Use `Semibold 600` for most titles and token names, `Bold 700` for hero headlines only.
- `Satoshi`
  Use `Regular 400` for body/support text, `Medium 500` for utility numbers and chips, `Bold 700` only when emphasis is needed in compact UI.
- `Manrope`
  Use `Medium 500` or `Semibold 600` for most price values, `Bold 700` only for key portfolio numbers or hero price callouts.

### Letter Spacing
- Headings in `Space Grotesk`: `0` to `-1%`
- Utility text in `Satoshi`: `0` to `+1%`
- Prices in `Manrope`: `0` to `-1%`

## 3. Web Type Scale

### Display / Heading
- `Display XL`: 48/56, Space Grotesk 700
- `Display L`: 40/48, Space Grotesk 600
- `H1`: 32/40, Space Grotesk 600
- `H2`: 28/36, Space Grotesk 600
- `H3`: 24/32, Space Grotesk 600
- `H4`: 20/28, Space Grotesk 600

### UI / Content
- `Body L`: 18/28, Satoshi 400
- `Body M`: 16/24, Satoshi 400
- `Body S`: 14/20, Satoshi 400
- `Caption`: 12/16, Satoshi 400
- `Label`: 12/16, Satoshi 500

### Numbers
- `Price XL`: 40/44, Manrope 600
- `Price L`: 32/36, Manrope 600
- `Price M`: 24/28, Manrope 500
- `Price S`: 18/24, Manrope 500
- `Utility Number L`: 18/24, Satoshi 500
- `Utility Number M`: 16/20, Satoshi 500
- `Utility Number S`: 14/18, Satoshi 500

## 4. App Type Scale

### Headings
- `Hero`: 34/40, Space Grotesk 700
- `Screen Title`: 28/34, Space Grotesk 600
- `Section Title`: 22/28, Space Grotesk 600
- `List Title / Token Name`: 18/24, Space Grotesk 600

### UI Text
- `Primary Body`: 17/24, Satoshi 400
- `Secondary Body`: 15/22, Satoshi 400
- `Meta / Label`: 13/18, Satoshi 500
- `Tiny Meta`: 11/14, Satoshi 500

### Numbers
- `Portfolio Total`: 34/38, Manrope 600 if it is a price-like monetary total
- `Token Price Large`: 24/28, Manrope 600
- `Token Price Default`: 18/22, Manrope 500
- `Change %`: 14/18, Satoshi 500
- `Time / Volume / MCAP`: 12/16 or 13/18, Satoshi 500

## 5. Role Rules

### Use Space Grotesk For
- Hero headlines
- Screen titles
- Section headers
- Active major tabs
- Token names in lists
- Empty-state titles

### Use Satoshi For
- Search placeholder
- Filter chips
- Table labels
- Time labels
- Volume and market cap
- Percentage change
- Metadata
- Button secondary text
- Bottom navigation labels
- Form labels
- Tooltip and helper text

### Use Manrope For
- Current token price
- Portfolio balance when treated as a money figure
- Chart headline price
- Price in watchlists / market tables / order panels

## 6. Numeric Rules

### Non-Price Numbers
- Use `Satoshi`
- Enable lining numerals
- Prefer tabular alignment in dense tables and list rows

### Price Numbers
- Use `Manrope`
- Prefer tabular alignment in watchlists, positions, and tables
- Keep price decimals tight but readable
- For long leading-zero prices, use micro notation such as `0.0₅34123`

### Micro Price Treatment
- Preferred font: `Manrope`
- The subscript count should be visually smaller, aligned consistently, and not break the baseline rhythm
- In implementation, do not rely only on random Unicode fallback behavior
- Best practice:
  render the subscript count as a dedicated styled span or attributed segment

## 7. Web Implementation Guidance

### CSS Variables
```css
:root {
  --font-brand: "Space Grotesk", "SF Pro Display", "Helvetica Neue", sans-serif;
  --font-ui: "Satoshi", "SF Pro Text", "Helvetica Neue", sans-serif;
  --font-price: "Manrope", "SF Pro Display", "Helvetica Neue", sans-serif;
}
```

### Usage
```css
.type-title {
  font-family: var(--font-brand);
  font-weight: 600;
}

.type-ui {
  font-family: var(--font-ui);
}

.type-price {
  font-family: var(--font-price);
  font-weight: 600;
  font-variant-numeric: lining-nums tabular-nums;
}

.type-utility-num {
  font-family: var(--font-ui);
  font-weight: 500;
  font-variant-numeric: lining-nums tabular-nums;
}

.price-subscript {
  font-family: var(--font-price);
  font-size: 0.58em;
  position: relative;
  top: 0.24em;
}
```

## 8. App Implementation Guidance

### iOS
- Register all three fonts in the app bundle.
- Map them to semantic text styles rather than using raw sizes everywhere.
- Use `Manrope` for price labels and `Satoshi` for utility numerics.
- For micro prices, use attributed text with a smaller font size plus baseline offset.

### Android
- Define three font families in XML or Compose typography.
- Create semantic tokens for heading, utility, and price roles.
- For micro prices, use `AnnotatedString` with a reduced font size and `BaselineShift`.

### Shared App Rule
- Do not mix `Space Grotesk` and `Manrope` in the same compact numeric row.
- In data-dense rows, the safest pairing is:
  `token name = Space Grotesk`, `utility metadata = Satoshi`, `price = Manrope`

## 9. Figma Style Set

- `Brand / Display XL / Space 700 / 48`
- `Brand / H1 / Space 600 / 32`
- `Brand / Section / Space 600 / 22`
- `Brand / Token Name / Space 600 / 18`
- `UI / Body / Satoshi 400 / 16`
- `UI / Meta / Satoshi 500 / 13`
- `UI / Utility Number / Satoshi 500 / 14`
- `Price / XL / Manrope 600 / 40`
- `Price / L / Manrope 600 / 24`
- `Price / Default / Manrope 500 / 18`
- `Price / Micro Subscript / Manrope 500 / 58% size`

## 10. Final Recommendation

This system is strong as-is and is suitable for both web and app.

Best version of the system:
- Brand and headings: `Space Grotesk`
- Utility UI and all non-price numbers: `Satoshi`
- Prices only: `Manrope`

Recommended constraint:
- Use `Space Grotesk` selectively, not everywhere.
- Let `Satoshi` carry the workload of dense UI.
- Let `Manrope` own the monetary layer so price scanning feels intentional.
