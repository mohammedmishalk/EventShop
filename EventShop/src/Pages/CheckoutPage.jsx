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
            <div className="text-blue-600 text-base font-normal leading-tight sm:text-blue-600 sm:text-base sm:font-normal sm:leading-tight ">
           Back to event page
            </div>
            <div className="text-gray-800 text-[40px] font-bold">Checkout</div>
          </div>
       
          <div className=" left-[16px] top-[5px] mt-5    sm:left-[80px] sm:top-[46px] absolute text-red-500 text-[40px] font-bold sm:text-violet-900 ">
            EventShop
          </div>
          {/* Form section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="h-56 left-[16px] top-[281px] absolute flex-col justify-start items-start gap-6 inline-flex sm:h-56 sm:left-[80px] sm:top-[281px] sm:absolute sm:flex-col sm:justify-start sm:items-start sm:gap-6 sm:inline-flex">
                <div className="w-[522px] justify-start items-start gap-6 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-gray-400 text-base font-medium leading-none">
                      First Name
                    </div>
                    <Field
                      type="text"
                      name="first_name"
                      className="w-[170px] h-12 bg-white text-xl rounded-[5px] outline-none sm:w-[295px] sm:h-12 sm:bg-white sm:text-xl sm:rounded-[5px] sm:outline-none "
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* Last Name input field */}
                  <div className="w-[2250px] flex-col justify-start items-start gap-4 inline-flex sm:w-[225px] sm:flex-col sm:justify-start sm:items-start sm:gap-4 sm:inline-flex">
                    <div className="text-gray-400 text-base font-medium leading-none">
                      Last Name
                    </div>
                    <Field
                      type="text"
                      name="last_name"
                      className="w-[170px] h-12 flex  bg-white text-xl rounded-[5px] outline-none sm:w-[281px] sm:h-12 sm:bg-white sm:text-xl sm:rounded-[5px] sm:outline-none"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                {/* Email input field */}
                <div className=" w-[365px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex sm:w-[600px] sm:h-12 sm:pl-5 sm:bg-white sm:rounded-md sm:justify-start sm:items-center sm:inline-flex">
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
                <div className="w-[365px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex sm:w-[600px] sm:h-12 sm:pl-5 sm:bg-white sm:rounded-md sm:justify-start sm:items-center sm:inline-flex">
                  <span className="text-xl mr-2">+61</span>
                  <Field
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    className=" w-[200px] h-10 border-none bg-transparent text-xl outline-none sm:w-full sm:h-10 sm:border-none sm:bg-transparent sm:text-xl sm:outline-none"
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
        
  