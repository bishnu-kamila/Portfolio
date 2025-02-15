import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="text-white px-4 md:px-16 lg:px-32 py-16 ml-[500px]">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          Bishnupada Kamila
        </h1>

        {/* Contact Information */}
        <div className="mt-8 space-y-4">
          {/* Email */}
          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
            <h2>bishnupadakamila07@gmail.com</h2>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <h2>8596097739</h2>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3 text-lg sm:text-xl">
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>Bhubaneswar, Odisha</h2>
          </div>

          {/* Pin Code */}
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
