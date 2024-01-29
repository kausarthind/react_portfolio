/* 
 * File: Contacts.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { Link } from "react-router-dom";
import SocialIcons from "../components/Social"
import ContactQuote from "../components/ContactQuote"

export const Contacts = () => {
  return (
    <section className="contact-wrapper">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

        {/* Contact information section */}
        <div className="lg:col-span-2 lg:py-12">
          <ContactQuote/>

          <div className="mt-10 text-center">
            <div className="flex flex-col">
              <a href="tel:+14373282800" className="text-xl text-blue">
                +1 4373 282 800
              </a>
              <a href="mailto:Kausarthind555@gmail.com" className="text-xl  text-blue">
              Kausarthind555@gmail.com
              </a>
            </div>
            <SocialIcons/>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-md bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                className="w-full rounded-md border-gray p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  className="w-full rounded-md border-gray p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  className="w-full rounded-md border-black p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>

              <textarea
                className="w-full rounded-md border-gray-dark p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="mt-4">
              <button
                type="button"
                className="inline-block w-full rounded-md bg-blue px-5 py-3 font-medium text-kwhite sm:w-auto"
              >
                <Link to="/">Send Enquiry</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}


export default Contacts;

