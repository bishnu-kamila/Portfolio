import { faCss3Alt, faHtml5, faJava, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Technology = () => {
  return (
    <div className="w-full px-4">
      {/* Title Section */}
      <h1
        data-aos="zoom-out-down"
        className="text-center text-white text-4xl sm:text-5xl md:text-6xl mt-20 mb-10"
      >
        Technologies
      </h1>

      {/* Icons Section */}
      <div data-aos="zoom-out-up" className="flex flex-wrap justify-center gap-8">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faJava} style={{ color: "#f43434" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <img src="./spring-boot-logo.png" alt="Spring Boot" className="h-15 w-20" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faC} style={{ color: "#74C0FC" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faHtml5} style={{ color: "#f56147" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#4827ec" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faNode} style={{ color: "#74C0FC" }} size="3x" />
        </div>

        <div className="flex justify-center items-center">
          <img src="./sql-removebg-preview.png" alt="SQL" className="h-12 w-15" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
