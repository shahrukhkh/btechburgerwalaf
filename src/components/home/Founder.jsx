import React from 'react';
import{motion} from "framer-motion";
import me from "../../assets/founder.webp"

const Founder = () => {
  const options={
    initial:{x:"-100%",
    opacity:0,},
  
  whileInView:{
    x:0,
    opacity:1,
  },
  };
  return (
    <section className='founder'>
    <motion.div
    {...options}>

      <img src={me} alt="Founder" height={200} width={200} />
      <h3>Shah Rukh Khan</h3>

      <p>Hey, Everyone I am Shah Rukh Khan , The founder of BTECH Burger Wala.
      <br />
      Our aim is to prepare the most tasty burger on planet.
      </p> <br />
    </motion.div>

    </section>
  );
};

export default Founder;
