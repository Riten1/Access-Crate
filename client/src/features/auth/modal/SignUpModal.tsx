
import Modal from '../../../components/ui/modal'
import { SignUpForm } from '../form/SignUpForm'

export const SignUpModal = ({isOpen, closeModal, setActiveModal}: {isOpen: boolean, closeModal: () => void, setActiveModal: (modal: "login" | "signup" | "") => void;}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
    
      <SignUpForm setActiveModal={setActiveModal} closeModal={closeModal} />
  
    </Modal>
  )
}
