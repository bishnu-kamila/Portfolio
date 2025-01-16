import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
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
      <div className="px-4 lg:px-16 mt-20">
        <h1
          data-aos="zoom-in"
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left"
        >
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row mt-10">
          {/* Text Content */}
          <div className="text-white w-full lg:w-2/3 lg:ml-16">
            <h1
              data-aos="zoom-out"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 lg:mt-0"
            >
              Hostel Management System
            </h1>
            <p
              data-aos="fade-right"
              className="text-white mt-6 text-lg lg:text-xl"
            >
              It is a Full-stack Project that manages Hostel online mode, like
              Registration and Login with Security Authentication. Then we have
              Admin, Student, Canteen, Warden, and Laundry. The Admin has all
              the access like Add or Remove all the Models, then Manipulate
              Notifications. Warden has some access like Student Profile and
              Notification, then other models have their own access. Students
              easily create an account and update the Profile, Check Notification
              and update Canteen allowance and Laundry necessity. Security
              authentication, Admin Dashboard, Student, Warden, Canteen, and
              Laundry Control. The Hostel Management System is a full-stack web
              application designed to efficiently manage hostel operations.
              It uses Spring Boot for the backend to handle business logic, data
              processing, and API endpoints. The frontend is developed with React,
              providing a dynamic and responsive user interface for users to
              interact with the system. The application connects to a MySQL
              database for managing hostel-related data, such as room allocations,
              student records, and payments.
            </p>
            <h2
              data-aos="fade-up"
              className="mt-6 text-xl sm:text-2xl font-bold"
            >
              Key features include:
            </h2>

            <ul
              data-aos="fade-left"
              className="mt-4 ml-6 text-lg sm:text-xl list-disc"
            >
              <li>a. Room allocation and availability management.</li>
              <li>b. Student registration and profile management.</li>
              <li>c. Fee tracking and payment history.</li>
              <li>d. Admin dashboard for monitoring hostel activities.</li>
              <li>e. Secure user authentication and authorization.</li>
              <li>f. Warden control candidate entry and exit, leave, profile update.</li>
              <li>g. Canteen service.</li>
              <li>h. Laundry service book and getService.</li>
            </ul>
            <p
              data-aos="fade-right"
              className="mt-6 text-lg sm:text-xl"
            >
              This system aims to streamline hostel management processes,
              ensuring ease of use for both administrators and residents.
            </p>

            <div
              data-aos="fade-up-right"
              className="flex flex-wrap justify-center lg:justify-start mt-8 text-xl sm:text-2xl"
            >
              <h1 className="font-bold mr-4">Technology Used: </h1>
              <h1 className="font-bold ml-2">SpringBoot</h1>
              <h1 className="font-bold ml-2">React</h1>
              <h1 className="font-bold ml-2">Tailwind CSS</h1>
              <h1 className="font-bold ml-2">MySQL</h1>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mt-8 lg:mt-0">
            <div
              data-aos="zoom-in-left"
              className="w-[80%] lg:w-[100%] flex justify-center"
            >
              <img
                className="h-auto w-[100%] rounded-lg"
                src="./Screenshot 2024-09-26 135345.png"
                alt="Hostel Management System Screenshot"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-left"
          className="flex justify-center lg:justify-start mt-12 text-2xl font-bold"
        >
          <a href="https://github.com/bishnu-kamila/HostelManagementSystem">
            <button className="bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
              Source Code
            </button>
          </a>

          <button className="ml-6 bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
            Open
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[12px] bg-white rounded-2xl mt-16"></div>
    </>
  );
};

export default Projects;
