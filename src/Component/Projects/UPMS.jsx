import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UPMS = () => {
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
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 mt-10">
        <div
          data-aos="zoom-in-right"
          className="flex justify-center lg:flex-1 lg:max-w-[50%]"
        >
          <img
            className="h-auto w-full max-w-[600px] rounded-lg"
            src="./Screenshot 2024-09-26 171419.png"
            alt="UPMS"
          />
        </div>

        <div className="text-white lg:flex-1 lg:max-w-[50%] lg:ml-16 mt-8 lg:mt-0">
          <h1
            data-aos="zoom-in-left"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            University Placement Management System
          </h1>
          <p
            data-aos="zoom-in-right"
            className="mt-6 text-lg sm:text-xl"
          >
            The University Placement Management System is a full-stack web
            application designed to streamline the process of managing campus
            recruitment activities. Built with Advanced Java JSP/Servlets for
            the backend, HTML, CSS, and JavaScript for the frontend, and MySQL
            as the database, the system aims to automate and simplify the
            placement process for students, administrators, and company HR.
          </p>

          <h1
            data-aos="zoom-up-right"
            className="mt-8 text-xl sm:text-2xl font-bold"
          >
            Admin Module:
          </h1>
          <ul className="ml-6 text-lg sm:text-xl">
            <li data-aos="zoom-in-right">
              • Manage student registrations, placements, and companies.
            </li>
            <li data-aos="zoom-in-right">
              • Schedule placement drives, interviews, and manage results.
            </li>
            <li data-aos="zoom-in-right">
              • Monitor system activity and generate reports.
            </li>
          </ul>

          <h1
            data-aos="zoom-up-right"
            className="mt-8 text-xl sm:text-2xl font-bold"
          >
            Student Module (User):
          </h1>
          <ul className="ml-6 text-lg sm:text-xl">
            <li data-aos="zoom-in-right">
              • Students can register, update profiles, and apply for jobs.
            </li>
            <li data-aos="zoom-in-right">
              • View scheduled placement drives, eligibility criteria, and
              application statuses.
            </li>
            <li data-aos="zoom-in-right">
              • Receive notifications about upcoming interviews and results.
            </li>
          </ul>

          <h1
            data-aos="zoom-up-right"
            className="mt-8 text-xl sm:text-2xl font-bold"
          >
            Company HR Module:
          </h1>
          <ul className="ml-6 text-lg sm:text-xl">
            <li data-aos="zoom-in-right">
              • Company representatives can register and post job openings.
            </li>
            <li data-aos="zoom-in-right">
              • Shortlist candidates based on profiles and schedule interviews.
            </li>
            <li data-aos="zoom-in-right">
              • Manage interview results and offer letters.
            </li>
          </ul>

          <h1
            data-aos="zoom-up-right"
            className="mt-8 text-xl sm:text-2xl font-bold"
          >
            Workflow:
          </h1>
          <ul className="ml-6 text-lg sm:text-xl">
            <li data-aos="zoom-in-right">
              • Admin: Admin manages students, companies, and placement
              activities.
            </li>
            <li data-aos="zoom-in-right">
              • Student (User): Students log in, manage their profiles, and
              apply for jobs.
            </li>
            <li data-aos="zoom-in-right">
              • Company HR: Company representatives post job details, review
              applicants, and manage placement outcomes.
            </li>
          </ul>

          <div
            data-aos="fade-up-right"
            className="flex flex-wrap text-lg sm:text-xl font-bold mt-8"
          >
            <h1 className="mr-4">Technology:</h1>
            <h2 className="mr-4">Adv. Java</h2>
            <h2 className="mr-4">HTML</h2>
            <h2 className="mr-4">CSS</h2>
            <h2 className="mr-4">JavaScript</h2>
            <h2 className="mr-4">MySQL</h2>
          </div>

          <div
            data-aos="fade-left"
            className="flex justify-center lg:justify-start mt-8 text-2xl font-bold"
          >
            <a href="https://github.com/bishnu-kamila/Placement_Management_System"><button className="bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
              Source Code
            </button></a>
            <button className="ml-6 bg-yellow-500 rounded-2xl py-2 px-6 mb-4 lg:mb-0">
              Open
            </button>
          </div>
        </div>
      </div>

      <div className="ml-[30px] w-[1450px] h-[10px] bg-white rounded-2xl mt-16"></div>
    </>
  );
};

export default UPMS;
