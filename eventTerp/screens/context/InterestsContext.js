import React, {createContext, useContext, useState} from 'react';

const InterestsContext = createContext();

export const InterestsProvider=({children}) => {
    const [interests, setInterests] = useState([]);

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
    
    export const useInterests = () => {
      const context = useContext(InterestsContext);
      if (!context) {
        throw new Error('useInterests must be used within an InterestsProvider');
      }
      return context;
    };