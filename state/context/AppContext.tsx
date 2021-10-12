import { createContext, useContext } from "react";

export interface AppContextInterface {
  setOpenCart: any;
  openCart: any;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;
