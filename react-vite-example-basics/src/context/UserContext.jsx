import React from "react";
import { useState } from "react";
import { useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    const isUserLoggedIn = () => {
        console.log('user:', JSON.stringify(currentUser));
        return !!currentUser?.email;
    }
    
    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, isUserLoggedIn }}>
            {props.children}
        </UserContext.Provider>
    );
}
export const useUserContext = () => {
    return useContext(UserContext);
}