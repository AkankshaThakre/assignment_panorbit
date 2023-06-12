import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, redirect } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import ProfilePage from './Components/ProfilePage';
import PostsPage from './Components/PostsPage';
import GalleryPage from './Components/GalleryPage';
import ToDoPage from './Components/ToDoPage'
import Pages from './Components/Pages';

function App() {

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(res => { setUsers(res.users) })
      .catch(error => console.log(error))
  }, [])

  const [authState, setAuthState] = useState({
    loggedIn: false,
    profileData: undefined
  });

  const [users, setUsers] = useState([]);

  const logInHandler = (id) => {
    let temp = {
      ...authState
    }
    temp.loggedIn = true;
    users.forEach((user) => {
      if (user.id === id) {
        temp.profileData = user;
      }
    })
    setAuthState(temp);
  }

  const logOutHandler = () => {
    setAuthState({
      loggedIn: false,
      profileData: undefined
    });
    redirect("/");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authState.loggedIn ? <Pages allUsers={users} profileDetails={authState.profileData} logOutHandler={logOutHandler} /> : <LandingPage userDetails={users} logInHandler={logInHandler} />} >
          <Route path="profile" element={<ProfilePage profileDetails={authState.profileData} />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="todo" element={<ToDoPage />} />
          <Route index element={<Navigate to="/profile" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
