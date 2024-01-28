/* 
 * File: Contacts.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { Link } from "react-router-dom";

export const Contacts = () => {
  return (
    <section className="contact-wrapper">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
            At the same time, the fact that we are wholly owned and totally independent from
            manufacturer and other group control gives you confidence that we will only recommend
            what is right for you.
          </p>

          <div className="mt-8">
            <a href="tel:01514754450" className="text-xl font-bold text-blue">
              0151 475 4450
            </a>

            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
          </div>
        </div>

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

