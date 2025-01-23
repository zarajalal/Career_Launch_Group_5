import React, {createContext, useContext, useState, useEffect} from 'react';

const InterestsContext = createContext();

export const InterestsProvider=({children}) => {
    const [interests, setInterests] =useState([]);

    const saveInterest = (title) => {
        setInterests((prevInts) => {
          if (prevInts.includes(title)) {
            return prevInts.filter((interest) => interest !== title);
          }
          return [...prevInts, title];
        });
      };
    
      return (
        <InterestsContext.Provider value={{ interests, saveInterest }}>
          {children}
        </InterestsContext.Provider>
      );
    };
    
    export const useInterests = () => useContext(InterestsContext);