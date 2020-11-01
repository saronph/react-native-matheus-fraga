import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'Saron',
    uid: '218915919859',
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
