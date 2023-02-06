import { ComponentProps, ElementType, ReactElement } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { XCircle } from 'phosphor-react'

import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogBody,
  DialogFooter,
} from './styles'

import { MyCalendarioHeading } from '../Heading'

import { MyCalendarioButton } from '../Button'

export interface MyCalendarioDialogProps
  extends ComponentProps<typeof DialogContent> {
  as?: ElementType
  title: string
  body: ReactElement
  footer: ReactElement
}

export function MyCalendarioDialog({
  title,
  body,
  footer,
  ...props
}: MyCalendarioDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <MyCalendarioButton size="sm">Edit profile</MyCalendarioButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent {...props}>
          <DialogTitle>
            <MyCalendarioHeading className="modal-title" as="h3">
              {title}
            </MyCalendarioHeading>

            <Dialog.Close asChild>
              <XCircle className="close-button" aria-label="Close" />
            </Dialog.Close>
          </DialogTitle>

          <DialogBody>{body}</DialogBody>

          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

MyCalendarioDialog.displayName = 'MyCalendarioDialog'
