import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Parking = () => {
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
    <>
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-16 mt-20">
        {/* Text Content */}
        <div className="text-white lg:w-2/3 mb-10 lg:mb-0">
          <h1
            data-aos="zoom-out"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left"
          >
            Parking Management System
          </h1>
          <p
            data-aos="fade-right"
            className="text-lg mt-5 text-center lg:text-left"
          >
            A Parking Management System is a solution designed to streamline
            and automate the process of managing parking spaces. It helps in the
            efficient use of parking areas, whether in commercial, residential,
            or public spaces. Here's a brief overview of its core functions
          </p>
          <h2
            data-aos="fade-up"
            className="mt-6 text-xl sm:text-2xl font-bold text-center lg:text-left"
          >
            Key features include:
          </h2>

          <ul
            data-aos="fade-left"
            className="mt-4 ml-6 list-disc text-lg text-center lg:text-left"
          >
            <li>a. Automated Entry & Exit</li>
            <li>b. Real-Time Space Availability</li>
            <li>c. Security Monitoring</li>
            <li>d. Data Analytics</li>
            <li>e. Mobile App Integration</li>
          </ul>
          <p
            data-aos="fade-right"
            className="mt-4 text-lg text-center lg:text-left"
          >
            This system is widely used in shopping malls, airports, hospitals,
            offices, and city parking facilities to optimize parking space
            utilization and reduce congestion.
          </p>
          <div
            data-aos="fade-up-right"
            className="flex flex-wrap justify-center lg:justify-start mt-6 text-lg sm:text-2xl"
          >
            <h1 className="font-bold mr-4">Technology Used: </h1>
            <h1 className="font-bold ml-2">Java</h1>
            <h1 className="font-bold ml-2">Swing</h1>
            <h1 className="font-bold ml-2">JFrame</h1>
            <h1 className="font-bold ml-2">MySQL</h1>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-wrap justify-center lg:justify-start mt-8 text-xl font-bold"
          >
            <button className="bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
              Source Code
            </button>
            <button className="ml-6 bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
              Open
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div data-aos="zoom-in-left">
            <img
              className="h-auto w-[80%] lg:w-[100%] rounded-lg"
              src="./Screenshot 2024-10-05 193942.png"
              alt="Parking System Screenshot"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[12px] bg-white rounded-2xl mt-16"></div>
    </>
  );
};

export default Parking;
