import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";

import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import Category from "../components/Home/Category";

interface IProps {
  products: [];
  categories: [];
}

const Home: NextPage<IProps> = ({ products, categories }) => {
  return (
    <main>
      <Hero />
      <Products products={products} />
      <Category categories={categories} products={products} />
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  const categories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return {
    props: {
      products: products.data,
      categories: categories.data,
    },
  };
};
