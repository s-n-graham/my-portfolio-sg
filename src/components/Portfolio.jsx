import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center transition duration-300
      ease-in-out hover:scale-105 ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio;