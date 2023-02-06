import { styled, keyframes } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  position: 'relative',
  fontWeight: '$bold',
  fontFamily: '$montserrat',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.5s',
  border: '2px solid transparent',
  background: 'transparent',
  svg: {
    width: '$5',
    height: '$5',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: '#909090',
    borderColor: '#919191',
    background: '#D6D6D6',
    '&:hover': {
      color: '#909090',
      borderColor: '#919191',
      background: '#D6D6D6',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
  },
  variants: {
    theme: {
      primary: {
        borderColor: '#FF3877',
        backgroundColor: '#FF3877',
        color: '#FFFFFF',
        '&:hover': {
          borderColor: '#D12C61',
          backgroundColor: '#D12C61',
        },
        '&:active': {
          borderColor: '#811537',
          backgroundColor: '#811537',
        },
      },
      secondary: {
        borderColor: '#FF3877',
        color: '#FF3877',
        '&:hover': {
          backgroundColor: '#FFE0EA',
        },
        '&:active': {
          borderColor: '#FF3877',
          backgroundColor: '#FF3877',
        },
      },
      tertiary: {
        color: '#FF3877',
        '&:hover': {
          color: '#D12C61',
        },
        '&:active': {
          color: '#811537',
        },
      },
      destructive: {
        borderColor: '#D8544F',
        backgroundColor: '#D8544F',
        color: '#FFFFFF',
        '&:hover': {
          borderColor: '#A5302B',
          backgroundColor: '#A5302B',
        },
        '&:active': {
          borderColor: '#761915',
          backgroundColor: '#761915',
        },
      },
      positive: {
        borderColor: '#03703C',
        backgroundColor: '#03703C',
        color: '#FFFFFF',
        '&:hover': {
          borderColor: '#03582F',
          backgroundColor: '#03582F',
        },
        '&:active': {
          borderColor: '#10462D',
          backgroundColor: '#10462D',
        },
      },
    },
    loading: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        span: {
          opacity: 0,
        },
      },
    },
    size: {
      sm: {
        padding: '$s35 $5',
        gap: '$s25',
        fontSize: '$xs',
        minHeight: '$11',
        borderRadius: '$md',
      },
      md: {
        padding: '$s45 $5',
        gap: '$s35',
        fontSize: '$sm',
        minHeight: '$13',
        borderRadius: '$md',
      },
      lg: {
        padding: '$5',
        gap: '$s35',
        fontSize: '$md',
        minHeight: '$14',
        borderRadius: '$md',
      },
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'md',
    loading: false,
  },
})

const rotate = keyframes({
  '0%': {
    transform: 'rotate3d(0, 0, 1, 0deg)',
  },
  '25%': {
    transform: 'rotate3d(0, 0, 1, 90deg)',
  },
  '50%': {
    transform: 'rotate3d(0, 0, 1, 180deg)',
  },
  '75%': {
    transform: 'rotate3d(0, 0, 1, 270deg)',
  },
  '100%': {
    transform: 'rotate3d(0, 0, 1, 360deg)',
  },
})

export const Loading = styled('div', {
  position: 'absolute',
  top: '$0',
  left: '$0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  svg: {
    animation: `${rotate} 2s normal linear infinite`,
  },
})
