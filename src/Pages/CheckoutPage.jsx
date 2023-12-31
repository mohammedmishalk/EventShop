import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import DetailCard from "../Components/DetailCard";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = React.useState(false);
  



  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone_number: Yup.string()
    .notRequired()
    .matches(/^[2-9]\d{10}$/, 'Please enter a valid Australian phone number'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  };

  const handleNextClick = () => {
    navigate("/checkout");
  };

  const handleSubmit = (values) => {
    console.log(values); 
  };

  

  
  return (
    <>


      <div className=" w-[395px] h-[1100px] sm:w-screen sm:h-screen sm:flex sm:justify-center sm:items-center">
        <div className="w-[415px] bg-gray-200  h-[1100px] sm:w-[1440px] sm:h-[950px] sm:relative sm:bg-gray-100 sm:rounded-2xl">
          <div className="w-[1440px] h-[40px] left-0 top-[870px] absolute">
            <div className="w-[1440px] h-0.5 left-0 top-0 absolute">
              <div className="w-[200px] h-1 left-0 top-[90px] absolute bg-blue-600 sm:w-[540px] sm:h-1 sm:left-0 sm:top-0 sm:absolute sm:bg-blue-600"  />
            </div>
            <div className="w-[677px] h-8 left-[-300px] top-[128px] absolute sm:w-[677px] sm:h-8 sm:left-[683px] sm:top-[15px] sm:absolute ">
              <div className="w-[85px] h-12 px-6 py-4 left-[592px] top-0 absolute bg-blue-600 rounded-md justify-center items-center gap-3 inline-flex cursor-pointer">
                <button type="submit"
                  className="text-violet-50 text-base font-bold leading-none"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
              <div className="left-0 top-[16px] absolute text-center text-gray-800 text-base font-normal leading-none">
                Questions
              </div>
            </div>
          </div>
          <div className=" left-[16px] top-[129px] absolute flex-col justify-start items-start gap-2 inline-flex sm:left-[80px] sm:top-[129px] sm:absolute sm:flex-col sm:justify-start sm:items-start sm:gap-2 sm:inline-flex">
            {/* <div className="text-blue-600 text-base font-normal leading-tight sm:text-blue-600 sm:text-base sm:font-normal sm:leading-tight ">
           Back to event page
            </div> */}
            {/* <div className="text-gray-800 text-[40px] font-bold">Checkout</div> */}
          </div>
       
          <div className="left-[16px] top-[5px] mt-5 sm:left-[80px] sm:top-[46px] absolute">
  {/* Replace "path/to/your/image.jpg" with the actual path or URL of your image */}
  <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg?v=1682421543" alt="Boat Lifestyle" className="w-20 h-40 sm:w-20 sm:h-60" />
</div>

          {/* Form section */}

       


  <div className="left-[16px] top-[200px] sm:left-[80px] sm:top-[300px] absolute">
        {/* Replace "path/to/your/image.jpg" with the actual path or URL of your image */}
        <img src="https://m.media-amazon.com/images/I/61dSTgseCdL._SX679_.jpghttps://m.media-amazon.com/images/I/61dSTgseCdL._SX679_.jpg" alt="Boat Lifestyle" className="w-80 h-80 sm:w-96 sm:h-96" />
      </div>






          <div className="w-6 h-6 left-[1321px] top-[190px] absolute" />
          <div className="w-60 left-[16px] top-[545px] absolute text-blue-700 text-sm font-medium leading-normal sm:w-60 sm:left-[760px] sm:top-[273px] sm:absolute sm:text-blue-700 sm:text-sm sm:font-medium sm:leading-normal">
            SUMMARY
          </div>
          <div className="w-[504px] h-2 left-[749px] top-[156px] absolute" />
          <div className="w-[130px] h-6 left-[16px] top-[240px] absolute sm:w-[130px] sm:h-6 sm:left-[80px] sm:top-[240px] sm:absolute">
            <div className="w-[130px] h-6 left-0 top-0 absolute bg-blue-600 rounded-[3px]" />
            <div className="left-[8px] top-[4px] absolute text-white text-sm font-normal leading-none sm:left-[8px] sm:top-[4px] sm:absolute sm:text-white sm:text-sm sm:font-normal sm:leading-none">
              Primary Attendee
            </div>
          </div>
          <div className="h-[360px] left-[16px] top-[575px] absolute flex-col justify-start items-start gap-12 inline-flex sm:h-[360px] sm:left-[760px] sm:top-[312px] sm:absolute sm:flex-col sm:justify-start sm:items-start sm:gap-12 sm:inline-flex">
            <DetailCard />
          </div>
        </div>

     
      </div>
       
      
    </>
  );
}
        
  