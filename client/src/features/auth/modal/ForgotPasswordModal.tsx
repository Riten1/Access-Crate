import Modal from "../../../components/ui/modal";
import { SendOtpForm } from "../form/SendOtpForm";

export const ForgotPasswordModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} className="w-[450px]">
      <SendOtpForm closeModal={closeModal} />
    </Modal>
  );
};
