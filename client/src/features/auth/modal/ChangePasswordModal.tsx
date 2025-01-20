import Modal from "../../../components/ui/modal";
import { ChangePasswordForm } from "../form/ChangePasswordForm";

export const ChangePasswordModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ChangePasswordForm closeModal={closeModal} />
    </Modal>
  );
};
