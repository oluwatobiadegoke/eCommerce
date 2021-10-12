import { GetServerSideProps } from "next";
import axios from "axios";
import Product from "../../components/Product/Product";

interface IProps {
  product: any;
}

const SingleProduct: React.FC<IProps> = ({ product }) => {
  return (
    <section>
      <Product product={product} />
    </section>
  );
};

export default SingleProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const productId = params?.id;

  const product = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  return {
    props: {
      product: product.data,
    },
  };
};
