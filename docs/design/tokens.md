```markdown
# Design Tokens (Draft Freeze)

Dieses Dokument definiert den Entwurf der Design-Tokens für die Tech Hilfe Pro NRW Website. Die Tokens sind so konzipiert, dass sie mit Tailwind CSS v4 kompatibel sind und eine konsistente visuelle Sprache über die gesamte Anwendung hinweg gewährleisten.

## 1. Typografie-Skala

Die Typografie-Skala verwendet eine fließende Skalierung mit `clamp()` für responsive Schriftgrößen, um eine optimale Lesbarkeit auf allen Geräten zu gewährleisten. Die Basis-Schriftgröße ist 16px.

| Token-Name (Tailwind) | Semantischer Alias | Clamp-Wert (Beispiel) | Einsatzbeispiel | A11y-Hinweis (Kontrast) |
| :-------------------- | :----------------- | :-------------------- | :-------------- | :---------------------- |
| `text-xs`             | `--font-size-xs`   | `clamp(0.75rem, 0.6rem + 0.2vw, 0.875rem)` | Kleine Texte, Labels | Text ≥ 4.5:1            |
| `text-sm`             | `--font-size-sm`   | `clamp(0.875rem, 0.7rem + 0.3vw, 1rem)`   | Sekundäre Texte, Beschreibungen | Text ≥ 4.5:1            |
| `text-base`           | `--font-size-base` | `clamp(1rem, 0.8rem + 0.4vw, 1.125rem)` | Standard-Text | Text ≥ 4.5:1            |
| `text-lg`             | `--font-size-lg`   | `clamp(1.125rem, 0.9rem + 0.5vw, 1.25rem)` | Hervorgehobene Texte | Text ≥ 4.5:1            |
| `text-xl`             | `--font-size-xl`   | `clamp(1.25rem, 1rem + 0.6vw, 1.5rem)`    | Subheadings | Text ≥ 4.5:1            |
| `text-2xl`            | `--font-size-2xl`  | `clamp(1.5rem, 1.2rem + 0.8vw, 1.875rem)` | H3 | Text ≥ 4.5:1            |
| `text-3xl`            | `--font-size-3xl`  | `clamp(1.875rem, 1.5rem + 1vw, 2.25rem)`  | H2 | Text ≥ 4.5:1            |
| `text-4xl`            | `--font-size-4xl`  | `clamp(2.25rem, 1.8rem + 1.2vw, 2.8125rem)` | H1 | Text ≥ 4.5:1            |

## 2. Spacing-Scale

Die Spacing-Scale basiert auf einem 4/8-Raster, um vertikale und horizontale Abstände konsistent zu halten. Alle Werte sind in `rem` angegeben.

| Token-Name (Tailwind) | Semantischer Alias | Wert (rem) | Einsatzbeispiel |
| :-------------------- | :----------------- | :--------- | :-------------- |
| `space-px`            | `--spacing-px`     | `1px`      | Sehr feine Abstände |
| `space-0.5`           | `--spacing-xs`     | `0.125rem` (2px) | Kleine Inline-Abstände |
| `space-1`             | `--spacing-sm`     | `0.25rem` (4px) | Kleine Abstände, Icons | 
| `space-2`             | `--spacing-md`     | `0.5rem` (8px) | Standard-Elementabstand |
| `space-3`             | `--spacing-lg`     | `0.75rem` (12px) | Größere Abstände |
| `space-4`             | `--spacing-xl`     | `1rem` (16px) | Sektionen, Blöcke |
| `space-6`             | `--spacing-2xl`    | `1.5rem` (24px) | Große Sektionen |
| `space-8`             | `--spacing-3xl`    | `2rem` (32px) | Vertikale Sektionstrennung |
| `space-10`            | `--spacing-4xl`    | `2.5rem` (40px) | Große vertikale Abstände |
| `space-12`            | `--spacing-5xl`    | `3rem` (48px) | Sehr große Abstände |

## 3. Container-Breiten

Die maximalen Container-Breiten sind für eine optimale Lesbarkeit und Layout-Stabilität definiert.

| Token-Name (Tailwind) | Semantischer Alias | Wert (px) | Einsatzbeispiel |
| :-------------------- | :----------------- | :-------- | :-------------- |
| `max-w-xs`            | `--container-xs`   | `320px`   | Mobile kleine Container |
| `max-w-sm`            | `--container-sm`   | `640px`   | Mobile große Container |
| `max-w-md`            | `--container-md`   | `768px`   | Tablet |
| `max-w-lg`            | `--container-lg`   | `1024px`  | Desktop klein |
| `max-w-xl`            | `--container-xl`   | `1280px`  | Desktop mittel |
| `max-w-2xl`           | `--container-2xl`  | `1536px`  | Desktop groß |

## 4. Radius (Border-Radius)

Definierte Radien für abgerundete Ecken, um eine konsistente Ästhetik zu gewährleisten.

| Token-Name (Tailwind) | Semantischer Alias | Wert (rem) | Einsatzbeispiel |
| :-------------------- | :----------------- | :--------- | :-------------- |
| `rounded-none`        | `--radius-none`    | `0`        | Scharfe Ecken |
| `rounded-sm`          | `--radius-xs`      | `0.125rem` | Kleine Elemente |
| `rounded-md`          | `--radius-sm`      | `0.25rem`  | Standard-Buttons, Cards |
| `rounded-lg`          | `--radius-md`      | `0.5rem`   | Größere Cards, Container |
| `rounded-xl`          | `--radius-lg`      | `0.75rem`  | Große Container |
| `rounded-full`        | `--radius-full`    | `9999px`   | Pillen-Form, Avatare |

## 5. Schatten (Box-Shadow)

Eine einfache Schatten-Skala für Tiefe und Hierarchie.

| Token-Name (Tailwind) | Semantischer Alias | CSS-Wert (Beispiel) | Einsatzbeispiel | A11y-Hinweis |
| :-------------------- | :----------------- | :------------------ | :-------------- | :----------- |
| `shadow-sm`           | `--shadow-1`       | `0 1px 2px rgba(0,0,0,0.05)` | Kleine Elemente | UI ≥ 3:1 (wenn Schatten als Trennung dient) |
| `shadow-md`           | `--shadow-2`       | `0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)` | Cards, Modals | UI ≥ 3:1 |

## 6. Akzentfarbe

Es wird eine einzelne Akzentfarbe definiert, die für interaktive Elemente, Hervorhebungen und primäre CTAs verwendet wird. Graustufen werden für neutrale UI-Elemente verwendet.

| Token-Name (Tailwind) | Semantischer Alias | Hex-Wert (Beispiel) | Einsatzbeispiel | A11y-Hinweis (Kontrast) |
| :-------------------- | :----------------- | :------------------ | :-------------- | :---------------------- |
| `primary-500`         | `--color-accent`   | `#007bff` (Blau)    | Buttons, Links, Icons | Text auf Akzent ≥ 4.5:1, UI auf Akzent ≥ 3:1 |

## 7. Barrierefreiheit (A11y) & Performance-Hinweise

*   **Kontraste**: Alle Textfarben müssen einen Kontrast von mindestens 4.5:1 zu ihrer Hintergrundfarbe aufweisen (WCAG AA). UI-Elemente (z.B. Icons, Buttons ohne Text) müssen einen Kontrast von mindestens 3:1 haben.
*   **`prefers-reduced-motion`**: Animationen und Übergänge sollten die `prefers-reduced-motion`-Media-Query berücksichtigen. Für Benutzer, die reduzierte Bewegung bevorzugen, sollten Animationen deaktiviert oder auf ein Minimum reduziert werden.
*   **Performance (LQIP/Aspect Ratio)**: Bilder sollten Low-Quality Image Placeholders (LQIP) verwenden und ihr Seitenverhältnis im Markup definieren, um Layout Shifts zu vermeiden. Lazy Loading für nicht-kritische Bilder ist Standard.

## Deliverables

Dieses Dokument dient als Spezifikation für die Design-Tokens und wird als Referenz für die UI-Entwicklung verwendet.

```

