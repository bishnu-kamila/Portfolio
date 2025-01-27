import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div className="ml-[250px] w-full px-4 mt-16 md:mt-20">
      {/* Section for Education */}
      <div className="text-white font-bold italic text-2xl sm:text-3xl md:text-4xl">
        {/* Bachelor's Degree Section */}
        <div
          data-aos="fade-down"
          className="flex flex-wrap items-center justify-center md:justify-start space-x-2 sm:space-x-4"
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-xl sm:text-2xl md:text-3xl"
          />
          <h1 className="text-base sm:text-lg md:text-xl">BSc:</h1>
          <h1 className="text-base sm:text-lg md:text-xl">
            FakirMohon University, Balasore
          </h1>
        </div>

        {/* Master's Degree Section */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-center md:justify-start mt-6 sm:mt-8 space-x-2 sm:space-x-4"
        >
          <img
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
            src="./Master.png"
            alt="MCA"
          />
          <h1 className="text-base sm:text-lg md:text-xl">MCA:</h1>
          <h1 className="text-base sm:text-lg md:text-xl">
            Centurion University of Technology and Management, Bhubaneswar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
