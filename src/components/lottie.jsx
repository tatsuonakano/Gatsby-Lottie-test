import React, { createRef, useEffect } from "react";
import lottie from 'lottie-web';
import animationData from '../lottie-json/44037-gatsby.json/';
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
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  function handleStop() {
    anim.pause();
  }
  function handleStart() {
    anim.play();
  }
  return (
    <Layout>
      <SEO pathname={location.pathname} title={"About me"}/>
      <Section narrow >
        <HeadingContainer>
          <div onMouseEnter={handleStart} onMouseLeave={handleStop}>
            Hover me
            <HeroHeading ref={animationContainer}></HeroHeading>
          </div>
        </HeadingContainer>
      </Section>
    </Layout>
  );
};
export default Lottie;