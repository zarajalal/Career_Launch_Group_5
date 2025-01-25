import React, {createContext, useContext, useState} from 'react';

const SelectedContext = createContext();

export const SelectedProvider=({children}) => {
    const [selected, setSelected] = useState([]);

    const saveSelected = (selected) => {
        setSelected((prevSelected) => {
          if (prevSelected.includes(selected)) {
            return prevSelected.filter((event) => event !== selected);
          }
          return [...prevSelected, selected];
        });
      };
    
      return (
        <SelectedContext.Provider value={{ selected, saveSelected }}>
          {children}
        </SelectedContext.Provider>
      );
    };
    
    export const useSelected = () => {
      const context = useContext(SelectedContext);
      if (!context) {
        throw new Error('useSelected must be used within an SelectedProvider');
      }
      return context;
    };