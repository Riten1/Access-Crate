// pages/PaymentSuccess.tsx

import PaymentVerifier from "../components/PaymentVerifier";

export const PaymentSuccess = () => {
  return (
    <div className="p-8 text-center">
      <PaymentVerifier />
      <h1 className="mb-4 text-2xl font-bold">Payment Successful</h1>
      <p>Thank you for your purchase!</p>
      {/* Additional success content */}
    </div>
  );
};
