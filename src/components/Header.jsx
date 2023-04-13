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
            Haigh, hello ja hei! I'm a multifaceted and humble guy from Ireland&#9752;and the UK&#127984;! I've been finding my way in Finland for the last 6 years and counting, it's been quite the journey!
            I'm currently exploring frontend development with a growing appreciation for the cloud, integrations and backend sorcery. I know this is what I'd love to learn and do everyday; in this
            I can succeed.  
            <br />
            I could have stayed an entrepreneur in music and media but have chosen to enjoy that as a sidequest. I'm currently building a React, Redux TypeScript gym app to stay in shape but here are a few other things I've done.
         </p>
      </div>
   )
}

export default Header;