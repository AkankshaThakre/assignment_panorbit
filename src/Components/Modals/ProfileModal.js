import { useEffect, useState } from "react";
import styles from '../../CSS/Profilemodal.module.css'


function ProfileModal({ allUsers, profileDetails, logOutHandler }) {

    const [user2, setUser2] = useState(undefined);
    const [user3, setUser3] = useState(undefined);

    useEffect(() => {
        let tempArray = allUsers.filter(function (user) {
            return (user.id !== profileDetails.profileID);
        })
        setUser2(tempArray[0]);
        setUser3(tempArray[1]);
    }, []);

    return (<div className={styles.container}>
        <div className={styles.activeUserContainer}>
            <img src={profileDetails.profilepicture} className={styles.image1} />
            <p className={styles.userName}>{profileDetails.name}</p>
            <p className={styles.userEmail}>{profileDetails.email}</p>
        </div>
        <hr className={styles.line} />
        <ul>
            <li className={styles.user}>
                <img src={user2?.profilepicture} className={styles.image} />
                <span>{user2?.name}</span>
            </li>
            <hr className={styles.line} />
            <li className={styles.user}>
                <img src={user3?.profilepicture} className={styles.image} />
                <span>{user3?.name}</span>
            </li>
        </ul>
        <button onClick={logOutHandler} className={styles.signOutButton}>Sign out</button>
    </div >)
}

export default ProfileModal;