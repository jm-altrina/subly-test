import React, { createContext, useState, ReactNode } from 'react';
import { FilterState, FilterContextProps } from '../types';  // Importing types for filter state and context props

// Creating the FilterContext with a default value
export const FilterContext = createContext<FilterContextProps>({
  filter: { category: '', status: '', language: '' },
  setFilter: () => {},
  resetFilter: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

// FilterProvider component that manages the filter state and provides context to children components
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  // Local state for managing the filter criteria
  const [filter, setFilterState] = useState<FilterState>({
    category: '',
    status: '',
    language: '',
  });

  // Function to update the filter state with partial new filter values
  const setFilter = (newFilter: Partial<FilterState>) => {
    setFilterState((prev) => ({ ...prev, ...newFilter }));
  };

  // Function to reset the filter to its default values
  const resetFilter = () => {
    setFilterState({
      category: '',
      status: '',
      language: '',
    });
  };

  // Providing the filter state and functions to children components
  return (
    <FilterContext.Provider value={{ filter, setFilter, resetFilter }}>
      {children}
    </FilterContext.Provider>
  );
};