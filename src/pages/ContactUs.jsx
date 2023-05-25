import React from "react";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4251915478762!2d31.01547842448913!3d30.024657274933592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b655387f4d5%3A0x6dc9d9bd878e4210!2sEl%20Wadi%20Co.%20For%20Food%20Industries%20-%20Wadi%20Food!5e0!3m2!1sar!2seg!4v1684972093667!5m2!1sar!2seg"
        loading="lazy"
      ></iframe>
      <section className="contact-details">
        <div className="contact-info">
          <h1>Wadi food Industries co.</h1>
          <p>
            <strong>Address:</strong>Wadi Group Company Capital Business Park,
            Building B1, 26th of July Corridor, Sheikh Zayed, Giza.
          </p>
          <p>
            <strong>Tel:</strong>+20 2 38278203
          </p>
          <p>
            <strong>Fax:</strong>+20 2 38278299
          </p>
        </div>
        <div className="accordion">
          <div className="card-header">
            <div className="form-title">
              <h1>Feedback</h1>
            </div>
          </div>
          <div className="collapse">
            <input type="text" name="name" className="input-data" placeholder="Your Name" />
            <input type="tel" name="phone" className="input-data" placeholder="Your Phone Number" />
            <input type="email" name="email" className="input-data" placeholder="Your Email" />
            <div class="form-input">
              <input type="file" name="file" placeholder="Choose Image" />
              <p>
                Please Enter the Image With the Expiration Date & Batch Number.
              </p>
            </div>
            <textarea
              type="text"
              name="message"
              e-type="required"
              placeholder="Send"
            ></textarea>
            <button className="send-btn">Send</button>
            <button>Export Contact</button>
            <button>Local Contact</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
