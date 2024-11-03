import React from "react"
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import Technology from "./Technology"
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Projects/Projects";
import UPMS from "./Projects/UPMS";
import Education from "./Education";
import Footer from "./Footer";
import Parking from "./Projects/Parking";

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


    return(
        <>
        <div className="flex ml-48 mt-28">
        <div class="h-200 w-200  ">
            <img data-aos="zoom-out-right" src="./src/Image/ItsMe-removebg-preview.png" alt="" />
        </div>
        <div className="ml-20 mt-8">
            <motion.h1
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="font-serif text-white text-6xl">
                I am<br></br> Bishnupada Kamila
            </motion.h1>
            <motion.p
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            class="font-sans text-white text-xl mt-6 w-[600px]">
                Skilled in Fullstack Development based on the tech stack: 
                Java, SpringBoot, React, Angular, Node, Express, MySQL, MongoDB.
                I am proficient in various programming languages and technologies.
            </motion.p>
            <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            class="flex items-center space-x-10 mt-[80px]">
            <a
        href="./src/Component/Bishnupada Kamila(CV).pdf" // Update with your PDF path
        download="Bishnupada Kamila"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </a>
                <a href="https://github.com/bishnu-kamila"><img src="./src/Image/Git.png" alt="" class="h-10 w-10" /></a>
                <a href="https://www.linkedin.com/in/bishnupada-kamila-a16a19256"><img src="./src/Image/LinkedIn.webp" alt="" class="h-10 w-10" /></a>
                <a href="https://www.hackerrank.com/profile/bishnu_kamila_1"><img src="./src/Image/HackerRank.webp" alt="" class="h-10 w-10" /></a>
                <a href="https://www.codechef.com/users/bishnukamila1"><img src="./src/Image/Twiter.png" alt="" class="h-10 w-10" /></a>
            </motion.div>

        </div>
        
        
        </div>
        <Technology/>
        <Education/>
        <Projects/>
        <UPMS/>
        <Parking/>
        </>
        
    )
}
export default Me