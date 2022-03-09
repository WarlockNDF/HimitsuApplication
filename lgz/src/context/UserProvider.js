import React from "react";

export const userContext = React.createContext();

const UserProvider = ({children}) => {

    const [profile, setProfile] = React.useState();

    const userStore = {
        profile : profile,
        updateProfile: (profile) => setProfile(profile)
    }

    return(
        <userContext.Provider value={userStore}>
            {children}
        </userContext.Provider>
    )

}

export default UserProvider;