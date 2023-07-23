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
    .matches(/^[2-9]\d{8}$/, 'Please enter a valid Australian phone number'),
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
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[1440px] h-[950px] relative bg-gray-100 rounded-2xl">
          <div className="w-[1440px] h-[40px] left-0 top-[870px] absolute">
            <div className="w-[1440px] h-0.5 left-0 top-0 absolute">
              <div className="w-[540px] h-1 left-0 top-0 absolute bg-blue-600" />
            </div>
            <div className="w-[677px] h-8 left-[683px] top-[15px] absolute">
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
          <div className="left-[80px] top-[129px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-blue-600 text-base font-normal leading-tight">
              Back to event page
            </div>
            <div className="text-gray-800 text-[40px] font-bold">Checkout</div>
          </div>
          <div className="left-[80px] top-[46px] absolute text-violet-900 text-[40px] font-bold">
            EventShop
          </div>
          {/* Form section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="h-56 left-[80px] top-[281px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-[522px] justify-start items-start gap-6 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-gray-400 text-base font-medium leading-none">
                      First Name
                    </div>
                    <Field
                      type="text"
                      name="first_name"
                      className="w-[295px] h-12 bg-white text-xl rounded-[5px] outline-none"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* Last Name input field */}
                  <div className="w-[225px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-gray-400 text-base font-medium leading-none">
                      Last Name
                    </div>
                    <Field
                      type="text"
                      name="last_name"
                      className="w-[281px] h-12 bg-white text-xl rounded-[5px] outline-none"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                {/* Email input field */}
                <div className="w-[600px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-10 border-none bg-transparent text-xl outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Phone Number input field */}
                <div className="w-[600px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex">
                  <span className="text-xl mr-2">+61</span>
                  <Field
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="w-full h-10 border-none bg-transparent text-xl outline-none"
                  />
                </div>
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-red-500 text-sm"
                />
                {/* <button
                  type="submit"
                  className="w-[85px] h-12 px-6 py-4 left-[592px] top-0 absolute bg-blue-600 rounded-md justify-center items-center gap-3 inline-flex cursor-pointer"
                >
                  <div className="text-violet-50 text-base font-bold leading-none">
                    Next
                  </div>
                </button> */}
              </Form>
            )}
          </Formik>
          <div className="w-6 h-6 left-[1321px] top-[190px] absolute" />
          <div className="w-60 left-[760px] top-[273px] absolute text-blue-700 text-sm font-medium leading-normal">
            SUMMARY
          </div>
          <div className="w-[504px] h-2 left-[749px] top-[156px] absolute" />
          <div className="w-[130px] h-6 left-[80px] top-[240px] absolute">
            <div className="w-[130px] h-6 left-0 top-0 absolute bg-blue-600 rounded-[3px]" />
            <div className="left-[8px] top-[4px] absolute text-white text-sm font-normal leading-none">
              Primary Attendee
            </div>
          </div>
          <div className="h-[360px] left-[760px] top-[312px] absolute flex-col justify-start items-start gap-12 inline-flex">
            <DetailCard />
          </div>
        </div>
      </div>
        
      
    </>
  );
}
        
  