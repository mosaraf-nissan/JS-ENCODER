import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zah17cs",
        "template_r5gixbu",
        form.current,
        "1WdlL2cTdgo7zX2s5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid gap-4">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="hs-firstname-contacts-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Name"
                required
              />
            </div>
          </div>
          {/* <!-- End Grid --> */}

          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="hs-phone-number-1" className="sr-only">
              Phone Number
            </label>
            <input
              type="text"
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              id="hs-about-contacts-1"
              name="message"
              rows="4"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Details"
              required
            ></textarea>
          </div>
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-4 grid">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4C96DF] text-white hover:bg-[#258aef] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Send inquiry
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
