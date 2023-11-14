import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

const ContactUs = () => {
  return (
    <div>
      {/* <!-- Contact Us --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              <span className="bg-clip-text bg-gradient-to-l from-[#6394C6] to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Contact{" "}
              </span>
              Us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              We&apos;d love to talk about how we can help you.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="max-w-[30rem] bg-gray-200 flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 dark:bg-slate-800">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-600">
                Fill in the form
              </h2>
              <ContactForm />
            </div>
            {/* <!-- End Card --> */}

            <div className="bg-gray-200 rounded-md dark:bg-slate-800">
              <div className="p-2">
                <h2 className="text-2xl font-bold dark:text-white">
                  Our Location
                </h2>
                <div className=" dark:text-white">
                  <p>
                    274/4 CHETONA TOWER, MIRPUR 60 FEET ROAD, MIRPUR, DHAKA-1216
                  </p>
                  <p>+8801972252777</p>
                  <p>info@jsencoder.com</p>
                  <p>hr.david@jsencoder.com (for career)</p>
                </div>
              </div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Us --> */}
    </div>
  );
};

export default ContactUs;
