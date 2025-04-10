// components/PaymentVerifier.tsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useVerifyEsewaPaymentMutation } from "../services/payment/use-verify-payment-mutation";

const PaymentVerifier = () => {
  const [searchParams] = useSearchParams();
  const { mutate: verifyPayment, isLoading } = useVerifyEsewaPaymentMutation();

  useEffect(() => {
    const pid = searchParams.get("pid");
    const oid = searchParams.get("oid");
    const amt = searchParams.get("amt");
    const refId = searchParams.get("refId");

    if (pid) {
      verifyPayment({
        pid,
        oid: oid || undefined,
        amt: amt || undefined,
        refId: refId || undefined,
      });
    }
  }, [searchParams, verifyPayment]);

  return <div>{isLoading && <div>Verifying payment...</div>}</div>;
};

export default PaymentVerifier;
