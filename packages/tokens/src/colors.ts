import { hue } from './hue'
import { lightness } from './lightness'
import { opacity } from './opacity'
import { saturation } from './saturation'

export const colors = {
  brandPrimary0: `hsla(${hue.brandPrimary}, ${saturation.max}, ${lightness.xxxs}, ${opacity.max})`,
  brandPrimary25: `hsla(${hue.brandPrimary}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  brandPrimary50: `hsla(${hue.brandPrimary}, ${saturation.max}, ${lightness.md}, ${opacity.max})`,
  brandPrimary75: `hsla(${hue.brandPrimary}, ${saturation.max}, ${lightness.xl}, ${opacity.max})`,
  brandPrimary100: `hsla(${hue.brandPrimary}, ${saturation.max}, ${lightness.xxxl}, ${opacity.max})`,

  brandSecondary0: `hsla(${hue.brandSecondary}, ${saturation.max}, ${lightness.xxxs}, ${opacity.max})`,
  brandSecondary25: `hsla(${hue.brandSecondary}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  brandSecondary50: `hsla(${hue.brandSecondary}, ${saturation.max}, ${lightness.sm}, ${opacity.max})`,
  brandSecondary75: `hsla(${hue.brandSecondary}, ${saturation.max}, ${lightness.xl}, ${opacity.max})`,
  brandSecondary100: `hsla(${hue.brandSecondary}, ${saturation.max}, ${lightness.xxxl}, ${opacity.max})`,

  text: `hsla(${hue.textMain}, ${saturation.min2}, ${lightness.xxs}, ${opacity.mid})`,

  background0: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.min}, ${opacity.max})`,
  background10: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xxxs}, ${opacity.max})`,
  background20: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xxs}, ${opacity.max})`,
  background30: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xs}, ${opacity.max})`,
  background40: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.sm}, ${opacity.max})`,
  background50: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.md}, ${opacity.max})`,
  background60: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.lg}, ${opacity.max})`,
  background70: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xl}, ${opacity.max})`,
  background80: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xxl}, ${opacity.max})`,
  background90: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.xxxl}, ${opacity.max})`,
  background100: `hsla(${hue.brandPrimary}, ${saturation.min}, ${lightness.max}, ${opacity.max})`,

  alertDanger25: `hsla(${hue.alertDanger}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  alertDanger50: `hsla(${hue.alertDanger}, ${saturation.max}, ${lightness.xl}, ${opacity.max})`,
  alertDanger75: `hsla(${hue.alertDanger}, ${saturation.max}, ${lightness.xxl}, ${opacity.max})`,

  alertWarning25: `hsla(${hue.alertWarning}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  alertWarning50: `hsla(${hue.alertWarning}, ${saturation.xl}, ${lightness.lg}, ${opacity.max})`,
  alertWarning75: `hsla(${hue.alertWarning}, ${saturation.max}, ${lightness.xxxl}, ${opacity.max})`,

  alertInfo25: `hsla(${hue.alertInfo}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  alertInfo50: `hsla(${hue.alertInfo}, ${saturation.max}, ${lightness.xl}, ${opacity.max})`,
  alertInfo75: `hsla(${hue.alertInfo}, ${saturation.max}, ${lightness.xxl}, ${opacity.max})`,

  alertSuccess25: `hsla(${hue.alertSuccess}, ${saturation.max}, ${lightness.xs}, ${opacity.max})`,
  alertSuccess50: `hsla(${hue.alertSuccess}, ${saturation.xl}, ${lightness.lg}, ${opacity.max})`,
  alertSuccess75: `hsla(${hue.alertSuccess}, ${saturation.max}, ${lightness.xxxl}, ${opacity.max})`,

  alertText0: `hsla(${hue.textMain}, ${saturation.min}, ${lightness.xxs}, ${opacity.max})`,
  alertText50: `hsla(${hue.textMain}, ${saturation.min}, ${lightness.lg}, ${opacity.max})`,
  alertText100: `hsla(${hue.textMain}, ${saturation.min}, ${lightness.max}, ${opacity.max})`,
}
