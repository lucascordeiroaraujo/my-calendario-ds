import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const TextInputLabel = styled('label', {
  fontFamily: '$roboto',
  variants: {
    size: {
      sm: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$sm',
      },
    },
  },
})

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const Input = styled('input', {
  width: '100%',
  padding: '$2',
  transition: '0.5s',
  border: '2px solid transparent',
  fontFamily: '$roboto',
  boxSizing: 'border-box',
  background: '$white',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    outline: 'none',
  },
  variants: {
    theme: {
      primary: {
        borderColor: '$blue300',
        color: '$blue500',
        '&:focus': {
          borderColor: '$blue500',
        },
        '::placeholder': {
          color: '$blue500',
        },
      },
      success: {
        borderColor: '$green300',
        color: '$green500',
        '&:focus': {
          borderColor: '$green500',
        },
        '::placeholder': {
          color: '$green500',
        },
      },
      warning: {
        borderColor: '$yellow300',
        color: '$yellow500',
        '&:focus': {
          borderColor: '$yellow500',
        },
        '::placeholder': {
          color: '$yellow500',
        },
      },
      danger: {
        borderColor: '$red300',
        color: '$red500',
        '&:focus': {
          borderColor: '$red500',
        },
        '::placeholder': {
          color: '$red500',
        },
      },
      info: {
        borderColor: '$blueGray300',
        color: '$blueGray500',
        '&:focus': {
          borderColor: '$blueGray500',
        },
        '::placeholder': {
          color: '$blueGray500',
        },
      },
    },
    size: {
      sm: {
        padding: '$2',
        fontSize: '$xs',
        borderRadius: '$sm',
        height: '$9',
      },
      md: {
        padding: '$2$5',
        fontSize: '$sm',
        borderRadius: '$md',
        height: '$12',
      },
    },
  },
  defaultVariants: {
    theme: 'info',
    size: 'sm',
  },
})
