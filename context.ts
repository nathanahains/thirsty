import { createContext } from "react";
interface DataObj {
    [key: string]: any
}
interface ThirstyContext {
    data: DataObj;
    setData?: any;
  }
  
  const defaultState = {
      data: {},
      
  };

const AppContext = createContext<ThirstyContext>(defaultState)

export default AppContext