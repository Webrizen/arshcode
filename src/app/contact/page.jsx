import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <>
      <div className="p-3">
        <h1 className="text-4xl font-bold mb-3">Contact me</h1>
        <p>
          On a mission to build products consumers love, and along the way,
          teach the next generation of consumers. Here's a summary of my work so
          far.
        </p>
        <hr className="my-5 w-3xl mx-auto" />
        <div className="w-full py-4 mx-auto flex flex-col gap-3">
            <div className="w-full min-h-[300px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30772951.866256353!2d61.04184026120082!3d19.69286641597507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1704094447593!5m2!1sen!2sin"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                  I proudly hail from India, a land of diverse cultures, rich history, and vibrant traditions.
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a href="mailto:webrizen@gmail.com" className="text-indigo-500 leading-relaxed">
                    webrizen@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    Twitter(X)
                  </h2>
                  <a href="https://twitter.com/Arshahdul_Ahmed" className="leading-relaxed text-indigo-500">@Arshahdul_ahmed</a>
                </div>
              </div>
            </div>
            <div className="w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact me
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                you know what, it's better to connect via twitter or instagram rather than filling this boring form.
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <Button>
                Send
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                your data will be stored in formsubmit.io database via Gmail SMTP server.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
