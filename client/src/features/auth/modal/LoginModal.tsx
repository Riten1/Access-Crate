import Modal from "../../../components/ui/modal";
import { LoginForm } from "../form/LoginForm";

export const LoginModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <LoginForm closeModal={closeModal} />
    </Modal>
  );
};
