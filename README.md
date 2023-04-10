# Tailwind CSS Viewport Spacing

Tailwind CSS Viewport Spacing is a plugin that allows you to adjust the following utility classes based on viewport width (vw) and viewport height (vh):


- Padding (e.g., p, px, py, pt, pr, pb, pl)
- Margin (e.g., m, mx, my, mt, mr, mb, ml)
- Position (e.g., top, right, bottom, left)
- Width (e.g., w)
- Height (e.g., h)
- Max-width (e.g., max-w)
- Max-height (e.g., max-h)
- Min-width (e.g., min-w)
- Min-height (e.g., min-h)
- Font-size (e.g., text)
- Inset-inline-start (e.g., start)
- Inset-inline-end (e.g., end)
- Inset (e.g., inset)

## Installation

Install the package using npm:

```bash
npm install tailwindcss-viewport-spacing
```
or using yarn:

```bash
yarn add tailwindcss-viewport-spacing
```

## Usage
1. Import the plugin in your tailwind.config.js file:

```javascript
const viewportSpacing = require('tailwindcss-viewport-spacing');
```

2. Add the plugin to your tailwind.config.js plugins section and configure the options:
 
```javascript
viewportSpacing({
  vw: {
    phone: 375, // This configuration means that when the viewport width is 375px, the multiplier will be 100%
    desktop: 1280,
  },
  vh: {
    phone: 667, // This configuration means that when the viewport height is 667px, the multiplier will be 100%
  },
}),
```

3. Use the generated utility classes in your HTML:
```html
<div class="p-vw-phone-100">Content with padding equal to 100px when the viewport width is 375px</div>
<div class="h-vh-phone-100">Content with height equal to 100px when the viewport height is 667px</div>
```
In this example, the p-vw-phone-100 class will apply a padding of 100px when the viewport width is 375px, and the h-vh-phone-100 class will apply a height of 100px when the viewport height is 667px.

## Supported CSS Properties
- Padding: Apply viewport-based padding to elements.
- Margin: Apply viewport-based margin to elements.
- Position: Adjust the position of elements based on viewport width.
- Width: Control the width of elements based on viewport width.
- Height: Control the height of elements based on viewport width.
- Max-width: Set the maximum width of elements based on viewport width.
- Max-height: Set the maximum height of elements based on viewport width.
- Min-width: Set the minimum width of elements based on viewport width.
- Min-height: Set the minimum height of elements based on viewport width.
- Font-size: Adjust the font size of text elements based on viewport width.
- Inset-inline-start: Control the start inset of positioned elements based on viewport width.
- Inset-inline-end: Control the end inset of positioned elements based on viewport width.
- Inset: Control the inset of positioned elements based on viewport width.

## License
MIT License

