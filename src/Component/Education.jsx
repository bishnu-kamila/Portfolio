import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () =>{
    return(
        <>
        <div className="text-white ml-[170px] mt-[200px] font-bold text-4xl">
        <div className="flex">
        <FontAwesomeIcon icon={faGraduationCap} />
            <h1 className="ml-[20px]">BSc : </h1>
            <h1>Fakir Mohon University,Balasore</h1>
        </div>
        <div className="flex mt-[30px] ">
            <img className="h-[50px] w-[50px]" src="./src/Image/Master.png" alt="" />
            <h1 className="ml-[15px]">MCA : </h1>
            <h1>Centurion university of Technology and Management, Bhubaneswar</h1>
        </div>
        </div>
        </>
    )
}
export default Education;