import Image from "next/image";
import { BsCart } from "react-icons/bs";
import Link from "next/link";

import StarRating from "../Home/StarRating";
import { useAppDispatch } from "../../state/redux/redux-hooks";
import { addItem } from "../../state/redux/reduxSlices/cartSlice";
export interface IProps {
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
  };
  title: string;
  category: string;
}

const SingleProduct: React.FC<IProps> = ({
  id,
  image,
  price,
  rating,
  title,
  category,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      key={id}
      className="relative bg-primary-100 p-2 mx-4 h-full flex flex-col"
    >
      <Link href={`/product/${id}`}>
        <a className="hover:bg-primary-400 rounded-b mb-2 cursor-pointer transition-all">
          <div className="w-full relative rounded overflow-x-hidden">
            <Image
              src={image}
              width={300}
              height={350}
              layout="responsive"
              alt={title}
            />
          </div>
          <p className="font-neut my-2 mx-2 px-2">{title}</p>
          <p className="font-secondary my-2 mx-2 px-2">${price}</p>
        </a>
      </Link>
      <StarRating rating={rating} />
      <button
        onClick={() =>
          dispatch(addItem({ id, price, title, image, amount: 1, category }))
        }
        className="absolute top-2 right-2 p-1 bg-primary-400 rounded outline-none cursor-pointer hover:bg-opacity-50 transition-all"
      >
        <BsCart className="text-2xl" />
      </button>
    </div>
  );
};

export default SingleProduct;
