"use client"
import React, {useState } from 'react'
import Image from 'next/image'
import '../ImageBannerSection/ImageBannerSection.css'

const BookNowForm=()=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [factoryVisit, setFactoryVisit] = useState(true);

    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [cityValid, setCityValid] = useState(true);
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);


    const handleSubmit = async () => {

        // Validate the form fields
        const isValid =
        firstName !== '' &&
        lastName !== '' &&
        city !== '' &&
        validatePhoneNumber(phoneNumber) &&
        validateEmail(email);

  // Set validity state for each field
  setFirstNameValid(firstName !== '');
  setLastNameValid(lastName !== '');
  setCityValid(city !== '');
  setPhoneNumberValid(validatePhoneNumber(phoneNumber));
  setEmailValid(validateEmail(email));

  if (isValid) {
       alert(`Hi ${firstName}, Your slot is Booked!`);
       sendDataToEmail();
       sendDataToSheets();
    } 
};

const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameValid(true);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameValid(true);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityValid(true);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberValid(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };

  const validatePhoneNumber = (number) => {
    // Regular expression for a valid phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const validateEmail = (email) => {
    // Regular expression for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendDataToEmail=async()=>{
    const data={
      firstName,lastName, email,phoneNumber,city,factoryVisit
    }
    const response = await fetch(`/api/book-now`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
      console.log('Email sent successfully');
      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setCity('');
    } else {
      console.error('Failed to send email');
    }
} 

const sendDataToSheets=async()=>{
  const data={
    firstName,lastName, email,phoneNumber,city,factoryVisit
  }

  let username = "ravi.kiran8844@gmail.com"
  let token = "9529fe5b-a94d-4ef5-8c74-fd889f1c8870"
  let postData = [ {
    "firstName" : `${firstName}`,
    "lastName" : `${lastName}`,
    "email" : `${email}`,
    "phoneNumber" : `${phoneNumber}`,
    "city" : `${city}`,
    "factoryVisit" : `${factoryVisit}`
  } ]
   fetch("https://sheetlabs.com/RK/jewelone" , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ":" + token)
  },
    body: JSON.stringify(postData),
  })
  .then(response => {
    if (response.status === 204) {
      console.log('Success!');
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}

    return(<div className='container'>
        <div className='book-now-form col-12 my-5 p-4'>
    <div>
    <div className='text-center'>
         <div className='mb-4 book-slot-text'>
         Book Your Slot
         </div>
     </div>
     <div className='row gx-2'>
         <div className='col-12 col-md-6 mb-3'>
             <label htmlFor="first-name">First name<span className='star'>*</span></label>
             <input
             className={`form-control ${!firstNameValid ? 'is-invalid' : ''}`}
             type="text"
             id='first-name'
             name="first-name"
             value={firstName}
             placeholder='Enter first name'
             onChange={handleFirstNameChange}
             />
             {!firstNameValid && <div className="invalid-feedback">Please enter your first name.</div>}
         </div>
         <div className='col-12 col-md-6 mb-3'>
             <label htmlFor="last-name">Last name<span className='star'>*</span></label>
             <input
             className={`form-control ${!lastNameValid ? 'is-invalid' : ''}`}
             type="text"
             placeholder='Enter last name'
             id='last-name'
             name="last-name"
             value={lastName}
             onChange={handleLastNameChange}
             />
             {!lastNameValid && <div className="invalid-feedback">Please enter your last name.</div>}
         </div>
         <div className='col-12 col-md-6 mb-3'>
             <label htmlFor="city">City<span className='star'>*</span></label>
             <input
             className={`form-control ${!cityValid ? 'is-invalid' : ''}`}
             type="text"
             placeholder='Enter your city'
             id='city'
             name="city"
             value={city}
             onChange={handleCityChange}
             />
             {!cityValid && <div className="invalid-feedback">Please enter your city.</div>}
         </div>
         <div className='col-12 col-md-6 mb-3'>
             <label htmlFor="phone-num">Phone Number<span className='star'>*</span></label>
             <input
             className={`form-control ${!phoneNumberValid ? 'is-invalid' : ''}`}
             type="tel"
             placeholder='Enter phone number'
             id='phone-num'
             name="phone-num"
             value={phoneNumber}
             onChange={handlePhoneNumberChange}
             />
             {!phoneNumberValid && <div className="invalid-feedback">Please enter a valid 10-digit phone number.</div>}
         </div>
         <div className='col-12 mb-3'>
             <label htmlFor="email">Email address<span className='star'>*</span></label>
             <input
             className={`form-control ${!emailValid ? 'is-invalid' : ''}`}
             type="email"
             placeholder='Enter your email'
             id='email'
             name="email"
             value={email}
             onChange={handleEmailChange}
             />
             {!emailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
         </div>
         <div className='col-12 col-md-6 mb-3'>
             <label>Factory Visit:</label>
             <div className='factory-visit d-flex align-items-center mt-2'>
             <label htmlFor="yes">Yes</label>
             <input
                 className='ms-1'
                 type="checkbox"
                 id="yes"
                 name="yes"
                 checked={factoryVisit}
                 onChange={(e) => setFactoryVisit(e.target.checked)}
             />
             <label className='ms-3' htmlFor="no">No</label>
             <input
                 className='ms-1'
                 type="checkbox"
                 id="no"
                 name="no"
                 checked={!factoryVisit}
                 onChange={(e) => setFactoryVisit(!e.target.checked)}
             />
             </div>
         </div>
         <div className='col-12 col-md-6 mt-3'>
             <div className=''>
             <button
                 className='btn form-btn text-white px-3 py-2 w-100'
                 type="button"
                 onClick={handleSubmit}
             >Submit</button>
             </div>
         </div>
         </div>
    </div>
 </div>

    </div>
    )
}

export default BookNowForm