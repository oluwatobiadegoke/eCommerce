import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useAppDispatch } from "../../state/redux/redux-hooks";
import { addItem } from "../../state/redux/reduxSlices/cartSlice";

type IProps = {
  product: IProduct;
};

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Product: React.FC<IProps> = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  const dispatch = useAppDispatch();
  return (
    <div className="max-h-screen flex gap-8 px-24 mt-24">
      <div className="flex-1 h-full overflow-y-hidden">
        {/* <Image src={image} width={200} height={450} /> */}
        <img
          src={image}
          alt={title}
          style={{ maxHeight: "calc(100vh - 176px)", width: "auto" }}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-secondary font-bold mb-6">{title}</h1>
        <p className="font-secondary text-3xl mb-6">${price}</p>
        <p className="font-primary mb-6">{description}</p>
        <p className="font-bold capitalize mb-6">
          Category: <span className="font-normal">{category}</span>
        </p>
        <div className="flex justify-start"></div>
        <button
          onClick={() =>
            dispatch(addItem({ id, price, title, image, amount: 1, category }))
          }
          className="bg-orange-100 hover:bg-opacity-50 transition-all mt-6 w-32 py-2 rounded text-sm font-secondary"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
