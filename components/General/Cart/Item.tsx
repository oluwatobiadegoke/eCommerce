import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import { useAppDispatch } from "../../../state/redux/redux-hooks";
import {
  removeItem,
  increase,
  decrease,
} from "../../../state/redux/reduxSlices/cartSlice";

interface IProps {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  amount: number;
}

const Item: React.FC<IProps> = ({
  id,
  title,
  image,
  price,
  category,
  amount,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between h-32 bg-primary-100 px-2 py-2 shadow-lg">
      <div className="flex-1 h-full flex justify-center">
        <img src={image} className="h-full w-auto" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-2">
        <p className="text-primary-800 capitalize text-sm font-neut">
          {category}
        </p>
        <p className="text-primary-900 capitalize font-primary">{title}</p>
      </div>
      <div className="flex-1 h-full flex items-center justify-center gap-4">
        <AiOutlineMinus
          onClick={() => dispatch(decrease({ id }))}
          className="text-xl rounded p-1 hover:bg-primary-200 transition-all cursor-pointer"
        />
        <p className="font-primary">{amount}</p>
        <AiOutlinePlus
          onClick={() => dispatch(increase({ id }))}
          className="text-xl rounded p-1 hover:bg-primary-200 transition-all cursor-pointer"
        />
      </div>
      <p className="flex-1 flex items-center justify-center font-bold font-primary">
        ${price}
      </p>
      <div className="flex items-center">
        <button
          onClick={() => dispatch(removeItem({ id }))}
          className="rounded p-2 hover:bg-primary-200 transition-all cursor-pointer"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Item;
