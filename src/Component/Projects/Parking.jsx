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
            <div className="text-white w-[630px] ml-[100px]">
                <h1
                className="data-aos=zoom-in-left font-bold text-4xl ml-[30px] mt-[70px] "
                >ParkingManagementSystem</h1>
                <div className="mt-[30px]">
                    Make easy and safe Parking in online mode In this project we have the Admin , User and Security. Admin
                    have the Access to allow user account and allow for Vehicle Registration . User Create account and Modify
                    Profile then ask permission for Parking Security have the access to allow the Vehicle at the time of Vehicle
                    Registration and Give the permission to the user for parking in every day
                </div>
            </div>
            <div className="w-[1200px] h-[12px] ml-[150px] mt-[150px] bg-white rounded-2xl"></div>
        </>
    )
}
export default Parking;