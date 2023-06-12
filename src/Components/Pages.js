import { Outlet, useLocation } from "react-router-dom";
import SideNav from "./Modals/Sidenav";
import styles from "../CSS/Pages.module.css";
import ChatModal from "./Modals/ChatModal";
import ProfileModal from "./Modals/ProfileModal";
import { useEffect, useState } from "react";

const locations = {
    profile: "Profile",
    posts: "Posts",
    gallery: "Gallery",
    todo: "ToDo"
}

function Pages({ allUsers, profileDetails, logOutHandler }) {

    const location = useLocation();

    const [profileModalDisplay, setProfileModalDisplay] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("Profile");


    useEffect(() => {
        let tempArray = location.pathname.split("/");
        let activeComponent = tempArray[tempArray.length - 1];
        setCurrentLocation(locations[activeComponent]);
    }, [location])

    return (
        <div className={styles.container}>
            <SideNav />
            <div className={styles.rightContainer}>
                <div className={styles.headerNav}>
                    <h2 className={styles.currentLocation}>{currentLocation}</h2>
                    <div className={styles.profileInfo} onClick={() => setProfileModalDisplay(!profileModalDisplay)}>
                        <img src={profileDetails.profilepicture} className={styles.image} />
                        <p className={styles.activeUserName}>{profileDetails.name}</p>
                    </div>
                    {profileModalDisplay && <ProfileModal allUsers={allUsers} profileDetails={profileDetails} logOutHandler={logOutHandler} />}

                </div>
                <hr />
                <Outlet />
                <ChatModal profileNames={
                    allUsers.filter((user) => {
                        return (user.id !== profileDetails.id);
                    }).map((user) => { return { name: user.name, profilepicture: user.profilepicture } })
                } />
            </div>


        </div>)
}

export default Pages;