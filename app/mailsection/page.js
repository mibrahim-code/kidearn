import React from "react";
import ExportedImage from "next-image-export-optimizer";

const MailSection = () => {
  return (
    <section className="mail-one">
      <div
        className="mail-one__bg-shape"
        style={{ backgroundImage: "url(/images/mail-shape-1-rtl.png)" }}
      ></div>

      <div
        className="mail-one__border-shape kidearn-splax"
        data-para-options={`{
          "orientation": "down",
          "scale": 1.2,
          "delay": ".6",
          "transition": "cubic-bezier(0,0,0,1)",
          "overflow": true
        }`}
        style={{ backgroundImage: "url(/images/mail-shape-2.png)" }}
      ></div>

      <div className="container">
        <div className="mail-one__area">
          <div className="mail-one__bg"></div>

          <div className="mail-one__content">
            <h3 className="mail-one__title">
              Subscribe to our newsletter<br /> for daily updates
            </h3>
            <form action="#" data-url="MAILCHIMP_FORM_URL" className="mail-one__form mc-form">
              <input type="text" name="EMAIL" placeholder="Email Address" />
              <button type="submit" className="kidearn-btn">
                <span>Subscribe</span>
              </button>
            </form>
            <div className="mc-form__response"></div>
          </div>

          <div
            className="mail-one__shape kidearn-splax"
            data-para-options={`{
              "orientation": "up",
              "scale": 1.5,
              "delay": ".6",
              "transition": "cubic-bezier(0,0,0,1)",
              "overflow": true
            }`}
          >
            <ExportedImage
              unoptimized={true}
              src="/images/mail-shape-3.png"
              alt="kidearn"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailSection;
