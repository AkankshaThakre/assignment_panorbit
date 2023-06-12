import React, { useEffect, useState } from "react";
import styles from '../CSS/Landingpage.module.css'
import { NavLink } from "react-router-dom";

function LandingPage({ userDetails, logInHandler }) {

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                <h1 className={styles.heading}>Select an account</h1>
                <ul className={styles.scroller}>
                    {userDetails.map((user, index) => {
                        return (<>
                            <li key={index} className={styles.li} onClick={() => logInHandler(user.id)}>
                                <img src={user.profilepicture} alt="Gomen nasai" className={styles.profilepicture} />
                                <span className={styles.item}>{user.name}</span>
                            </li>
                            <hr className={styles.line} />
                        </>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default LandingPage;