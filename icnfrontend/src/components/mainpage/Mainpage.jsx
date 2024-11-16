import React from 'react';
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";
import { useNavigate } from 'react-router-dom';
import PageTransition from '../pagemotion/Pagemotion';

const Mainpage = () => {
  const [transitioning, setTransitioning] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {

    setTransitioning(true);

    setTimeout(() => {
      navigate('/homepage');
    }, 500);
  };

  return (
    <PageTransition in={!transitioning}>
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <Boxes />
      <h1 className={cn("md:text-6xl text-3xl font-bold text-white relative z-30")}>
        Intelligent Cyber Nation
      </h1>
      <p className="text-center mt-4 text-neutral-300 text-2xl font-semibold relative z-30">
        CONVERT DATA INTO WISDOM
      </p>
      <button
      id="navigate-button"
      className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none 
      focus:ring focus:ring-violet-300 font-bold text-white relative z-30
      mt-4 px-4 py-2 border border-transparent rounded-full" 
      onClick={handleClick} >
      Move with us
      </button>
    </div>
    </PageTransition>
  );
};

export default Mainpage;
