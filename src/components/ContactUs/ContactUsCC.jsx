import React from "react";

const ContactUsCC = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px;" }}
          >
            <h1 className="mb-3">Contact Us</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-map-marker-alt text-primary"></i>
                      </div>
                      <span style={{ textAlign: "center" }}>
                        Kishanpura Road, Dhakoli, Zirakpur, Mohali, Punjab
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-envelope-open text-primary"></i>
                      </div>
                      <span>gngzirakpur@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-phone-alt text-primary"></i>
                      </div>
                      <span>+91-7404804048</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                style={{ minHeight: "400px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe> */}
              <iframe
              className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3432.307714382743!2d76.84761107453326!3d30.65346238946125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDM5JzEyLjUiTiA3NsKwNTEnMDAuNyJF!5e0!3m2!1sen!2sin!4v1711017652762!5m2!1sen!2sin"
                style={{ minHeight: "400px", border: "0" }}
                allowfullscreen=""
                loading="lazy"
                aria-hidden="false"
                tabindex="0"
                frameborder="0"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                        <label for="name">First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                        <label for="email">Last Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="Mobile"
                          placeholder="Mobile No."
                          required
                        />
                        <label for="message">Mobile No.</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="Email"
                          placeholder="Email"
                          required
                        />
                        <label for="subject">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCC;
