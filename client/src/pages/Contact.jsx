import React, { useState } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {

  // const [user,setUser]=useState({
  //   name:"",phone:"",email:"",message:""
  // });

  const handleInputs=(e)=>{
     
  }

    const formSubmit =(e) => {
      
      console.log(e);

}
const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Sorry, name is required"),
      phone: Yup.number()
        .required("Sorry, phone is required"),
        email: Yup.string().required().email("Please enter a valid email"),
      message: Yup.string().max(600).required("Sorry, message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const sendData = async (values) => {
        alert('Form Submitted');
        const res = await axios.post('http://localhost:8000/api/v1/contact/', values)
        console.log(res)
        
      }
      sendData(values);

    },
  });

  return (

    <>
    <div className="pt-[64px] overflow-hidden pb-16">
      <div className="p-16 max-w-screen-lg m-auto relative">
        
       <div className='my-5'>
       
        <h1 className='text-center text-5xl text-gray-600 text-right font-bold mb-4'>Contact</h1>
      </div> 
      <div className='container contact_div'>
       <div className='row'>
           <div className='col-md-8 col-15 mx-auto'>
           <form onSubmit={formik.handleSubmit}>
           <div className="mb-3">
           <label for="name" className="form-label">Full Name</label>
            <input 
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter your Name"/>

            {formik.errors.name && formik.touched.name ? (
                  <p className="mt-1 text-sm text-red-500 -bottom-6">
                    {formik.errors.name}
                  </p>
            ) : null}
          </div>
          <div className="mb-3">
           <label for="phone" className="form-label">Phone Number</label>
            <input 
            value={formik.values.phone}
            name="phone"

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="number" 
            className="form-control" 
            id="phone" 
            placeholder="Mobile Number"/>
            {formik.errors.phone && formik.touched.phone ? (
                  <p className="mt-1 text-sm text-red-500 -bottom-6">
                    {formik.errors.phone}
                  </p>
                ) : null}
          </div>
          <div className="mb-3">
           <label for="email" className="form-label">Email address</label>
            <input 
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="name@example.com"/>

            {formik.errors.email && formik.touched.email ? (
                  <p className="mt-1 text-sm text-red-500 -bottom-6">
                    {formik.errors.email}
                  </p>
                ) : null}
          </div>
          <div className="mb-3">
           <label for="message" className="form-label">Message</label>
            <textarea 
            value={formik.values.message}
            name="message"

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control" 
            id="message" 
            rows="3">
            </textarea>
            {formik.errors.message && formik.touched.message ? (
                  <p className="mt-1 text-sm text-red-500 -bottom-6">
                    {formik.errors.message}
                  </p>
                ) : null}
          </div>
          <div className="col-12">
          <button className="btn btn-outline-primary" type="submit">Submit Form</button>
          </div>
           </form>
           </div>
           
       </div>
      </div> 
      </div>
      </div> 

    </>
  );
};

export default Contact;
