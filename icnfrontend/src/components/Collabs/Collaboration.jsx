import React from 'react';
import Icon from '../../assets/Icon.png';
import './Collaboration.css';

const Collaboration = () => {
 
  const email = "abheytyagi010@gmail.com"; 

  const handleCollabClick = () => {
    window.location.href = `mailto:${email}?subject=Collaboration Request&body=Hi, I would like to collaborate with you.`;
  };

  return (
    <div>     
      <section className="max-w-full px-4 py-12 mx-auto bg-gray-800 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
            Used by leading, innovative home builders and renovators.
          </h2>
          <p className="text-2xl font-extrabold mt-3 leading-7 text-white sm:mt-4">
            Feel confident in choosing us.
          </p>
        </div>

        <div className='collabs flex flex-row justify-center items-center'>
          <img src={Icon} alt='Icon' className='w-52 h-52'/>
          <img src={Icon} alt='Icon' className='w-52 h-52'/>
          <img src={Icon} alt='Icon' className='w-52 h-52'/>
        </div>

        <div className="flex p-4 mx-auto mt-4 w-52">
          <button 
            type="button" 
            onClick={handleCollabClick} 
            className="w-full px-4 py-2 text-base font-semibold rounded-lg text-center text-white transition duration-200 ease-in shadow-md bg-gradient-to-r from-green-600 to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Collab with us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;