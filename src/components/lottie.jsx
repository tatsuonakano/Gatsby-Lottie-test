import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';
import animationData from '../lottie-json/44037-gatsby.json';

const Lottie = () => {
  
  let animationContainer = createRef();
  let anim = null;
  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: animationData
    });
    return () => anim.destroy(); 
  }, []);
  function handleStop() {
    anim.pause();
  }
  function handleStart() {
    anim.play();
  }
  return (
          <div onMouseEnter={handleStart} onMouseLeave={handleStop}>
            <div ref={animationContainer}></div>
          </div>
  );
};
export default Lottie;