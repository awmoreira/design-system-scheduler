import { Step, Steps } from './styles'

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

export interface ProgressProps {
  currentStep: IntRange<0, 101>
}

export function Progress({ currentStep = 1 }: ProgressProps) {
  const currentPercentage = `${currentStep}%`
  const borderTop = `${currentStep === 100 ? 0 : '$full'}`
  const borderBottom = `${currentStep === 100 ? 0 : '$full'}`

  return (
    <Steps>
      <Step
        css={{
          '--step-current': currentPercentage,
          '--border-right-top': borderTop,
          '--border-right-bottom': borderBottom,
        }}
      />
    </Steps>
  )
}
