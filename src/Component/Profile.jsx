import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Profile = ()=>{
    return(
        <div className="flex mt-[50px] ">
        <div className="ml-[300px] h-80 w-80 md:h-200 md:w-200 mb-8 md:mb-0">
                    <img src="./ItsMe-removebg-preview.png" alt="Bishnupada Kamila" className="w-full h-auto" />
                </div>
        <div className="flex flex-col lg:flex-row text-white ml-[20px] lg:ml-[100px] mt-[80px]">
          {/* Contact Info Section */}
          <div
            className="mb-6 lg:mb-0 lg:mr-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl ml-[26px]">Bishnupada Kamila</h1>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#B197FC" }} />
              <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">bishnupadakamila07@gmail.com</h2>
            </div>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">8596097739</h2>
            </div>
            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f7f7f8" }} />
              <h2 className="ml-[10px] mt-[-5px] text-lg sm:text-xl">Bhubaneswar, Odisha</h2>
            </div>
            <div className="flex items-center mt-4">
              <h2 className="ml-[25px] mt-[-5px] text-lg sm:text-xl">Pin:- 756034</h2>
            </div>
          </div>
  
          
        </div>
      </div>
    )
}
export default Profile