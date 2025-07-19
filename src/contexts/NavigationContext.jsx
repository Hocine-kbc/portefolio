import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext(undefined);

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const navigateTo = (page, projectId) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, selectedProjectId, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};