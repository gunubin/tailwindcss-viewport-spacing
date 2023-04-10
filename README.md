# Tailwind CSS Viewport Spacing

Tailwind CSS Viewport Spacing is a plugin that allows you to adjust utility classes based on viewport width.

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
module.exports = {
  // ...
  plugins: [
    // ...
    viewportSpacing({
      phone: 375, // This configuration means that when the viewport width is 375px, the multiplier will be 100% 
      desktop: 1280,
    }),
  ],
};
```

3. Use the generated utility classes in your HTML:
```html
<div class="p-vw-phone[25]">Content with padding equal to 100px when the viewport width is 375px</div>
```
In this example, the p-vw-phone-[100] class will apply a padding of 100px when the viewport width is 375px.

## License
MIT License

