import Modal from "../../../components/ui/modal";
import { SignUpForm } from "../form/SignUpForm";

export const SignUpModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <SignUpForm closeModal={closeModal} />
    </Modal>
  );
};
