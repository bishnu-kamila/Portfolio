import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Parking = ()=>{

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
            <div className="flex">
        <div className="text-white ml-[100px] mt-[70px] w-[670px]">
            <h1 
             data-aos="zoom-out"
            className="text-4xl ml-[100px] font-bold">Parking Management System</h1>
            <p 
            data-aos="fade-right"
            className="text-white  mt-[25px]">
            A Parking Management System is a solution designed to streamline and automate the process of managing parking spaces. It helps in the efficient use of parking areas, whether in commercial, residential, or public spaces. Here's a brief overview of its core functions
            </p>
            <h1 
            data-aos="fade-up"
            className="mt-[15px] text-xl">Key features include:</h1>

            <ul 
            data-aos="fade-left"
            className="mt-[15px] ml-[30px]">
                <li>a. Automated Entry & Exit</li>
                <li>b. Real-Time Space Availability</li>
                <li>c. Security Monitoring</li>
                <li>d. Data Analytics</li>
                <li>e. Mobile App Integration</li>
            </ul>
            <p data-aos="fade-right">This system is widely used in shopping malls, airports, hospitals, offices, and city parking facilities to optimize parking space utilization and reduce congestion</p>
            <div 
            data-aos="fade-up-right"
            className="flex text-white mt-[30px] text-2xl">
                <h1 className="ml-[1px] font-bold">Technology Use: -</h1>
                <h1 className="ml-[15px] font-bold">Java</h1>
                <h1 className="ml-[20px] font-bold">Swing</h1>
                <h1 className="ml-[20px] font-bold">JFrame</h1>
                <h1 className="ml-[20px] font-bold">MySql</h1>
            </div>
        </div>
        <div>
        <div 
        data-aos="zoom-in-left"
        className="ml-[100px] mt-[200px] ">
            <img className=" h-[400px] w-[600px]" src="./src/Image/Screenshot 2024-10-05 193942.png" alt="" />
        </div>
        </div>
        </div>
        </>
    )
}
export default Parking;