import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import AOS from "aos";
import "aos/dist/aos.css";
import Technology from "./Technology";
import Education from "./Education";
import Projects from "./Projects/Projects";
import UPMS from "./Projects/UPMS";
import Parking from "./Projects/Parking";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHackerrank, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Me() {

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
            offset: 300,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center md:ml-48 mt-20 px-4">
                
                <div className="h-80 w-80 md:h-200 md:w-200 mb-8 md:mb-0">
                    <img data-aos="zoom-out-right" src="./ItsMe-removebg-preview.png" alt="Bishnupada Kamila" className="w-full h-auto" />
                </div>

                
                <div className="text-center md:text-left md:ml-20 mt-8">
                    <motion.h1
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="font-serif text-white text-4xl sm:text-5xl md:text-6xl">
                        I am<br /> Bishnupada Kamila
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="font-sans text-white text-lg sm:text-xl mt-6 w-full md:w-[600px]">
                        Skilled in Fullstack Development based on the tech stack: 
                        Java, SpringBoot, React, Angular, Node, Express, MySQL, MongoDB.
                        I am proficient in various programming languages and technologies.
                    </motion.p>

                    <div
                        
                        className="flex justify-center md:justify-start space-x-6 mt-8">
                        
                        <div className="flex justify-center md:justify-start space-x-6 mt-8">
                        <a
    href="/Bishnupada Kamila Resume.pdf"
    download="Bishnupada_Kamila_Resume"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Download PDF
</a>

<div className="flex space-x-4">
    <a href="https://github.com/bishnu-kamila" >
        
    <FontAwesomeIcon icon={faGithub} style={{color: "#FFD43B",}} className="h-10 w-10 block"/>
    </a>

    <a href="https://www.linkedin.com/in/bishnupada-kamila-a16a19256">
    <FontAwesomeIcon icon={faLinkedin} style={{color: "#FFD43B",}} className="h-10 w-10 block" />
    </a>

    <a href="https://www.hackerrank.com/profile/bishnu_kamila_1">
        
        <FontAwesomeIcon icon={faHackerrank} style={{color: "#FFD43B",}} className="h-10 w-10 block"  />
    </a>

    <a href="https://www.codechef.com/users/bishnukamila1">
    <FontAwesomeIcon icon={faTwitter} style={{color: "#FFD43B",}} className="h-10 w-10 block" />
    </a>
</div>

</div>




                    </div>
                </div>
            </div>

            {/* Sections */}
            <Technology />
            <Education />
            <Projects />
            <UPMS />
            <Parking />
            <Footer />
        </div>
    );
}

export default Me;
