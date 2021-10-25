import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";

import Item from "./Item";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../state/redux/redux-hooks";
import { close, totals } from "../../../state/redux/reduxSlices/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { total, cartOpen, cart } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(totals());
  }, [cart]);

  return (
    <aside
      className={`transform flex flex-col p-4 bg-primary-500 fixed top-0 bottom-0 right-0 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      } h-screen w-2/4 transition-all duration-1000 ease-in-out`}
      style={{ zIndex: 1001 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-black text-4xl font-neut">Shopping cart</h2>
        <button
          onClick={() => dispatch(close())}
          className="bg-black hover:bg-opacity-50 transition-all p-2 rounded"
        >
          <AiOutlineClose className="text-primary-500 text-xl" />
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-4 h-full overflow-y-auto justify-start">
        {cart.map((item) => {
          const { id, title, price, image, amount, category } = item;
          return (
            <Item
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              amount={amount}
              category={category}
            />
          );
        })}
      </div>
      <div className="justify-self-end flex justify-between items-center">
        <button
          onClick={() => dispatch(close())}
          className="flex items-center justify-center py-1 pr-2 rounded gap-2 hover:bg-primary-200 transition-all"
        >
          <IoIosArrowBack />
          <p className="font-primary text-sm">Continue shopping</p>
        </button>
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="flex items-end gap-4">
            <p className="font-primary text-primary-800">TOTAL</p>
            <p className="text-3xl font-secondary">${total}</p>
          </div>
          <Link href="/checkout">
            <a className="py-1 px-2 text-white bg-green-400 rounded cursor-point uppercase text-xl hover:bg-opacity-50 transition-all">
              <BsCartCheck />
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
