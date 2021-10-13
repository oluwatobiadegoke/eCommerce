import { useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { RiSearch2Line } from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "../../state/redux/redux-hooks";
import { open, close, totals } from "../../state/redux/reduxSlices/cartSlice";

const Navigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { total, cartOpen, cart } = useAppSelector((state) => state.cart);

  const handleCartToggle = () => {
    if (cartOpen) {
      dispatch(close);
    } else {
      dispatch(open);
    }
  };

  useEffect(() => {
    dispatch(totals);
  }, [cart]);
  return (
    <nav className="sticky shadow flex justify-between items-center h-20 px-24">
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
          <div className="h-0 group-hover:h-2 w-0 group-hover:w-full bg-orange-500 rounded-full transition-all"></div>
        </div>
        <div
          className="flex items-center justify-around gap-2 font-secondary"
          onClick={() => handleCartToggle()}
        >
          <p>CART</p>
          <p>{total}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
