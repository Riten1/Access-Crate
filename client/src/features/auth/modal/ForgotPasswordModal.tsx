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
    <Modal isOpen={isOpen} closeModal={closeModal} className="w-1/3">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-3xl font-semibold">
            Forgot Password
          </h2>
          <p className="text-center text-base font-normal text-supporting-bg-light">
            Enter your registered email address and we will send you a otp to
            reset your password
          </p>
        </div>
        <SendOtpForm />
      </div>
    </Modal>
  );
};
