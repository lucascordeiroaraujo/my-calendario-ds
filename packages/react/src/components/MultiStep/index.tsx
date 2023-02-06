import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MyCalendarioMultiStepProps {
  size: number
  currentStep?: number
}

export function MyCalendarioMultiStep({
  size,
  currentStep = 1,
}: MyCalendarioMultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step: number) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MyCalendarioMultiStep.displayName = 'MyCalendarioMultiStep'
