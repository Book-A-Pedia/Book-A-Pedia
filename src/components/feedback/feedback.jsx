import React from 'react';
 export default function feedback() {

    return(
   

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          Tell us what you think about us and our services. Your feedback is very important to us and we read every message that we receive.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-indigo-600">
            Your Feedback matters !!
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="https://formcarry.com/s/_r8w2P-aTg" method="POST" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="firstName"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            
          </div>

          

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="anotherInput" 
            ></input>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-indigo-800 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
 }


