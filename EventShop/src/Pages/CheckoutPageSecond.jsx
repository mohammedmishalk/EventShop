import React from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "../Components/DetailCard";
import PaymentCard from "../Components/PaymentCard";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';


function CheckoutPageSecond() {
  
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = React.useState("");
  const [appliedCoupon, setAppliedCoupon] = React.useState("");
  const [discountAmount, setDiscountAmount] = React.useState(0);
  const [isCouponEntered, setIsCouponEntered] = React.useState(false);
  
  const [isChecked, setIsChecked] = React.useState(false);
  const { ticketNumberOne, ticketNumberTwo, ticketOneCount, ticketTwoCount } =
  useSelector((state) => state.checkout);

const finalAmount = ticketNumberOne * ticketOneCount + ticketNumberTwo * ticketTwoCount.toFixed(2);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
    setIsCouponEntered(event.target.value !== "");
    // console.log(couponCode)
  };

    const handleCouponApply = () => {
   

    const correctCouponCode = "WELCOME10";
    if (couponCode === correctCouponCode) {
      setAppliedCoupon(couponCode);
      toast.success(`Coupon Applied ${couponCode}`)
      setDiscountAmount((ticketNumberOne * ticketOneCount + ticketNumberTwo * ticketTwoCount) * 10/100);
      setCouponCode("");
    } else {
      toast.error(`Invalid Coupon ${couponCode}`)
      setCouponCode("");
      setAppliedCoupon("");
      setDiscountAmount(0);
    }
  };

  const handleCouponDelete = () => {
    setAppliedCoupon("");
    setDiscountAmount(0);
  }; 

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[1440px] h-[975px] relative bg-gray-100 rounded-2xl">
        <div className="h-[360px] left-[80px] top-[316px] absolute flex-col justify-start items-start gap-12 inline-flex">
          <DetailCard  discount={discountAmount}/>
        </div>
        <div className="h-[92px] left-[80px] top-[250px] absolute flex-col justify-start items-start gap-6 inline-flex">
          {appliedCoupon ? (
            <div className="flex items-center gap-4">
              <div>
                Coupon Applied: <strong>{appliedCoupon}</strong>
              </div>
              <button
                className="px-2 py-1 rounded-md bg-red-600 text-white text-sm"
                onClick={handleCouponDelete}
              >
                Delete
              </button>
            </div>
  ) : (
    <>
      <div className="self-stretch h-5 top-[-40px] flex justify-start items-center gap-4 absolute">
        <div className="text-neutral-950 text-base font-normal leading-tight">
          Have a promo coupon?
        </div>
        <div className="text-blue-600 text-base font-normal leading-tight">
          Redeem your coupon
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-[560px] h-12 px-4 py-2 rounded-md border border-neutral-300 focus:ring outline-none"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={handleCouponChange}
        />
        {isCouponEntered && (
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
            onClick={handleCouponApply}
          >
            Apply
          </button>
        )}
      </div>
    </>
  )}
</div>


        <div className="h-[109px] left-[757px] top-[200px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-neutral-950 text-base font-normal leading-tight">
            Add any notes/comments (Optional)
          </div>
          <div className="w-[650px] h-[73px] pl-5 pr-[332px] pt-4 pb-[41px] bg-white rounded-[5px] justify-start items-center inline-flex">
            <input
              type="text"
              className="w-full h-full px-4 py-2 bg-transparent border-none outline-none text-gray-700"
              placeholder="Leave us a note about your order"
            />
          </div>
        </div>

        <PaymentCard />

        <div className={`w-[650px] h-12 px-8 left-[760px] top-[810px] absolute rounded-md justify-center items-center gap-3 inline-flex ${isChecked ? "bg-blue-600" : "bg-blue-300"}`}>
  <div className={`text-violet-50 text-base font-bold leading-none ${isChecked ? "" : "text-gray-400"}`}>
    {discountAmount > 0 ? (
      <>
        Pay ${(parseFloat(finalAmount) - parseFloat(discountAmount)).toFixed(2)}
      
      </>
    ) : (
      `Pay ${finalAmount.toFixed(2)}`
    )}
  </div>
</div>

        <div className="w-[993px] h-1 left-0 top-[882px] absolute bg-blue-600" />
        <div className="px-[18px] py-4 left-[80px] top-[910px] absolute rounded-md border border-zinc-200 justify-center items-center gap-3 inline-flex">
          <button
            className="text-gray-800 text-base font-bold leading-none"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>
        <div className="left-[684px] top-[926px] absolute text-center text-gray-800 text-base font-normal leading-none">
          Checkout
        </div>
        <div className="left-[80px] top-[90px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <button
            className="text-blue-600 text-base font-normal leading-tight"
            onClick={handleBackClick}
          >
            Back
          </button>
          <div className="text-gray-800 text-[40px] font-bold">Checkout</div>
        </div>
        <div className={`w-[180px] px-6 py-4 left-[1180px] top-[910px] absolute bg-blue-600 rounded-md justify-center items-center gap-3 inline-flex ${isChecked ? "" : "opacity-50 pointer-events-none"}`}>
  <div className="text-violet-50 text-base font-bold leading-none">
    {discountAmount > 0 ? (
      <>
        Pay ${(parseFloat(finalAmount) - parseFloat(discountAmount)).toFixed(2)}
       
      </>
    ) : (
      `Pay ${finalAmount.toFixed(2)}`
    )}
  </div>
</div>

        <input
  type="checkbox"
  checked={isChecked}
  onChange={handleCheckboxChange}
  className="w-4 h-4 left-[760px] top-[776px] absolute bg-blue-600 rounded-sm"
/>
        <div className="w-[547px] h-4 left-[784px] top-[770px] absolute">
          <span className="text-zinc-600 text-sm font-semibold leading-tight">
            I agree with the Organisation’s{" "}
          </span>
          <span className="text-blue-600 text-sm font-semibold leading-tight">
            Terms & Conditions{" "}
          </span>
          <span className="text-zinc-600 text-sm font-semibold leading-tight">
            and Orgnyse{" "}
          </span>
          <span className="text-blue-600 text-sm font-semibold leading-tight">
            Privacy Policy
          </span>
        </div>
        <div className="left-[80px] top-[20px] absolute text-violet-900 text-[40px] font-bold">
          EventShop
        </div>
      </div>
    </div>
  );
}

export default CheckoutPageSecond;
