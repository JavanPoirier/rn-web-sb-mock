import {
  Heading,
  Modal as GlueStackModal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed'
import { PropsWithChildren, useRef } from 'react'

export type ModalProps = PropsWithChildren<{
  show: boolean
  toggle: (value?: boolean) => void
  heading?: string
}>

export const Modal = ({ show, toggle, heading, children }: ModalProps) => {
  const ref = useRef(null)

  return (
    <>
      <GlueStackModal
        isOpen={show}
        onClose={() => toggle(false)}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        {/* TODO: Set left based on menu state */}
        <ModalContent
          sx={
            !process.env.STORYBOOK
              ? {
                  '@base': {
                    width: '95%',
                    maxHeight: '90%',
                  },
                  '@md': {
                    left: 150,
                    maxHeight: '50%',
                  },
                }
              : {
                  width: '95%',
                  maxHeight: '75%',
                }
          }
        >
          <ModalHeader display={heading ? 'flex' : 'none'}>
            <Heading size="lg">{heading}</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          {children}
        </ModalContent>
      </GlueStackModal>
    </>
  )
}
