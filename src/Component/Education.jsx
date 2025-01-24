import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className="w-full px-4 mt-20 ml-[200px]">
      {/* Section for Education */}
      <div className="text-white font-bold italic text-3xl sm:text-4xl md:text-5xl">
        <div
          data-aos="fade-down"
          className="flex items-center justify-center md:justify-start space-x-4"
        >
          <FontAwesomeIcon icon={faGraduationCap} size="2x" />
          <h1 className="ml-2 text-lg sm:text-xl">BSc : </h1>
          <h1 className="text-lg sm:text-xl">FakirMohon University, Balasore</h1>
        </div>
        <div
          data-aos="fade-up"
          className="ml-[30px] flex items-center justify-center md:justify-start mt-8 space-x-4"
        >
          <img className="h-12 w-12 sm:h-16 sm:w-16" src="./Master.png" alt="MCA" />
          <h1 className="ml-[50px] text-lg sm:text-xl">MCA : </h1>
          <h1 className="text-lg sm:text-xl">
            Centurion University of Technology and Management, Bhubaneswar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
