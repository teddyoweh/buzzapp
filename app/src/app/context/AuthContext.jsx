"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
 
import { Js } from 'iconsax-react';
import { WebSocketClient } from '../config/socket';

function Loading() {
  return (
    <div className="loading">
      <img src={logo.src} alt="Loading..." />
    </div>
  );
}

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userid, setUserId] = useState(localStorage.getItem('userid'));
  const [uimg, setUimg] = useState(localStorage.getItem('uimg'));
const [username,setUsername] = useState(localStorage.getItem('username'))
  const router = useRouter();

  const webSocketClient = new WebSocketClient();

 
  

  return (
    <AuthContext.Provider value={{ username, userid,uimg,setUimg,setUsername,webSocketClient  }}>
      {children}
    </AuthContext.Provider>
  );
}