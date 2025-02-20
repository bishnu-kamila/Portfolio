import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-12 px-4">
      <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-6 md:mb-0">
        <img
          src="./ItsMe-removebg-preview.png"
          alt="Bishnupada Kamila"
          className="w-full h-auto rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col text-white text-center md:text-left ml-0 md:ml-6 lg:ml-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Bishnupada Kamila
        </h1>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-400 text-lg sm:text-xl" />
            <h2 className="text-lg sm:text-xl">bishnupadakamila07@gmail.com</h2>
          </div>

          

          <div className="flex items-center justify-center md:justify-start space-x-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-300 text-lg sm:text-xl" />
            <h2 className="text-lg sm:text-xl">Bhubaneswar, Odisha</h2>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <FontAwesomeIcon icon={faLocationDot} />
            <h2 className="text-lg sm:text-xl ml-[15px]">Pin: 756034</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
