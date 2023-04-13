import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto mt-10">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/99e6db7a-fc4f-4f94-ab94-d1766d8c9b4e"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none bg-white"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none bg-white"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none bg-white"
               />
               <div className='flex flex-col md:flex-row justify-center'>
               <button
                  type="submit"
                  className="
                  justify-center
                  bg-gradient-to-r from-cyan-500 to-emerald-500 to-90%
                  hover:from-cyan-400 hover:to-emerald-400
                  text-white font-bold border-b-4
                  border py-2 px-4 rounded inline-flex items-center"
               >
                  Let's talk!
               </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact;