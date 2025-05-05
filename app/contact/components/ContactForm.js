'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-one">
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Contact with us</h6>
          <h3 className="sec-title__title">
            Feel free to write us <br /> anytime
          </h3>
        </div>
        <form className="contact-one__form contact-form-validated form-one" action="inc/sendemail.php">
          <div className="form-one__group">
            <div className="form-one__control">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-md text-left"
              />
            </div>
            <div className="form-one__control">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-md text-left"
              />
            </div>
            <div className="form-one__control">
              <input
                type="text"
                name="phone"
                placeholder="Your phone"
                className="w-full p-3 border border-gray-300 rounded-md text-left"
              />
            </div>
            <div className="form-one__control">
              <div className="form-one__control__select">
                <label htmlFor="program-select" className="sr-only">Select programs</label>
                <select 
                  id="program-select" 
                  className="bg-[#FAF5F2] w-full p-3 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Select programs"
                  
                   >Select programs</option>
                  <option value="Program 01">Select programs 01</option>
                  <option value="Program 02">Select programs 02</option>
                </select>
              </div>
            </div>
            <div className="form-one__control form-one__control--full">
              <textarea
                name="message"
                placeholder="Write a message"
                className="w-full p-3 border border-gray-300 rounded-md text-left"
              ></textarea>
            </div>
            <div className="form-one__control form-one__control--full text-center">
              <button type="submit" className="kidearn-btn kidearn-btn--xl">
                <span>Send a Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
