import { createContext, useContext, useState, ReactNode } from 'react';

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
