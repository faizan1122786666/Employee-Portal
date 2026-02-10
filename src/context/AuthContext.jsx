import React, { useContext} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext({
  user: null,
  Login: (_userData) => {},
  Logout: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const AuthContextProvider = AuthContext.Provider;
