// components/PaymentVerifier.tsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useVerifyEsewaPayment } from "../services/payment/use-verify-payment-mutation";

const PaymentVerifier = () => {
  const [searchParams] = useSearchParams();
  const { mutate: verifyPayment } = useVerifyEsewaPayment();

  useEffect(() => {
    const pid = searchParams.get("pid");
    const oid = searchParams.get("oid");
    const amt = searchParams.get("amt");
    const status = searchParams.get("status");
    const data = searchParams.get("data");

    if (pid) {
      verifyPayment({
        pid,
        oid: oid || undefined,
        amt: amt || undefined,
        status: status || undefined,
        data: data || undefined,
      });
    }
  }, [searchParams]);

  return <div>Verifying payment...</div>;
};

export default PaymentVerifier;
