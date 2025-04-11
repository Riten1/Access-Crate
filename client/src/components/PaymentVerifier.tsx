// components/PaymentVerifier.tsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useVerifyEsewaPayment } from "../services/payment/use-verify-payment-mutation";

const PaymentVerifier = () => {
  const [searchParams] = useSearchParams();
  const { mutate: verifyPayment } = useVerifyEsewaPayment();

  useEffect(() => {
    const pid = searchParams.get("pid"); // Will be mapped to transaction_uuid
    const oid = searchParams.get("oid"); // Will be mapped to transaction_code
    const amt = searchParams.get("amt"); // Will be mapped to total_amount
    const status = searchParams.get("status");
    const data = searchParams.get("data");

    if (pid) {
      verifyPayment({
        transaction_uuid: pid, // Changed from pid to transaction_uuid
        total_amount: amt || undefined, // Changed from amt to total_amount
        status: status || undefined,
        data: data || undefined,
        transaction_code: oid || undefined, // Changed from oid to transaction_code
      });
    }
  }, [searchParams, verifyPayment]); // Added verifyPayment to dependencies

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Verifying payment...
        </p>
      </div>
    </div>
  );
};

export default PaymentVerifier;
