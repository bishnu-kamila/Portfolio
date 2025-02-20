import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-12 px-4 text-white">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          Bishnupada Kamila
        </h1>

        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
            <h2>bishnupadakamila07@gmail.com</h2>
          </div>
          

          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>Bhubaneswar, Odisha</h2>
          </div>
          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>752050</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
