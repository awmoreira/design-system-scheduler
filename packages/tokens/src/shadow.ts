import { colors } from './colors'

export const shadow = {
  lowLevelBottom: `0px 3px 5px 0px ${colors.background40}`,
  lowLevelTop: `0px -3px 5px 0px ${colors.background40}`,
  lowLevelLeft: `-3px 0px 5px 0px ${colors.background40}`,
  lowLevelRight: `3px 0px 5px 0px ${colors.background40}`,

  midLevelBottom: `0px 6px 10px 0px ${colors.background60}`,
  midLevelTop: `0px -6px 10px 0px ${colors.background60}`,
  midLevelLeft: `-6px 0px 10px 0px ${colors.background60}`,
  midLevelRight: `6px 0px 10px 0px ${colors.background60}`,

  highLevelBottom: `0px 12px 15px 0px ${colors.background80}`,
  highLevelTop: `0px -12px 15px 0px ${colors.background80}`,
  highLevelLeft: `-12px 0px 15px 0px ${colors.background80}`,
  highLevelRight: `12px 0px 15px 0px ${colors.background80}`,
}
