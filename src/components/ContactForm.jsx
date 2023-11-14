import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="grid gap-4">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                name="hs-firstname-contacts-1"
                id="hs-firstname-contacts-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                name="hs-lastname-contacts-1"
                id="hs-lastname-contacts-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Last Name"
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
              name="hs-email-contacts-1"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email"
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
              name="hs-about-contacts-1"
              rows="4"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Details"
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
