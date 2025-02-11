import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import React from "react";
import FinalTouch from "./FinalTouch";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-white ml-[20px] mb-[50px] lg:ml-[100px] mt-[80px]">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-6 lg:mb-0 lg:mr-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl ml-[26px]">Bishnupada Kamila</h1>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#B197FC" }} />
            <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">bishnupadakamila07@gmail.com</h2>
          </div>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">8596097739</h2>
          </div>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f7f7f8" }} />
            <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">Bhubaneswar, Odisha</h2>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mt-8 lg:mt-0"
        >
          <FinalTouch/>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
