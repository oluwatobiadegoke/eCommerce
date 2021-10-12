import React, { useState } from "react";

import AppContext from "./AppContext";
import { AppContextInterface } from "./AppContext";

const AppProvider: React.FC = (props: any) => {
  const [openCart, setOpenCart] = useState<boolean>(false);

  const sharedValues: AppContextInterface = {
    openCart: openCart,
    setOpenCart: setOpenCart,
  };

  return (
    <AppContext.Provider value={sharedValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
