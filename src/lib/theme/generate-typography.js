import fs from 'fs';
import path from 'path';

const textSizes = {
  'text-display-3xl': '--text-display-3xl',
  'text-display-2xl': '--text-display-2xl',
  'text-display-xl': '--text-display-xl',
  'text-display-lg': '--text-display-lg',
  'text-display-md': '--text-display-md',
  'text-display-sm': '--text-display-sm',
  'text-display-xs': '--text-display-xs',
  'text-xl': '--text-xl',
  'text-lg': '--text-lg',
  'text-md': '--text-md',
  'text-sm': '--text-sm',
  'text-xs': '--text-xs',
};

const fontWeights = {
  regular: '--font-weight-regular',
  medium: '--font-weight-medium',
  semibold: '--font-weight-semibold',
  bold: '--font-weight-bold',
  extrabold: '--font-weight-extrabold',
};

// Theme dengan line-height & tracking terbaru
let cssContent = `/* Auto-generated utilities - Do not edit manually */
@import "tailwindcss";

@theme {
  /* DISPLAY 3XL */
  --text-display-3xl: 60px;
  --text-display-3xl--line-height: 73.75px;
  --text-display-3xl--tracking: -5%;

  /* DISPLAY 2XL */
  --text-display-2xl: 48px;
  --text-display-2xl--line-height: 72px;
  --text-display-2xl--tracking: -3%;

  /* DISPLAY XL */
  --text-display-xl: 40px;
  --text-display-xl--line-height: 57.5px;
  --text-display-xl--tracking: -2%;

  /* DISPLAY LG */
  --text-display-lg: 36px;
  --text-display-lg--line-height: 46px;
  --text-display-lg--tracking: -1%;

  /* DISPLAY MD */
  --text-display-md: 32px;
  --text-display-md--line-height: 46px;
  --text-display-md--tracking: -1%;

  /* DISPLAY SM */
  --text-display-sm: 28px;
  --text-display-sm--line-height: 37.5px;
  --text-display-sm--tracking: 0%;

  /* DISPLAY XS */
  --text-display-xs: 24px;
  --text-display-xs--line-height: 35px;
  --text-display-xs--tracking: 0%;

  /* TEXT XL */
  --text-xl: 20px;
  --text-xl--line-height: 23.75px;
  --text-xl--tracking: 0%;

  /* TEXT LG */
  --text-lg: 18px;
  --text-lg--line-height: 30px;
  --text-lg--tracking: 0%;

  /* TEXT MD */
  --text-md: 16px;
  --text-md--line-height: 28px;
  --text-md--tracking: 0%;

  /* TEXT SM */
  --text-sm: 14px;
  --text-sm--line-height: 21px;
  --text-sm--tracking: 0%;

  /* TEXT XS */
  --text-xs: 12px;
  --text-xs--line-height: 19px;
  --text-xs--tracking: 0%;

  /* FONT WEIGHTS */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
`;

// Generate @utility classes
for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
  for (const [weightName, weightVar] of Object.entries(fontWeights)) {
    const className = `${sizeName}-${weightName}`;

    cssContent += `
@utility ${className} {
  font-size: var(${sizeVar});
  line-height: var(${sizeVar}--line-height);
  letter-spacing: var(${sizeVar}--tracking);
  font-weight: var(${weightVar});
}
`;
  }
}

// Output file
const outputDir = path.join('src', 'styles');
const outputPath = path.join(outputDir, 'generated-typography.css');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, cssContent);
// eslint-disable-next-line
console.log('✅ Typography utilities generated:', outputPath);
