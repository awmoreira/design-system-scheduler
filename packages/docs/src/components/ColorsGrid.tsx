import { colors, gradient } from '@scheduler-ui/tokens'
import { getContrast } from 'polished'

type IColorsProps = {
  gradientColors?: boolean
}

export function ColorsGrid({ gradientColors = false }: IColorsProps) {
  return Object.entries(gradientColors ? gradient : colors).map(
    ([key, color]) => {
      console.log('🚀 ~ file: ColorsGrid.tsx:11 ~ ColorsGrid ~ color:', color)

      return (
        <div key={key} style={{ background: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: !gradientColors
                ? getContrast(color, '#FFF') < 3.5
                  ? '#000'
                  : '#FFF'
                : '#FFF',
            }}
          >
            <strong>${key}</strong>
            {/* <span>{color}</span> */}
          </div>
        </div>
      )
    },
  )
}
