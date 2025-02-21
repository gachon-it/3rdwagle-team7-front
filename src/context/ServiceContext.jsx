// context/UserContext.tsx

import React, { createContext, useCallback, useState } from 'react';

const contextDefaultValues = {
  user: {
    username: 'John Doe',
    email: '',
    major: '',
    studentNumber: '',
  },
  logInfo: () => {},
  defaultUserInfo: () => {},
  setName: (name) => {},
};

export const ServiceContext = createContext(contextDefaultValues);

export const useService = () => React.useContext(ServiceContext);

const ServiceProvider = ({ children }) => {
  const [user, setUser] = useState(contextDefaultValues.user);

  const logInfo = () => {
    console.log('- user:', user);
  };

  const setName = useCallback(
    (name) => {
      console.log('- change name to:', name);
      setUser({ ...user, name: name });
    },
    [user]
  );

  const defaultUserInfo = useCallback(() => {
    console.log('- make default user info');
    setUser(contextDefaultValues.user);
  }, []);

  const contextValue = {
    user,
    logInfo,
    setName,
    defaultUserInfo,
  };

  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
