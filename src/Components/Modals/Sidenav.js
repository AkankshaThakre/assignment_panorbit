import React, { useState, useEffect } from "react";
import styles from '../../CSS/Sidenav.module.css'
import { NavLink, useLocation } from "react-router-dom";

const navigationArray = [{
    path: "/profile",
    name: "Profile"
},
{
    path: "/posts",
    name: "Posts"
},
{
    path: "/gallery",
    name: "Gallery"
},
{
    path: "/todo",
    name: "ToDo"
}]

function SideNav() {

    const location = useLocation();

    const [currentLocation, setCurrentLocation] = useState("profile");


    useEffect(() => {
        let tempArray = location.pathname.split("/");
        let activeComponent = tempArray[tempArray.length - 1];
        setCurrentLocation(activeComponent);
    }, [location])

    return (
        <div className={styles.container}>
            <nav className={styles.sidenav}>
                <ul style={{ width: "100%" }}>
                    {navigationArray.map((item, index) => {
                        return (<>
                            <li className={`${styles.li} ${item.path === `/${currentLocation}` && styles.li_active}`}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                                {item.path === `/${currentLocation}` && <div className={styles.pointer}>{">"}</div>}
                            </li>
                            {index !== (navigationArray.length - 1) && <hr className={styles.line} />}
                        </>)
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default SideNav;