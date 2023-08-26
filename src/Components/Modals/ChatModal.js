import React, { useEffect, useState } from "react";
import styles from '../../CSS/Chatmodal.module.css'
import DownArrow from '../../Assets/downArrow.svg';
import chatIcon from '../../Assets/message-regular.svg';

function ChatModal({ profileNames }) {

  const [showChat, setShowChat] = useState(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setShowChat(!showChat)} className={styles.heading}>
        <img src={chatIcon} />
        <p className={styles.headerText}>Chats</p>
        <img src={DownArrow} height={10} width={10} />
      </div>
      {showChat && (
        <ul className={styles.scroller}>
          {profileNames.map((profile, index) => {
            return (
              <li key={index} className={styles.profiles}>
                <img src={profile.profilepicture} className={styles.profilepicture} />
                <div className={styles.innerProfile}>
                  <p>{profile.name}</p>
                  <div className={styles.onlineStatus}></div>
                </div>
              </li>)
          })}
        </ul>)}
    </div>
  )
}

export default ChatModal;