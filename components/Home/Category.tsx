import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SingleProduct from "../General/SingleProduct";

interface IProps {
  categories: [];
  products: [];
}

interface IProduct {
  id: number;
  image: string;
  price: number;
  rating: { rate: number };
  title: string;
  category: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Category: React.FC<IProps> = ({ categories, products }) => {
  const [allProducts, setAllProducts] = useState<any>(products);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [category, setCategory] = useState<string>("men's clothing");

  useEffect(() => {
    setFilteredProducts(
      allProducts.filter((product: any) => product.category === category)
    );
  }, [category]);

  return (
    <section className="mt-16 w-full grid grid-cols-3">
      <div className="pl-8">
        <h3 className="font-secondary font-bold text-3xl">
          Check out our categories
        </h3>
        <div className="w-3/4 mt-4 flex flex-col">
          {categories.map((thecategory, index) => {
            return (
              <div
                className={`pl-2 py-1 rounded my-2 flex flex-start cursor-pointer ${
                  thecategory === category &&
                  "border-r-2 border-orange-500 bg-primary-300"
                } hover:border-r-2 hover:border-orange-500 hover:bg-primary-300 transition-all`}
                key={index}
                onClick={() => setCategory(thecategory)}
              >
                <p className="capitalize font-primary">{thecategory}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-start-2 col-end-4">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-margin-40-px"
        >
          {filteredProducts.map((product: any) => {
            const { id, image, price, rating, title, category }: IProduct =
              product;
            return (
              <SingleProduct
                key={id}
                id={id}
                image={image}
                price={price}
                rating={rating}
                title={title}
                category={category}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Category;
