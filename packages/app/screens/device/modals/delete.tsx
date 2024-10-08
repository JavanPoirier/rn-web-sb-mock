import {
  ModalBody,
  ModalFooter,
  ButtonText,
  Text,
  Button,
} from '@gluestack-ui/themed'
import { Modal } from '@sample/app/components/modal'
import { useRouter } from '@sample/app/utils/hooks/useRouter'
import { useParams } from '@sample/app/utils/hooks/useParams'

export const DeleteModal = ({
  show,
  close,
}: {
  show: boolean
  close: () => void
}) => {
  const { deviceId } = useParams<{ deviceId: string }>()
  const { replace } = useRouter()

  const deleteDevice = () => {
  }

  return (
    <Modal show={show} toggle={close} heading="Delete Device">
      <ModalBody>
        <Text>
          Are you sure you want to delete this device?
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button
          size="sm"
          action="negative"
          mr="$3"
          onPress={deleteDevice}
        >
          <ButtonText>Delete</ButtonText>
        </Button>
        <Button size="sm" action="secondary" borderWidth="$0" onPress={close}>
          <ButtonText>Cancel</ButtonText>
        </Button>
      </ModalFooter>
    </Modal>
  )
}
