// src/context/UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Michael",
    title: "Computer Science Student",
    avatar: "https://placehold.co/96x96/FFFFFF/000000?text=JP",
    banner: "https://placehold.co/288x96/4A5568/FFFFFF?text=Banner+Image",
    posts: 3,
    followers: "500+",
    following: 440,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
