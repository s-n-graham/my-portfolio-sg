import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Buttons from './components/buttons';


function App() {

  return (
	<>
		<main className="static max-w-5xl w-11/12 mx-auto bg-white"><Header />
			<Portfolio />
			<Buttons name={'My Resume'}/>
			<Timeline />
			<Contact />
			<Footer />
		</main>	
	</>
  )
}

export default App

{/* <div className="absolute"><Portfolio /></div>
max-w-5xl w-11/12 mx-auto

container py-12 bg-gray-100 rounded-2xl
bx-container-margin mt-6 py-4
*/}