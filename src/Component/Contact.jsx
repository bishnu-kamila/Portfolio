import React from "react"
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return(
        <div className="text-white ml-[500px] mt-[200px] font-bold text-4xl">
            <motion.div
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
            <h1 className="ml-[45px]">Bishnupada Kamila</h1>
            <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#B197FC",}} />
            <h2 className="ml-[10px] mt-[-5px]">bishnupadakamila07@gmail.com</h2>
            </div>
            <div className="flex">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <h2 className="ml-[10px] mt-[-5px]">8596097739</h2>
            </div>
            <div className="flex">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#f7f7f8",}} />
            <h2 className="ml-[10px] mt-[-5px]">Bhubaneswar, Odisha</h2>
            </div>
            <div className="flex">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#f7f7f8",}} />
            <h2 className="ml-[10px] mt-[-5px]">752050</h2>
            </div>
            </motion.div>
            <h1>Bishnu</h1>
        </div>
    )
}
export default Contact
