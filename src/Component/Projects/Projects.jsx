import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ()=>{
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
        <div>
        <h1 
        data-aos="zoom-in"
        className="text-white text-6xl ml-[700px] mt-[100px] font-bold">Projects</h1>
        <div className="flex">
        <div className="text-white ml-[100px] mt-[70px] w-[670px]">
            <h1 
             data-aos="zoom-out"
            className="text-4xl ml-[100px] font-bold">Hostel Management System</h1>
            <p 
            data-aos="fade-right"
            className="text-white  mt-[25px]">
            It is a Full-stack Project that manage Hostel online mode, like Registration and Login with Security Authentication Then we have Admin, Student that is user , Canteen, Warden , Laundry . Admin have all the access like Add or Remove all the Models , then Manipulate Notification . Warden have some access like Student Profile and Notification then other models have there own access. Student easily create account and update Profile, Check Notification and update Canteen allowance and Laundry necessity .Security authentication , Admin Dashboard, Student, Warden, Canteen, Laundry Control<br></br>
            The Hostel Management System is a full-stack web application designed to efficiently manage hostel operations. It uses Spring Boot for the backend to handle business logic, data processing, and API endpoints. The frontend is developed with React, providing a dynamic and responsive user interface for users to interact with the system. The application connects to a MySQL database for managing hostel-related data, such as room allocations, student records, and payments.
            </p>
            <h1 
            data-aos="fade-up"
            className="mt-[15px] text-xl">Key features include:</h1>

            <ul 
            data-aos="fade-left"
            className="mt-[15px] ml-[30px]">
                <li>a. Room allocation and availability management.</li>
                <li>b. Student registration and profile management.</li>
                <li>c. Fee tracking and payment history.</li>
                <li>d. Admin dashboard for monitoring hostel activities.</li>
                <li>e. Secure user authentication and authorization.</li>
                <li>f. Warden control candidate entry and exit, leave, profile update also</li>
                <li>g. Canteen service</li>
                <li>h. Laundry service book and getService </li>
            </ul>
            <p data-aos="fade-right">This system aims to streamline hostel management processes, ensuring ease of use for both administrators and residents.</p>
            <div 
            data-aos="fade-up-right"
            className="flex text-white mt-[30px] text-2xl">
                <h1 className="ml-[1px] font-bold">Technology Use: -</h1>
                <h1 className="ml-[15px] font-bold">SpringBoot</h1>
                <h1 className="ml-[20px] font-bold">React</h1>
                <h1 className="ml-[20px] font-bold">Telwind_Css</h1>
                <h1 className="ml-[20px] font-bold">MySql</h1>
            </div>



        </div>
        <div>
        <div 
        data-aos="zoom-in-left"
        className=" h-[300px] w-[600px] ml-[100px] mt-[200px] ">
            <img src="./Screenshot 2024-09-26 135345.png" alt="" />
        </div>
        <div data-aos="fade-left"
 className="flex mt-[250px] ml-[200px] text-2xl font-bold">
    
        <Link to="https://github.com/bishnu-kamila/HostelManagementSystem"><button className="bg-yellow-500 rounded-[20px] py-2 px-4">Source-Code</button></Link>
    
        <button className="ml-[40px] bg-yellow-500 rounded-[20px] py-2 px-4">Open</button>
    
</div>
        </div>
        </div>

        

        </div>
        <div className="w-[1200px] h-[12px] ml-[150px] mt-[60px] bg-white rounded-2xl"></div>
        </>
    )
}
export default Projects;

