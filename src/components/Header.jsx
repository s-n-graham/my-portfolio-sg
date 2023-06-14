import React from 'react';
import portrait from '/selfsmall.jpg';

function Header() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <img class="inline-block h-36 w-36 rounded-full ring-2 transition duration-300
         ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 ring-white
         " src={portrait} alt="Logo" />
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold text-zinc-700 tracking-tighter">Simon Graham</h1>
         <p className="text-base md:text-xl mb-3 font-medium text-zinc-800">Developer / Designer</p>
         <p className="text-sm max-w-xl mb-6 text-zinc-500 font-sans">
            Haigh, hello ja hei! I'm a multifaceted and humble guy from Ireland&#9752;and the UK&#127984;! I've been finding my way in Finland for the last 8 years and counting
            where after graduation, gained solid working knowledge of software development and design, multicloud, some data analysis visualisation and integration backend sorcery.
            My lifelong talents and passion shine brightest with design, strategy and people but I'm highly capable elsewhere if needed.  
            <br />
            I have a decade of professional experience in audio, media and graphic design. I find these skills relevent to people around me so I'm happy to utilize them at work.
            I'm currently building a seperate UX/UI portfolio with Figma & React as of June 5th 2023.
         </p>
      </div>
   )
}

export default Header;
