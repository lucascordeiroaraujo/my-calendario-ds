import * as Dialog from '@radix-ui/react-dialog'

import { styled, keyframes } from '../../styles'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray800',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const DialogContent = styled(Dialog.Content, {
  borderRadius: '$xl',
  position: 'fixed',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxHeight: '85vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  overflow: 'auto',
  fontFamily: '$default',
  backgroundColor: '$white',
  '&:focus': {
    outline: 'none',
  },
  variants: {
    size: {
      sm: {
        maxWidth: '24rem',
      },
      md: {
        maxWidth: '28rem',
      },
      lg: {
        maxWidth: '32rem',
      },
      xl: {
        maxWidth: '36rem',
      },
      full: {
        maxWidth: '98%',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export const DialogTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$2',
  padding: '$6',
  borderBottom: '1px solid #D9D9D9',
  '.modal-title': {
    flex: 1,
  },
  '.close-button': {
    color: '#FF3877',
    width: '$8',
    height: '$8',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      color: '#811537',
    },
  },
})

export const DialogBody = styled('div', {
  padding: '$6',
})

export const DialogFooter = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$6',
  gap: '$4',
})
