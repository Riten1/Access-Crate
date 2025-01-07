import Modal from "../../../components/ui/modal";
import { LoginForm } from "../form/LoginForm";

export const LoginModal = ({
  isOpen,
  closeModal,
  setActiveModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
  setActiveModal: (modal: "login" | "signup" | "") => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <LoginForm closeModal={closeModal} setActiveModal={setActiveModal} />
    </Modal>
  );
};
