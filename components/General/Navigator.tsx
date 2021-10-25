import { useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { RiSearch2Line } from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "../../state/redux/redux-hooks";
import { open, close, totals } from "../../state/redux/reduxSlices/cartSlice";

const Navigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { amount, cartOpen, cart } = useAppSelector((state) => state.cart);

  const handleCartToggle = () => {
    if (cartOpen) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  useEffect(() => {
    dispatch(totals());
  }, [cart]);
  return (
    <nav className="sticky shadow-lg flex justify-between items-center h-20 px-24">
      <div className="flex-1">
        <div className="flex flex-1 items-center gap-2 hover:text-orange-500 transition-all cursor-pointer">
          <VscMenu />
          <p className="font-neut">MENU</p>
        </div>
      </div>
      <p className="text-orange-500 font-secondary font-bold text-3xl flex-1 text-center">
        Oja
      </p>
      <div className="flex items-center justify-between flex-1 font-neut">
        <div className="group flex flex-col hover:gap-1 items-center">
          <div className="flex items-center gap-2 rounded cursor-pointer">
            <RiSearch2Line />
            <p>SEARCH</p>
          </div>
          <div className="h-0 group-hover:h-h2 w-0 group-hover:w-full bg-orange-500 rounded-full transition-all"></div>
        </div>
        <div
          className="relative group flex items-center justify-around gap-2 font-secondary cursor-pointer p-3"
          onClick={() => handleCartToggle()}
        >
          <p className="group-hover:text-orange-500 transition-all">CART</p>
          <p className="absolute top-0 right-0 font-bold text-orange-500 ">
            {amount}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
