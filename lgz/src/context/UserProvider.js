import React from "react";
import http from "../../src/service/http";

export const userContext = React.createContext();

const UserProvider = ({children}) => {

    const [profile, setProfile] = React.useState();

    const getUser = async () => {
        try {
          const { status, data } = await http.get("user");
          if (status !== 200) throw "No data user found";
          console.log(data.data);
          setProfile(data.data);
          console.log(profile.userDetail);
        } catch (err) {
          alert(err.message);
          console.error(err.message);
        }
      };

    const userStore = {
        profile : profile,
        updateProfile: async () => {
            await getUser();
        }
    }

    return(
        <userContext.Provider value={userStore}>
            {children}
        </userContext.Provider>
    )

}

export default UserProvider;