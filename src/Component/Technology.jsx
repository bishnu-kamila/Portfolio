import { faCss3Alt, faHtml5, faJava, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const Technology = () => {
  return (
    <div >
      <h1 data-aos="zoom-out-down"
      // variants={fadeIn("up",0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{once: false, amount: 0.7}}
      className="ml-[630px] mt-[200px] text-white text-5xl">Technologies</h1>
      <div data-aos="zoom-out-up" className="flex ml-[380px] mt-[100px]">
        <FontAwesomeIcon icon={faJava} style={{color: "#f43434",}} size="3x" />
        <img src="./spring-boot-logo.png" alt="" className="h-15 w-20 ml-[40px]" />
        <FontAwesomeIcon icon={faC} style={{color: "#74C0FC",}} size="3x" className="ml-[40px]"/>
        <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} size="3x" className="ml-[40px]" />
        <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} size="3x" className="ml-[40px]"/>
        <FontAwesomeIcon icon={faHtml5} style={{color: "#f56147",}} size="3x" className="ml-[40px]"/>
        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#4827ec",}} size="3x" className="ml-[40px]"/>
        <FontAwesomeIcon icon={faC} style={{color: "#74C0FC",}} size="3x" className="ml-[40px]"/>
        <FontAwesomeIcon icon={faNode} style={{color: "#74C0FC",}} size="3x" className="ml-[40px]"/>
        <img src="./sql-removebg-preview.png" alt="" className="h-12 w-15 ml-[40px]"/>
      </div>
    </div>
  );
};

export default Technology;
