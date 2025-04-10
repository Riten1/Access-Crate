// pages/PaymentFailure.tsx
import { useSearchParams } from "react-router-dom";

const PaymentFailure = () => {
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("pid");

  return (
    <div className="p-8 text-center">
      <h1 className="mb-4 text-2xl font-bold">Payment Failed</h1>
      <p>Your payment was not completed successfully.</p>
      {pid && <p>Reference ID: {pid}</p>}
    </div>
  );
};

export default PaymentFailure;
