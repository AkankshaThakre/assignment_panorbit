import React, { useState } from "react";
import { useEffect } from "react";

import SideNav from "./Modals/Sidenav";
import styles from "../CSS/Profilepage.module.css"
import ProfileModal from "./Modals/ProfileModal";


function ProfilePage({ profileDetails }) {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.container1}>
                    <img src={profileDetails.profilepicture} alt="Sorry! Can't load" className={styles.profilepicture} />
                    <div>{profileDetails.name}</div>
                    <div>
                        <div><span>Username : </span><span>{profileDetails.username}</span></div>
                        <div><span>email : </span><span>{profileDetails.email}</span></div>
                        <div><span>Phone : </span><span>{profileDetails.phone}</span></div>
                        <div><span>Website : </span><span>{profileDetails.website}</span></div>
                    </div>

                </div>
                <hr style={{ width: "80%" }} />
                <div className={styles.container2}>
                    <div>Company</div>
                    <div>
                        <div><span>Name : </span><span>{profileDetails.company.name}</span></div>
                        <div><span>catchphrase : </span><span>{profileDetails.company.catchPhrase}</span></div>
                        <div><span>bs : </span><span>{profileDetails.company.bs}</span></div>
                    </div>

                </div>
            </div>
            <div className={styles.rightContainer}>
                <div>Address</div>
                <div>
                    <div><span>Street : </span><span>{profileDetails.address.street}</span></div>
                    <div><span>Suite : </span><span>{profileDetails.address.suite}</span></div>
                    <div><span>City : </span><span>{profileDetails.address.city}</span></div>
                    <div><span>Zipcode : </span><span>{profileDetails.address.zipcode}</span></div>
                    <img src="https://i.stack.imgur.com/HILmr.png" alt="Can't load" className={styles.googleMap} />
                    <div><span >Lat: </span><span>{profileDetails.address.geo.lat}</span></div>
                    <div><span >Long: </span><span>{profileDetails.address.geo.lng}</span></div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;

