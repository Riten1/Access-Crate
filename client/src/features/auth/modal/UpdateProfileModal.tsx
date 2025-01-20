
import Modal from "../../../components/ui/modal";
import { UpdateProfileForm } from "../form/UpdateProfileForm";

export const UpdateProfileModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <UpdateProfileForm closeModal={closeModal} />
    </Modal>
  );
};
