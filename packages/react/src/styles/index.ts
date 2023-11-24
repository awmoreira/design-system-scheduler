import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  opacity,
  gradient,
  hue,
  lightness,
  saturation,
  shadow,
} from '@scheduler-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    opacity,
    gradient,
    hue,
    lightness,
    saturation,
    shadow,
  },
})
