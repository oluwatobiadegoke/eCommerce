import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";

import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";

interface IProps {
  products: [];
}

const Home: NextPage<IProps> = ({ products }) => {
  return (
    <main>
      <Hero />
      <Products products={products} />
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: products.data,
    },
  };
};
