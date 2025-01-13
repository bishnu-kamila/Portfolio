import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const UPMS = ()=>{

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
            <div
            data-aos="zoom-in-right"
            className=" h-[300px] w-[600px] ml-[100px] mt-[500px] "
            >
                <img src="./Screenshot 2024-09-26 171419.png" alt="" />

                <div data-aos="fade-left"
 className="flex mt-[50px] ml-[70px] text-2xl font-bold">
    
        <button className="bg-yellow-500 rounded-[20px] py-2 px-4">Source-Code</button>
    
        <button className="ml-[40px] bg-yellow-500 rounded-[20px] py-2 px-4">Open</button>
    
</div>
            </div>

                

            <div className="text-white ml-[100px] mt-[200px] ">
                <h1
                data-aos="zoom-in-left"
                className="text-4xl font-bold">University Placement Management System</h1>
                <p 
                data-aos="zoom-in-right"
                className="w-[700px] mt-[50px] text">
                The University Placement Management System is a full-stack web application designed to streamline the process of managing campus recruitment activities. Built with Advanced Java JSP/Servlets for the backend, HTML, CSS, and JavaScript for the frontend, and MySQL as the database, the system aims to automate and simplify the placement process for students, administrators, and company HR.
                </p>
                <h1
                data-aos="zoom-up-right"
                className="ml-[20px]">Admin Module:</h1>
                <ul>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Manage student registrations, placements, and companies.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Schedule placement drives, interviews, and manage results.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Monitor system activity and generate reports.</li>
                </ul>
                <h1 
                data-aos="zoom-up-right"
                className="ml-[20px]">Student Module (User):</h1>
                <ul>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Students can register, update profiles, and apply for jobs.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• View scheduled placement drives, eligibility criteria, and application statuses.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Receive notifications about upcoming interviews and results.</li>
                </ul>
                <h1 
                data-aos="zoom-up-right"
                className="ml-[20px]">Company HR Module:</h1>
                <ul>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Company representatives can register and post job openings.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Shortlist candidates based on profiles and schedule interviews.</li>
                    <li 
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Manage interview results and offer letters.</li>
                </ul>
                <h1 
                data-aos="zoom-up-right"
                className="ml-[20px]">Workflow:</h1>
                <ul>
                    <li
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Admin: Admin manages students, companies, and placement activities.</li>
                    <li
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Student (User): Students log in, manage their profiles, and apply for jobs.</li>
                    <li
                    data-aos="zoom-in-right"
                    className="ml-[50px]">• Company HR: Company representatives post job details, review applicants, and manage placement outcomes.</li>
                </ul>

                <div 
                data-aos="fade-up-right"
                className="flex text-2xl font-bold mt-[30px]">
                    <h1 className="ml-[25px]">Technology: -</h1>
                    <h2 className="ml-[25px]">Adv. Java</h2>
                    <h2 className="ml-[25px]">Html</h2>
                    <h2 className="ml-[25px]">Css</h2>
                    <h2 className="ml-[25px]">JavaScript</h2>
                    <h2 className="ml-[25px]">MySql</h2>
                </div>
            </div>
        </div>

        <div className="w-[1200px] h-[12px] ml-[150px] mt-[70px] bg-white rounded-2xl"></div>
        </>
    )
}
export default UPMS;