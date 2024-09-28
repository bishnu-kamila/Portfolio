import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

import React from "react";
const Footer = ()=>{

   




    return(
        <>  
        <div
        
        className="flex text-white ml-[100px] mt-[80px]">
            <motion.div
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
            <h1 className="ml-[26px]">Bishnupada Kamila</h1>
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
            </motion.div>
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="text-white text-7xl font-bold ml-[100px]">
                <h1>That's all about Me</h1>
            </motion.div>
        </div>
        </>
    )
}
export default Footer;