// PaymentSuccessPage.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PaymentSuccessPage() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const paymentStatus = queryParams.get("status");

  useEffect(() => {
    console.log("Payment Status:", paymentStatus);
  }, [paymentStatus]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-green-600 font-bold mb-5">Payment Successful!</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        {paymentStatus === "success"
          ? "Your payment has been successfully processed."
          : "Package will Aug 7th"}
      </p>
    </div>
  );
}
